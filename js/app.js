let menu = document.getElementById('menu')

function omenu(){
    menu.style.left = 0
}
function cmenu(){
    menu.style.left= '-100%'
}

let drop = document.getElementById('drop')
function dropdown(){
   if( drop.style.display == 'none'){
        drop.style.display = 'block'
   }
   else{
    drop.style.display = 'none'
   }
}

let title = ['Free Shipping' , 'Security Payment' , '30 Day Return' , '24/7 Support']
let info = ['Free on order over $300' , '100% security payment' ,'30 day money guarantee' ,'Support every time fast']
let picture = ['https://static.vecteezy.com/system/resources/previews/019/879/187/non_2x/car-monochrome-icon-on-transparent-background-free-png.png' , 'https://cdn-icons-png.flaticon.com/512/102/102649.png' , 'https://cdn-icons-png.flaticon.com/512/130/130897.png' , 'https://image.similarpng.com/file/similarpng/original-picture/2021/01/Call-icon-on-transparent-background-PNG.png']

let container = document.getElementById('container')
for(let i = 0 ; i <title.length ; i++){
    container.innerHTML+=`
        <div class=" lg:ml-9 shadow-sm py-6 p-2 w-full lg:w-[300px] rounded-lg overflow-hidden flex flex-col justify-center items-center bg-[#f4f6f8]  mt-4 mx-3 lg:mx-0">
      <div class=" bg-[#ffb524] h-[90px] w-[90px] flex justify-center items-center rounded-2xl hover:scale-[1.2] hover:bg-[#81c408] ">
      <img class ="w-[40px] text-white " src = "${picture[i]}" alt = ""/>
      </div>
      <div class="p-4 text-center">
        <h3 class="text-xl font-bold text-[#45595b] font-[Raleway] mt-2 ">${title[i]}</h3>
        <p class="mt-3 text-sm text-[747d88] font-[Raleway] ">${info[i]}</p>
        
      </div>
    </div>
    `
}
//Fruits
let img2 = ['https://themewagon.github.io/fruitables/img/fruite-item-5.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-5.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-2.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-4.jpg' ,'https://themewagon.github.io/fruitables/img/fruite-item-3.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-1.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-2.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-5.jpg']
let title2 = ['Grapes' , 'Grapes' ,'Raspberries' , 'Apricots' , 'Banana' , 'Oranges' , 'Raspberries' , 'Grapes']
let text2 = ['Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt']
let price2 = ['$4.99 / kg' , '$4.99 / kg' ,'$3.99 / kg' , '$8.59 / kg' , '$4.67 / kg' ,'$7.99 / kg' , '$4.99 / kg'  , '$4.99 / kg' ]
let fruitcontainer = document.getElementById('fruitcontainer')
for (let m = 0; m < img2.length; m++) {
    fruitcontainer.innerHTML += `
              <div class=" relative  border border-[#ffb524] h-[425px] w-[300px] mt-2 rounded-[20px] overflow-hidden hover:shadow-[0_0_40px_#B9C5B3] duration-300 ease-in-out ">
                <div class="overflow-hidden "><img class="overflow-hidden hover:scale-125 duration-500" src="${img2[m]}" alt=""/></div>
                <p class="text-center text-[#45595b] text-2xl font-[Raleway] font-bold mt-4">${title2[m]}</p>
                <p class="text-center font-[Open_Sans] text-[#747d88] mt-2">${text2[m]}</p>
                <div class="flex justify-around items-center mt-5 ">
                    <p class="text-[#45595b] font-bold font-[Open_Sans]">${price2[m]}</p>
                    <p class="text-[#81c408] border border-[#ffb524] px-3 py-1 rounded-2xl hover:bg-[#ffb524] "><i class="fa-solid fa-basket-shopping"></i> <span class="font-[Open_Sans] font-md hover:text-white">Add to cart</span></p>
                </div>
                <span class="bg-[#ffb524] absolute top-2 left-2 text-white w-[70px] flex justify-center items-center rounded-xl px-3 py-1">Fruits</span>
            </div>
    `
    
}

//Vegetables
let img3 = ['https://themewagon.github.io/fruitables/img/vegetable-item-5.jpg' , 'https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg' , 'https://themewagon.github.io/fruitables/img/vegetable-item-5.jpg' , 'https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg' , 'https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg', 'https://themewagon.github.io/fruitables/img/vegetable-item-1.jpg' ,'https://themewagon.github.io/fruitables/img/vegetable-item-3.png' , 'https://themewagon.github.io/fruitables/img/vegetable-item-4.jpg']
let title3 = ['Potatoes' , 'Parsely' , 'Potatoes' , 'Parsely' ,'Parsely' , 'Tomatoes' ,'Banana' , 'Bell Paper']
let text3 = ['Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt','Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' ,'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt']
let price3 = ['$7.99 / kg' ,'$4.99 / kg','$7.99 / kg','$4.99 / kg','$4.99 / kg','$9.99 / kg','$6.99 / kg','$13.99 / kg']
let vegetables = document.getElementById('vegetables')
for (let v = 0; v < img3.length; v++) {
   vegetables.innerHTML += `
          <div class=" shrink-0 relative  border border-[#ffb524] h-[445px] w-[300px] mt-2 rounded-[20px] overflow-hidden hover:shadow-[0_0_40px_#B9C5B3] duration-300 ease-in-out ">
                <div class="overflow-hidden "><img class="overflow-hidden hover:scale-125 duration-500" src="${img3[v]}" alt=""/></div>
                <p class="text-center text-[#45595b] text-2xl font-[Raleway] font-bold mt-4">${title3[v]}</p>
                <p class="text-center font-[Open_Sans] text-[#747d88] mt-2">${text3[v]}</p>
                <div class="flex justify-around items-center mt-5 ">
                    <p class="text-[#45595b] font-bold font-[Open_Sans]">${price3[v]}</p>
                    <p class="text-[#81c408] border border-[#ffb524] px-3 py-1 rounded-2xl hover:bg-[#ffb524] "><i class="fa-solid fa-basket-shopping"></i> <span class="font-[Open_Sans] font-md hover:text-white">Add to cart</span></p>
                </div>
                <span class="bg-[#81c408] absolute top-2 right-2 text-white w-[90px] flex justify-center items-center rounded-xl px-3 py-1">Vegetable</span>
            </div>
   `
    
}

//Bestseller 
let img4 = ['https://themewagon.github.io/fruitables/img/best-product-1.jpg' , 'https://themewagon.github.io/fruitables/img/best-product-2.jpg' , 'https://themewagon.github.io/fruitables/img/best-product-3.jpg' , 'https://themewagon.github.io/fruitables/img/best-product-4.jpg' ,'https://themewagon.github.io/fruitables/img/best-product-5.jpg' ,'https://themewagon.github.io/fruitables/img/best-product-6.jpg']
let title4 = ['Organic Tangerine' , 'Organic Raspbery' , 'Organic Banana', 'Organic Plum' , 'Organic Grape' ,'Organic Apple' ]
let price4 = ['3.12 $' , '5.12 $' , '8.42 $' , '7.18 $' , '13.23 $' , '12.32 $']
let bestseller = document.getElementById('bestseller')

for (let b = 0; b < img4.length; b++) {
  bestseller.innerHTML += `
         <div class="h-[220px] w-[370px] lg:w-[390px] bg-[#f4f6f8] rounded-[10px] flex items-center justify-around mx-1">
                <div><img class="h-[170px] w-[170px] rounded-[50%]" src="${img4[b]}" alt=""></div>
                <div class="flex flex-col gap-3">
                    <p class="text-[#45595b] font-[Raleway] font-[500] text-xl hover:text-[#679d06] duration-200 ease-linear">${title4[b]}</p>
                    <p><i class="fa-solid fa-star text-[#81c408]"></i><i class="fa-solid fa-star text-[#81c408]"></i><i class="fa-solid fa-star  text-[#81c408]"></i><i class="fa-solid fa-star text-[#81c408]"></i><i class="fa-solid fa-star text-[#747d88]"></i></p>
                    <p class="text-[#45595b] font-[Raleway] text-xl font-[500]">${price4[b]}</p>
                    <p class=" w-[140px] text-[#81c408] border border-[#ffb524] px-3 py-1 rounded-2xl hover:bg-[#ffb524] duration-300 ease-in-out"><i class="fa-solid fa-basket-shopping"></i> <span class="font-[Open_Sans] font-md hover:text-white">Add to cart</span></p>

                </div>
            </div>
  `
    
}

//bestseller davami
let img5 = ['https://themewagon.github.io/fruitables/img/fruite-item-1.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-2.jpg' ,'https://themewagon.github.io/fruitables/img/fruite-item-3.jpg' , 'https://themewagon.github.io/fruitables/img/fruite-item-4.jpg']
let title5 = ['Organic Tangerine' , 'Organic Raspbery' ,'Organic Banana' , 'Organic Plum'] 
let price5 = ['4.15 $' , '5.56 $' , '9.52 $' , '12.58 $']
let bestdavami = document.getElementById('bestdavami')
for (let s = 0; s < img5.length; s++) {
     bestdavami.innerHTML += `
              <div class=" w-[320px] h-[400px] overflow-hidden">
                <div class = "overflow-hidden " ><img class=" hover: rounded-[10px] object-cover rounded-[10px] hover:scale-[1.2] duration-500 ease-linear overflow-hidden" src="${img5[s]}" alt=""></div>
                    <div class="flex flex-col gap-2 justify-center items-center">
                    <p class="text-[#45595b] font-[Raleway] font-[500] text-xl hover:text-[#679d06] duration-200 ease-linear mt-3">${title5[s]} </p>
                     <p><i class="fa-solid fa-star text-[#81c408]"></i><i class="fa-solid fa-star text-[#81c408]"></i><i class="fa-solid fa-star  text-[#81c408]"></i><i class="fa-solid fa-star text-[#81c408]"></i><i class="fa-solid fa-star text-[#747d88]"></i></p>
                     <p class="text-[#45595b] font-[Raleway] text-xl font-[500]">${price5[s]}</p>
                    <p class=" w-[140px] text-[#81c408] border border-[#ffb524] px-3 py-1 rounded-2xl hover:bg-[#ffb524] duration-300 ease-in-out"><i class="fa-solid fa-basket-shopping"></i> <span class="font-[Open_Sans] font-md hover:text-white">Add to cart</span></p>
    
                    </div>
                </div>
    `
}
 //users
 let users = document.getElementById('users')
let text6 = ['satisfied customers', 'quality of service' , 'quality certificates' , 'Available Products']
let deyer = ['1963' , '99%' , '33' , '789']
for (let t = 0; t < text6.length; t++) {
    users.innerHTML += `
        <div class="bg-white w-[300px] h-[290px] flex flex-col justify-center items-center gap-5 rounded-[10px] shadow-[0_0_8px_#B9C5B3]">
                <p><i class="fa-solid fa-users text-[#ffb524] text-5xl"></i></p>
                <p class="text-[#81c408] font-[Raleway] text-2xl font-[600] uppercase text-center w-[50%] ">${text6[t]}</p>
                <p class="text-[#45595b] font-[Raleway] text-3xl font-[600]">${deyer[t]}</p>
            </div>
    `
    
}

 