let maskSlide = false;

$('#mask').click(function(){
    if (maskSlide) { 
      $('#mask').addClass("slide-mask");
    }else {
      $('#mask').addClass("slide-mask-down");
    }

    maskSlide = !maskSlide;
  })


