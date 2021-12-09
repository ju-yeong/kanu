$('.modal>div').click(function() {
    $('.modal').css('display','none');
})




$('.btn').click(function(){
    $('.gnb').slideToggle()
})

AOS.init();

$(window).on('scroll',function(){
    let point = $(window).scrollTop();
    // console.log(point)
    if($(window).width() > 1000){
        if(point > 600){
            $('nav').slideDown({
                start: function () {
                    $(this).css({
                      display: "flex"
                    });
                }
            })
                
        } else {
            $('nav').slideUp();
        }
    } else {
        $('nav').css('display','flex');
    }
})

// section03 animation

$(function(){
    $(".s03-div1").hover(function(){
        $(".s03-img1").css("opacity","1");
        $(".s03-div1>p").css("opacity","1");
    },function(){
        $(".s03-img1").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div1>p").css("opacity","0");
    });
});

$(function(){
    $(".s03-div2").hover(function(){
        $(".s03-img2").css("opacity","1");
        $(".s03-div2>p").css("opacity","1");
    },function(){
        $(".s03-img2").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div2>p").css("opacity","0");
    });
});

$(function(){
    $(".s03-div3").hover(function(){
        $(".s03-img3").css("opacity","1");
        $(".s03-div3>p").css("opacity","1");
    },function(){
        $(".s03-img3").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div3>p").css("opacity","0");
    });
});

$(function(){
    $(".s03-div4").hover(function(){
        $(".s03-img4").css("opacity","1");
        $(".s03-div4>p").css("opacity","1");
    },function(){
        $(".s03-img4").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div4>p").css("opacity","0");
    });
});

$(function(){
    $(".s03-div5").hover(function(){
        $(".s03-img5").css("opacity","1");
        $(".s03-div5>p").css("opacity","1");
    },function(){
        $(".s03-img5").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div5>p").css("opacity","0");
    });
});

$(function(){
    $(".s03-div6").hover(function(){
        $(".s03-img6").css("opacity","1");
        $(".s03-div6>p").css("opacity","1");
    },function(){
        $(".s03-img6").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div6>p").css("opacity","0");
    });
});

$(function(){
    $(".s03-div7").hover(function(){
        $(".s03-img7").css("opacity","1");
        $(".s03-div7>p").css("opacity","1");
    },function(){
        $(".s03-img7").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div7>p").css("opacity","0");
    });
});

$(function(){
    $(".s03-div8").hover(function(){
        $(".s03-img8").css("opacity","1");
        $(".s03-div8>p").css("opacity","1");
    },function(){
        $(".s03-img8").css("opacity","0").css("transition-delay",".05s");
        $(".s03-div8>p").css("opacity","0");
    });
});

// section03 animation

// section04 hover

$(function(){
    $(".thi-1").hover(function(){
        $(".thi-1>img").css("opacity","0");
    },function(){
        $(".thi-1>img").css("opacity","1");
    });
}),

$(function(){
    $(".thi-2").hover(function(){
        $(".thi-2>img").css("opacity","0");
    },function(){
        $(".thi-2>img").css("opacity","1");
    });
});

$(function(){
    $(".thi-3").hover(function(){
        $(".thi-3>img").css("opacity","0");
    },function(){
        $(".thi-3>img").css("opacity","1");
    });
});

// section04 hover end

$(".thi-1").click(function(){
    $(".modal-pop-01").fadeIn();
})
$(document).mouseup(function(){
    $(".modal-pop-01").fadeOut();
})
$(".thi-2").click(function(){
    $(".modal-pop-02").fadeIn();
})
$(document).mouseup(function(){
    $(".modal-pop-02").fadeOut();
})
$(".thi-3").click(function(){
    $(".modal-pop-03").fadeIn();
})
$(document).mouseup(function(){
    $(".modal-pop-03").fadeOut();
})

// section04 modal end

// $('.sec05-w').slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
// });

$('.sec05-slider').slick();

// $(function(){
//     $("p").css("background-color","blue");
// });