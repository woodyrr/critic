const coffee = [
    {
      "id": 1,
      "name": "Cappuccino",
      "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
      "price": "$5.20",
      "rating": 4.7,
      "votes": 65,
      "popular": true,
      "available": true
    },
    {
      "id": 2,
      "name": "House Coffee",
      "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg",
      "price": "$3.50",
      "rating": 4.85,
      "votes": 15,
      "popular": true,
      "available": true
    },
    {
        "id": 3,
        "name": "Espresso",
        "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg",
        "price": "$2.50",
        "rating": 4.9,
        "votes": 55,
        "popular": false,
        "available": true
    },
    {
      "id": 4,
      "name": "Coffee Latte",
      "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg",
      "price": "$4.50",
      "rating": 5.0,
      "votes": 23,
      "popular": false,
      "available": true
    },
    {
      "id": 5,
      "name": "Chocolate Coffee",
      "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg",
      "price": "$4.00",
      "rating": "4.65",
      "votes": 122,
      "popular": false,
      "available": false
    },
    {
      "id": 6,
      "name": "Valentine Special",
      "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg",
      "price": "$5.50",
      "rating": 0,
      "votes": 0,
      "popular": false,
      "available": true
    }
  ]

//create some if else statement for the stars,ratings and soldouts.
{/* <div class="text-[#ED735D]">
    Sold out
</div> 
<div class="text-[#6F757C]">No ratings</div>*/}
let productEl = document.getElementById("main-section");
function renderProducts(){
    coffee.forEach( (item) => {
        productEl.innerHTML += `
                <div id="" class="flex flex-col gap-2 relative">
                    
                    <img id="itemImage" src="${item.image}" alt=""  class="h-[240px] rounded-2xl ">
                    <div class="absolute bg-[#F6C768] px-2 py-1 text-[#111315] font-semibold rounded-full top-2 left-2">popular</div>
                    
                    
                    <div class="flex justify-between">
                        <div class="name text-xl">${item.name}</div>
                        <div class="pricing bg-[#BEE3CC] p-2 rounded-md text-[#111315] font-semibold">${item.price}</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex gap-2 font-semibold">
                            <div class="flex">
                                <div>
                                    <img src="./assets/Star_fill.svg" alt="" srcset="">
                                </div>
                                <div class="rating">${item.rating}</div>
                            </div>
                            <div v-else class="flex gap-2">
                                <div>
                                    <img src="./assets/Star.svg" alt="" srcset="">
                                </div>
                                
                            </div>
                            
                            <div class="votes text-[#6F757C]" v-if="items.votes > 0">(${item.votes} votes)</div>
                        </div>
                        <div>
                            
                        </div>
                        
                    </div>
                    
                </div> 
        `;
    });
}
renderProducts()