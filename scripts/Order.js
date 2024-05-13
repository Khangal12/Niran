class OrderPage{
    async Init(){
        try {
            const rs = await fetch('/scripts/artist.json');
            const response = await rs.json()
            const products = response.record.products

            const artistContainer = document.getElementById("artist-container")
            products.sort((a, b) => b.count - a.count);

            products.map(item =>{
                console.log(item.id);
                artistContainer.innerHTML += `<my-artist id="${item.id}" artist="${item.artist}" img="${item.img}" year="${item.year}" reward="${item.reward}" count="${item.count}" ></my-artist>`
            })

        } catch (error) {
            console.log(error);
        }
    }
}

var order = new OrderPage();
order.Init();

