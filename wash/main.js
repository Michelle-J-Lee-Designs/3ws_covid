$('#spout').click(function(){
  $('#spout').addClass("turn-on-water");
  })

  $('#spout').on("animationend", function(){
    $('#spout').removeClass("turn-on-water");
    })
  


