let slideMask = false;

$('#mask').click(function(){
      
  if('mask') {
    $(this).addClass("slide-mask");
  }else {
    $(this).addClass("slide-mask-down");
  }
    
  slideMask = !slideMask;
    })


//$('#mask').click(function(){
//    $(this).addClass("slide-mask");
//  })

