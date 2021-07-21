$('.smooth-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false, 
    smartSpeed:800,  
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//JAVASCRIPT


var x = document.getElementById('buton');  //GLOBAL BUTTON

x.addEventListener('click',function(){

// one
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var dollar = document.getElementById('dollar');
//  two
var p1_ = document.getElementById('p1_');
var p2_ = document.getElementById('p2_');
var dollar_ = document.getElementById('dollar_');

//three
var p1_v = document.getElementById('p1_v');
var p2_v= document.getElementById('p2_v');
var dollar_v = document.getElementById('dollar_v');


  if(p1.innerHTML === "Basic"){
      p1.innerHTML="Month"
  }
  else{
      p1.innerHTML="Basic"
  }

  if(dollar.innerHTML === "14$"){
    dollar.innerHTML="220$"
}
else{
    dollar.innerHTML="14$"
};

if(p2.innerHTML === "Year"){
    p2.innerHTML="Month"
}
else{
    p2.innerHTML="Year"
};

//two

if(p1_.innerHTML === "Basic"){
    p1_.innerHTML="Month"
}
else{
    p1_.innerHTML="Basic"
};

if(dollar_.innerHTML === "28$"){
    dollar_.innerHTML="105$"
}
else{
    dollar_.innerHTML="28$"
};

if(p2_.innerHTML === "Year"){
    p2_.innerHTML="Month"
}
else{
    p2_.innerHTML="Year"
};
 
//three

if(p1_v.innerHTML === "Basic"){
    p1_v.innerHTML="Month"
}
else{
    p1_v.innerHTML="Basic"
};


if(dollar_v.innerHTML === "42$"){
    dollar_v.innerHTML="204$"
}
else{
    dollar_v.innerHTML="42$"
};

if(p2_v.innerHTML === "Year"){
    p2_v.innerHTML="Month"
}
else{
    p2_v.innerHTML="Year"
};





})

  
  

