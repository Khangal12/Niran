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

        const result = await pool.query(`SELECT * FROM public."User" WHERE user_name = $1`, [email]);
        const user = result.rows[0];
        
        if (!user || pwd !== user.user_pwd) {
            return res.status(400).json({ message: "Please check your email or password" });
        }
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
app.post("/comment/:id" , async (req,res)=>{
    try{
    const artistID = req.params.id;
    const {user_id,comment_text,comment_date,star_count} = req.body;
    const query=`insert into public."Comment" (artist_id,user_id,comment_text,commented_date,star_count)
    values ($1,$2,$3,$4,$5)
    returning *;
    `;
    const result = await pool.query(query,[artistID,user_id,comment_text,comment_date,star_count]);
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

// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
