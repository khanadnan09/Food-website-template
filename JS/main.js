// owlCarousel for hero section
$('.hero-slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// owlCarousel for dishes section
$('.DIShes-slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        1000:{
            items:7
        }
    }
})
// owlCarousel for top-brands
$('.top_brands').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        460:{
            items:3
        },
        576:{
            items:4
        },
        768:{
            items:5
        },
        1100:{
            items:6
        }
    }
})
// AOS JS
AOS.init({
    // easing: 'ease-out-back',
    // duration: 1000
 });

// for Tooltip
 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
 })

//  side NavBAR
function openNav() {
    document.getElementById("mySidenav").style.width = "290px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }