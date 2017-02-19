 app.controller("findCtr",function($scope,$http){
 		
 	$http.get('json/find_banner.json')
 	.success(function(data){
 		$scope.data=data;
 	})
   	$http.get('json/find_panic.json')
   	.success(function(data1){
   		$scope.data1=data1
   	})
   	$http.get('json/find_time.json')
   	.success(function(data2){
   		$scope.data2=data2
   	});
    $http.get('json/find_overflow.json')
    .success(function(data3){
    	$scope.data3=data3
    });
    $http.get("json/find_list.json")
    .success(function(data4){
    	$scope.data4=data4
    })
	function clock(ele,times){
		//这是截止时间
		var end = new Date(times);
		//初始化倒计时效果
		c();
		//将计时器绑定到具体元素身上
		ele.timer = setInterval(c,1000);

		function c(){
			//获取当前时间
			var now = new Date();
			//计算时间差
			var time = parseInt((end - now)/1000);
			//判断活动是否结束
			if(time>0){
				//计算天，时，分，秒
				var s = time%60;
				var m = parseInt(time/60)%60;
				var h = parseInt(time/3600)%24;
				var d = parseInt(time/(3600*24));
				//添加内容
				if(h<10){
					ele.html('<span>'+d+'</span>  天  <span>0'+h+'</span>:<span >'+m+'</span>:<span>'+s+'</span>')
				}else{
					ele.html('<span>'+d+'</span>  天  <span>'+h+'</span>:<span >'+m+'</span>:<span>'+s+'</span>')
				}
				
			}else{
				//活动结束后，时间置0
				ele.html('<span>00</span>天<span>00</span>:<span >00</span>:<span>00</span>');
				//关闭计时器
				clearInterval(ele.timer);
			}
		}
	}
	var arr=['2016/11/11 00:00:00']
	var oDiv=$(".count_down")
	clock(oDiv,arr[0])
	
		setTimeout(function(){					 
			        var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        autoplay : 2500,
			        autoplayDisableOnInteraction : false,
			        loop:true
			    })   
				},200)
		
	
 })
 
			
 

 