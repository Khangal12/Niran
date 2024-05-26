import express from 'express';
import pkg from 'pg';
import crypto from 'crypto';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const { Pool } = pkg;
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1222",
    database: "Niran"
});

pool.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch(err => console.error('Error connecting to database', err));

const secretKey = crypto.randomBytes(32).toString('hex');

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

app.post("/login", async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const result = await pool.query(`SELECT * FROM public."User" WHERE user_name = $1 and user_pwd = $2`, [email,pwd]);
        const user = result.rows[0];
        res.json({ user_id: user.user_id });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/order", async (req, res) => {
    try {
        const { user_id, artist_id, hour_id, day_id, order_date } = req.body;
        const query = `
            INSERT INTO public."Order" (user_id, artist_id, hour_id, day_id, order_date)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const result = await pool.query(query, [user_id, artist_id, hour_id, day_id, order_date]);

        res.status(201).json({
            message: "Order created successfully",
            order: result.rows[0]
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({
            message: "Error creating order",
            error: error.message
        });
    }
});
app.post("/comment/:aritsId" , async (req,res)=>{
    try{
    const artistID = req.params.aritsId;
    const {user_id,comment_text,commented_date,star_count} = req.body;
    const query=`insert into public."Comment" (artist_id,user_id,comment_text,commented_date,star_count)
    values ($1,$2,$3,$4,$5)
    returning *;
    `;
    const result = await pool.query(query,[artistID,user_id,comment_text,commented_date,star_count]);
    res.status(201).json({
        message: "Comment created successfully",
        order: result.rows[0]
    });
}

catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({
        message: "Error creating comment",
        error: error.message
    });
}})
app.get("/getcomment/:artistId", (req, res) => {
    const artistId = req.params.artistId;
  
    pool.query(
      `SELECT c.comment_text, c.commented_date, c.star_count, u.user_name
       FROM public."Comment" c
       INNER JOIN public."User" u ON c.user_id = u.user_id
       WHERE c.artist_id = $1
       ORDER BY c.commented_date DESC;`,
      [artistId],
      (err, result) => {
        if (err) {
          res.status(500).send("Internal server error");
          return;
        }
        res.json(result.rows);
      }
    );
  });
  app.get('/getorder/:artistId/:selectedDay', (req, res) => {
    const artistId = req.params.artistId;
    const selectedDay = req.params.selectedDay;
    pool.query(
      `SELECT hour_id FROM public."Order" WHERE day_id = $1 AND artist_id = $2`,
      [selectedDay, artistId],
      (err, result) => {
        if (err) {
          console.error('Error fetching orders:', err);
          res.status(500).send('Internal server error');
          return;
        }
        res.json(result.rows);
      }
    );
  });
  app.get(`/getorder/:userId`,(req,res)=>{
    const userId = req.params.userId;
    pool.query(
        `SELECT a.artist ,a.img, h.hour_time , d.day_name , o.order_date
        FROM public."Order" o
        INNER JOIN public."HourTable" h ON o.hour_id = h.hour_id
        INNER JOIN public."Days" d ON o.day_id = d.day_id
        inner join public."Artist" a on o.artist_id = a.id
        where o.user_id=$1;
        `,[userId],(err,result)=>{
          if(err){
            console.error('Error fetching order:',err);
            res.status(500).send('Internal server error');
            return;
          }
          res.json(result.rows)
        }
    )
  })
// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
