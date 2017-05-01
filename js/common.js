$(function(){

	$("[data-fancybox]").fancybox({
		loop : true,
		infobar : false,
		buttons : true,
		slideShow  : false,
		fullScreen : false,
		thumbs     : false,
		closeBtn   : true,
	});
	$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於100時，關閉區塊 
　　if($this_Top < 1400){
　　　$('#top-bar').stop().animate({top:"0px"});
	 $('#top-bor').css('background-color','');
	 $('#top-bor').css('box-shadow','');
　　　}else{
　　　　$('#top-bar').stop().animate({top:"0px"});
	   $('#top-bor').css('background-color','#FFF');
	   // $('#top-bor').css('box-shadow','0px -5px 15px #333');		
　　　 };
　　}).scroll();
	});


	function fadeTitle(){
		$(window).scroll(function(){
			var bgBlock2Top = $('.bg_block2').offset().top;
			var winTop = $(this).scrollTop();
			if(winTop > bgBlock2Top-300){
				$('.about_title, .about_title_cover, .about_content, .about_content_cover').addClass('move');
			};
		});
	};
	fadeTitle();
});