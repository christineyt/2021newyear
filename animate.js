



$(window).load(function(){ 
 $(".loading").fadeOut(300); //等網頁全部的DOM都載入後, 隱藏讀取中的loadin



	//頁內錨點滑動效果
	$('a[href*=#]').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname){
			var $target = $(this.hash);
			$target = $target.length && $target|| $('[name=' + this.hash.slice(1) +']');
		if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').stop().animate({scrollTop: targetOffset}, 1000);
            //return false; //使其呈現清晰的URL鏈接
         }
		}
	});



//------------TOP按鈕----------------------
		$(window).scroll(function(){
		if( $(window).scrollTop() > 400 ){
			$(".btnTop").fadeIn(300);	
		}else{
			$(".btnTop").fadeOut(300);		
		}
		
	});
	
	$(".btnTop").click(function (){	
		$("html,body").stop(true,false).animate({scrollTop:0},900); 
		//$("html,body").stop(true,false).animate({scrollTop:$(".AAA").position().top},900);//連到DIV：AAA的位置
		
	});
	
	
	
	
	
});





