app.controller('my',function($scope){
	$('.account .logo').on('tap',function(){
		$('#login').animate({"left":"0"},500)
	})
	$('.account .name').on('tap',function(){
		$('#login').animate({"left":"0"},500)
	})
	$('#login #exit').on('tap',function(){
		$('#login').animate({"left":"12.42rem"},500)
	})
	$('#login #login-text #sp1').on('tap',function(){
		$('#regest').animate({"left":"0"},500)
	})
	
	var registerPhone = false;var registerPassword = false;
	var $phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	$('.regest .username').on("blur",function(){
		var $val = $(this).val();
		if(!$phone.test($val)){
			$('.name .phone-error').css('display','block');
			$(this).val('');
		}else{
			$('.name .phone-error').css('display','none');
			registerPhone = true;
		}
	})
	
	$('.regest .pwd').on("blur",function(){
		$pwd = /^[a-zA-Z0-9]{6,18}$/;
		var $val1 = $(this).val();
		if(!$pwd.test($val1)){
			$('.password .pwd-error').css('display','block');
			$(this).val('')
		}else{
			$('.password .pwd-error').css('display','none');
			registerPassword  = true;
		}
	})
	
	$('.regest .btn').on('tap',function(){
		if((registerPhone&&registerPassword)==true){
			var $val = $('.regest .username').val();
			var $val1 = $('.regest .pwd').val();
			localStorage.setItem('username',$val);
			localStorage.setItem('password',$val1);
			alert('注册成功')
			$('#regest').animate({"left":"12.42rem"},500)
		}else{
			alert("请重新填写!!!")
			$('.regest .username').val('');
			$('.regest .pwd').val('');
		}
	})
	
	
	

    $('.regest #head #zjt').on('tap',function(){
    	$('#regest').animate({"left":"12.42rem"},500)
    	$('.name .phone-error').css('display','none');
    	$('.password .pwd-error').css('display','none');
    })
	
	$('.login .btn').on('tap',function(){
	    var $username = localStorage.getItem('username');
	    var $pwds = localStorage.getItem('password');
	    if(($('.login .username').val()==$username)&&($('.login .pwd').val()==$pwds)){
			alert('登录成功')
			$('#login').animate({"left":"12.42rem"},500)
			$('.container .account .name').text($('.login .username').val())
		}else{
			alert("用户名或密码错误")
			$('.login .username').val('');
			$('.login .pwd').val('');
			}
	})
})


