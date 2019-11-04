$('.owl-one').owlCarousel({
    loop:false,

    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        960:{
            items:3
        }
    },
    dots:false
})

$('.owl-two').owlCarousel({
    loop:false,
    margin: 45,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        960:{
            items:3
        }
    },
    dots:false
})