
alert("iamworking")

	$(function(){
		// Moon fit to the size of the screen
		$('.box').height($('.box').width())
		var x = $('.box').width()/2*0.9
		$('.img').css('margin-top',-x)

		
		$('.list li:nth-child(1) a').click(function(){
			$(this).addClass('action1')
			$('.list li:nth-child(2) a').removeClass('action2')
			$('.list li:nth-child(3) a').removeClass('action3')
			$('.list li:nth-child(4) a').removeClass('action4')
			$('.list li:nth-child(5) a').removeClass('action5')
			$('.list li:nth-child(6) a').removeClass('action6')
			$('.list li:nth-child(7) a').removeClass('action7')
		})
		
		$('.list li:nth-child(2) a').click(function(){
			$(this).addClass('action2')
			$('.list li:nth-child(1) a').removeClass('action1')
			$('.list li:nth-child(3) a').removeClass('action3')
			$('.list li:nth-child(4) a').removeClass('action4')
			$('.list li:nth-child(5) a').removeClass('action5')
			$('.list li:nth-child(6) a').removeClass('action6')
			$('.list li:nth-child(7) a').removeClass('action7')
		})
		
		$('.list li:nth-child(3) a').click(function(){
			$(this).addClass('action3')
			$('.list li:nth-child(2) a').removeClass('action2')
			$('.list li:nth-child(1) a').removeClass('action1')
			$('.list li:nth-child(4) a').removeClass('action4')
			$('.list li:nth-child(5) a').removeClass('action5')
			$('.list li:nth-child(6) a').removeClass('action6')
			$('.list li:nth-child(7) a').removeClass('action7')
		})
		
		$('.list li:nth-child(4) a').click(function(){
			$(this).addClass('action4')
			$('.list li:nth-child(2) a').removeClass('action2')
			$('.list li:nth-child(3) a').removeClass('action3')
			$('.list li:nth-child(1) a').removeClass('action1')
			$('.list li:nth-child(5) a').removeClass('action5')
			$('.list li:nth-child(6) a').removeClass('action6')
			$('.list li:nth-child(7) a').removeClass('action7')
		})
		
		$('.list li:nth-child(5) a').click(function(){
			$(this).addClass('action5')
			$('.list li:nth-child(2) a').removeClass('action2')
			$('.list li:nth-child(3) a').removeClass('action3')
			$('.list li:nth-child(4) a').removeClass('action4')
			$('.list li:nth-child(1) a').removeClass('action1')
			$('.list li:nth-child(6) a').removeClass('action6')
			$('.list li:nth-child(7) a').removeClass('action7')
		})
		
		$('.list li:nth-child(6) a').click(function(){
			$(this).addClass('action6')
			$('.list li:nth-child(2) a').removeClass('action2')
			$('.list li:nth-child(3) a').removeClass('action3')
			$('.list li:nth-child(4) a').removeClass('action4')
			$('.list li:nth-child(5) a').removeClass('action5')
			$('.list li:nth-child(1) a').removeClass('action1')
			$('.list li:nth-child(7) a').removeClass('action7')
		})
		
		$('.list li:nth-child(7) a').click(function(){
			$(this).addClass('action7')
			$('.list li:nth-child(2) a').removeClass('action2')
			$('.list li:nth-child(3) a').removeClass('action3')
			$('.list li:nth-child(4) a').removeClass('action4')
			$('.list li:nth-child(5) a').removeClass('action5')
			$('.list li:nth-child(6) a').removeClass('action6')
			$('.list li:nth-child(1) a').removeClass('action1')
		})

//Moon ro
		var i = 0;
		var x=1;
		var he = $('#1').outerHeight();
		var he1 = he + $('#2').outerHeight(true);
		var he2 = he1 + $('#3').outerHeight(true);
		var he3 = he2 + $('#4').outerHeight(true);
		var he4 = he3 + $('#5').outerHeight(true);
		var he5 = he4 + $('#6').outerHeight(true);
		var he6 = he5 + $('#7').outerHeight(true);
		$(window).scroll(function(){
			if($(document).scrollTop() > he){
				$('.img img').css('transform','rotate('+ 360 +'deg)')
			}else{
				$('.img img').css('transform','rotate('+ 0 +'deg)')
			}

			if($(document).scrollTop() > he1){
				$('.img img').css('transform','rotate('+ 360*2 +'deg)')
			}

			if($(document).scrollTop() > he2){
				$('.img img').css('transform','rotate('+ 360*3 +'deg)')
			}

			if($(document).scrollTop() > he3){
				$('.img img').css('transform','rotate('+ 360*4 +'deg)')
			}

			if($(document).scrollTop() > he4){
				$('.img img').css('transform','rotate('+ 360*5 +'deg)')
			}

			if($(document).scrollTop() > he5){
				$('.img img').css('transform','rotate('+ 360*6 +'deg)')
			}

			if($(document).scrollTop() > he6){
				$('.img img').css('transform','rotate('+ 360*7 +'deg)')
			}
		})




	})