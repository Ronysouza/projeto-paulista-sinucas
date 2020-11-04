var inicio = document.getElementById('inicio')
var portifolio = document.getElementById('portifolio')
var sobre = document.getElementById('sobre')
var contato = document.getElementById('contato')
var letras = document.getElementById('letras')
var abrir_imagen_modal= document.getElementById('abrir_imagen_modal')

var button = document.querySelector('button');
//var fechar_modal_com = document.getElementById('fechar_modal_com')

var asside_carrossel = document.querySelector('.asside_carrossel')
var modal_p = document.querySelector('.modal_p') 
var menu_li_a = document.querySelectorAll('.menu_li_a')
var menu_li = document.querySelectorAll('.menu_li')
var home = document.querySelector('.home')
var fechar_modal_sair = document.querySelectorAll('.fechar_modal_sair')
var menu_togle = document.querySelector('.menu_togle')
var botoes_menu = document.querySelector('.botoes_menu')
var modal_v = document.querySelector('.modal_v')
var modal_carford = document.querySelector('.modal_carford')
var modal_vipmodas = document.querySelector('.modal_vipmodas')
var modal_vidafarma = document.querySelector('.modal_vidafarma')
var email = document.querySelector('.email')
var modal_android = document.querySelector('.modal_android')
var abrir_imagen_modal= document.querySelector('.abrir_imagen_modal')

 

$(document).ready(function(){
    
    $('.asside_carrossel').animate({
        opacity:'toggle'
    },500)


    $('.asside_port').animate({
        opacity:'toggle'
    },1000)



    $('.asside_servicos').animate({
        opacity:'toggle'
    },1000)

    
    $('.asside_sobre').animate({
        opacity:'toggle'
    },1000)


    $('.asside_videos').animate({
        opacity:'toggle'
    },1000)
    $('.asside_contato').animate({
        opacity:'toggle'
    },1000)
        
})



 

button.addEventListener('click',function(){
     

     console.log('oknknkj')

    $( ".menu" ).animate({
       
        opacity: "toggle"
         
      },200)
    
    

     

})


document.getElementById('fechar_modal_com').addEventListener('click',function(){
       //document.querySelector('.modal_p').style.display = 'none'

       $('.modal_p').animate({
           width:'toggle',
           opacity:'hide',
           //display:'none'
       },500)
    
})




menu_li_a.forEach(function(item,index){
    item.addEventListener('click',function(e){
        //e.preventDefault();
          
        menu_li.forEach(function(item_menu,index){
            item_menu.addEventListener('mouseup',function(){
                menu_li.forEach(function(item_remove){
                    item_remove.classList.remove('menu_li_fixed')
                })
                item_menu.classList.add('menu_li_fixed')
               //console.log(item_menu)
            })
        })     
 
        
        
        
    })

})



menu_togle.addEventListener('click',function(){
     
       if(botoes_menu.style.display == 'none'){
        botoes_menu.style.display = 'block'

       }else{
        botoes_menu.style.display = 'none'
       } 
        
   
    

})
   
modal_v.addEventListener('click',function(e){
    e.preventDefault();
     
       // document.querySelector('.modal_t').style.display = 'block'

       $('.modal_t').animate({
           opacity:'toggle'
       })
     
})



modal_carford.addEventListener('click',function(e){
    e.preventDefault();
   // document.querySelector('.modal_carrossel').style.display = 'block'

        $('.modal_carrossel').slideDown('slow')



})


modal_vipmodas.addEventListener('click',function(e){
    e.preventDefault();
   
    //document.querySelector('.modal_carrossel_info').style.display = 'block'

      $('.modal_carrossel_info').animate({
           
          opacity:'show'
      })


})



modal_vidafarma.addEventListener('click',function(e){
    e.preventDefault();
    
   
   // document.querySelector('.modal_carrossel_vidafarma').style.display = 'block'

   $('.modal_carrossel_vidafarma').animate({
           
    opacity:'show'
})


})

email.addEventListener('click',function(e){
    e.preventDefault();
    
   
   // document.querySelector('.modal_carrossel_email').style.display = 'block'

   $('.modal_carrossel_email').show(1000)


})


modal_android.addEventListener('click',function(e){
    e.preventDefault();
    
   
   // document.querySelector('.modal_android_info').style.display = 'block'

   $('.modal_android_info').animate({
       opacity:'toggle'
   })


})

 

fechar_modal_sair.forEach(function(item){
    item.addEventListener('click',function(){
   
  
         
    
   
         
        $('.modal_t').animate({
            opacity:'hide'
        })
        $('.modal_carrossel').animate({
            opacity:'hide'
        })

        $('.modal_carrossel_vidafarma').animate({
            opacity:'hide'
        })
        $('.modal_carrossel_info').animate({
            opacity:'hide'
        })
        $('.modal_carrossel_email').animate({
            opacity:'hide'
        })
        $('.modal_android_info').animate({
            opacity:'hide'
        })
        $('.modal_imagem_int').animate({
            opacity:'hide'
        })

        //document.querySelector('').style.display = 'none'
        //document.querySelector('').style.display = 'none'
        //document.querySelector('').style.display = 'none'
       //document.querySelector('').style.display = 'none'
        //document.querySelector('.modal_android_info').style.display = 'none'
       // document.querySelector('').style.display ='none'
   
        
    })

}) 


    



    
    








 
 
  
  

 

