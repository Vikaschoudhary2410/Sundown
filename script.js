const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})

// var elem = document.querySelector("#elem1");
// var image = elem.getAttribute("data-image");
// console.log(image);

var elem = document.querySelectorAll(".elem");

elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        console.log(image);
        fixed.style.backgroundImage = `url(${image})`
    })
});

}

function swiprejs(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function menuAnimation(){
    let menu = document.querySelector("nav #menu");
    let fullsrc = document.querySelector("#full-src");
    let image = document.querySelector("nav img");
    let flag = 0;
    menu.addEventListener("click",function(){
        if(flag == 0){
            fullsrc.style.top = 0;
            image.style.opacity = 0;
            flag = 1;
        }
        else{
            fullsrc.style.top = "-100%";
            image.style.opacity = 1;
            flag = 0;
        }
    })
}

page3Animation();
swiprejs();
menuAnimation();

let load = document.querySelector("#loader");
setTimeout(function(){
    load.style.top = "-100%";
},4000)