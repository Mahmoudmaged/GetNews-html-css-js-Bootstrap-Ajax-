

 
$(".navbar ul li a").click(function(){

  var Selected = $(this).attr("href");
 var SectionTop = $(Selected).offset().top-50;
  $("body").animate({scrollTop: SectionTop},2000); 
   
});





$(window).scroll(function () 
        {
    var sc = $(this).scrollTop();
    var mydiv = document.getElementById("counter");
    var off= mydiv.offsetTop;

            console.log(sc);
    console.log(off);

            if (sc >= (off-200)) {
var count = setInterval(function () {
    var x1 = parseInt($(".numbers1").html());
    var x2 = parseInt($(".numbers2").html());
    var x3 = parseInt($(".numbers3").html());
    var x4 = parseInt($(".numbers4").html());
   if(x1<123)
        $(".numbers1").html(x1+=1);
    if(x2<756)
       $(".numbers2").html(x2+=1);
    if(x3<545)
       $(".numbers3").html(x3+=1);
    if(x4<456)
       $(".numbers4").html(x4+=1);
         
    
   
   else
        {clearInterval();}
            
        


}, 20)}

            });


$(window).scroll(function () 
        {
    var sc = $(this).scrollTop();
    var prog = document.getElementById("skil");
    var off= prog.offsetTop;
        if (sc >= (off))
            {
                $("#p1").css({width: '79%'});
                $("#p2").css({width: '50%'});
                $("#p3").css({width: '90%'});
                $("#p4").css({width: '99%'});
              
                
            }

});

