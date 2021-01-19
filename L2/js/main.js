$(document).ready(function () {
    $('.header .navbar .links ul li').click(function () {
        $(this).addClass('active-link').siblings().removeClass('active-link');
    });
    $(function(){
        $('.slider').bxSlider({
            mode: 'horizontal',
            captions: true
        });
    });
    $('.header').height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());
    });

    $('.header .background h1').css('paddingTop',($(window).height()/2));
    $(window).resize(function () {
        $('.header .background h1').css('paddingTop',($(window).height()/2));
    });

    $('.navbar .links ul li a').click(function () {
        $('html ,body').animate({
            scrollTop:$('#'+$(this).data('value')).offset().top
        },1500);
    });


    $('body').niceScroll();




    function clients(){
        $('.clients .client-active').each(function(){

                if(!$(this).is(':last-child')){
                    $(this).delay(2000).fadeOut(1000,function(){
                        $(this).removeClass('client-active').next().addClass('client-active').fadeIn();
                        clients();
                    });


                }

                else{
                    $(this).delay(2000).fadeOut(1000,function(){
                        $(this).removeClass('client-active');
                        $('.clients div:first-child').addClass('client-active').fadeIn();
                        clients();
                    });


                }
            }

        );
    }

    clients();

    /*
    * List Click Of Our Works
    * */
    $('.our-works .works-list ul li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');

    });



    var containerEl=document.getElementById('containerr');
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    });


    /*
    * scroll to top
    * */

    $(window).scroll(function () {
       if($(this).scrollTop()>50){
           $('#totop').fadeIn(1000);
       }else{
           $('#totop').fadeOut(1000);
       }
    });
    $('#totop').click(function () {
        $('html , body').animate({scrollTop:0},1500);
    });

    $('.colors ').hover(function () {
        if($('.colors').hasClass('colors_opened'))
        {
            $('.colors').removeClass('colors_opened').addClass('colors_closed');
        }else{
            $('.colors').removeClass('colors_closed').addClass('colors_opened');
        }

    });



    $('.colors ._color').click(function () {
        var path="css/" + $(this).data('value') + "-style.css";
        $('#template_color').attr('href',path);
        $('.colors').toggleClass('colors_closed');
        if ($(this).data('value') == 'default'){
            $('.colors .fa').css('color','#fff');

        }else{
            $('.colors .fa').css('color',$(this).data('value'));

        }

    });

});


