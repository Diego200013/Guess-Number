/*----------------------*
|                       |
|      01010101010101   |
|      10101010101010   |
|      01010101010101   |
|      10101010101010   |
/*----------------------*/

let numeroAleatorio= Math.round(Math.random()*100)+1;

var valueUser = document.getElementById("userNum");

valueUser.addEventListener('input',function(){


    var num = valueUser.value;
    console.log(num);
    
    show(num)


});

  function show(value){

   let anuncio = document.getElementById("anuncio");
   

   if((value<0)||(value>100)||(isNaN(value))){

     anuncio.style.color = 'red';
     anuncio.style.textShadow= ' 10px 15px 10px grey';
     anuncio.innerHTML= "Enter a Valid Number";

   }
   
   else if (value==numeroAleatorio) {
    
      anuncio.style.color = 'green';
      anuncio.style.textShadow= ' 10px 15px 10px grey';
      anuncio.innerHTML="Awesome!!! the number is: "+numeroAleatorio;

   }

   else if (value>numeroAleatorio) {
     
     anuncio.style.color = 'blue';
     anuncio.style.textShadow= ' 10px 15px 10px grey';
     anuncio.innerHTML="el numero es menor"

   }

   else if(value<numeroAleatorio){

    anuncio.style.color = 'blue',
    anuncio.style.textShadow= ' 10px 15px 10px grey';
    anuncio.innerHTML="el numero es mayor"

   }else{

    anuncio.style.color = 'orange';
    anuncio.style.textShadow= ' 10px 15px 10px grey';
    anuncio.innerHTML = 'what\'s going on? Is your computer crazy?'
   }

}





  








