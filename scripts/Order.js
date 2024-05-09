class OrderPage{
    async Init(){
        try {
            const rs = await fetch('/scripts/artist.json');
            const response = await rs.json()
            const products = response.record.products

            const artistContainer = document.getElementById("artist-container")

            products.map(item =>{
                artistContainer.innerHTML += `<my-artist artist="${item.artist}" img="${item.img}" year="${item.year}" reward="${item.reward}" count="${item.count}" ></my-artist>`
            })

        } catch (error) {
            
        }
    }

    async fetchArtistData() {
        try {
            const response = await fetch('./artist.json');
            const responseData =  await response.json();
            console.log(responseData);
            return responseData;
        } catch (error) {
            console.error('Error fetching artist data:', error);
            return null;
        }
    }
}

var order = new OrderPage();
order.Init();

