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
      <div class=" bg-[#ffb524] h-[120px] w-[120px] flex justify-center items-center rounded-2xl hover:scale-[1.2] hover:bg-[#81c408] ">
      <img class ="w-[70px] text-white " src = "${picture[i]}" alt = ""/>
      </div>
      <div class="p-4 text-center">
        <h3 class="text-xl font-bold text-[#45595b] font-[Relaway] ">${title[i]}</h3>
        <p class="mt-3 text-sm text-[747d88] font-[Relaway] ">${info[i]}</p>
        
      </div>
    </div>
    `
}

