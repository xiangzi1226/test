//李迎宾的js文件
app.controller('main_app',function($scope,$http,$timeout){
	$timeout(function(){
		var index1=0;
$('.main_box').on('swipeLeft',function(){
	index1--;
	if(index1<=-6){
	index1=-6;
	}
	$('.main_box .out').animate({left:12.42*index1+'rem'})
	$('#navhead li').eq(-index1).addClass('act').siblings().removeClass('act')
})
$('.main_box').on('swipeRight',function(){
	index1++;
	if(index1>=0){
	index1=0;
	}
	$('.main_box .out').animate({left:12.42*index1+'rem'})
	$('#navhead li').eq(-index1).addClass('act').siblings().removeClass('act')
})
setTimeout(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
//      centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop:true
    });
},200)

var lis=$('#navhead li');
console.log(lis)
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	$('#navhead li').eq(i).on('tap',function(){
		index1=-(this.index);
		
		$('.main_box .out').animate({left:12.42*index1+'rem'})
	$('#navhead li').eq(-index1).addClass('act').siblings().removeClass('act')
	})
}
    
    $http.get('json/tuijian.json')
			.success(function(data,status,headers,config){
				$scope.names=data;
			})
			.error(function(data,status,headers,config){
				console.log('error')
			})
			
    $http.get('json/main_lb.json')
			.success(function(data,status,headers,config){
				$scope.imgs=data;
			})
			.error(function(data,status,headers,config){
				console.log('error')
			})
    
    $('#product #remo').on('tap',function(){
    	$('#product').remove()
    })
    
 mui.init({
  pullRefresh : {
    container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
    down : {
      height:50,//可选,默认50.触发下拉刷新拖动距离,
      auto: true,//可选,默认false.自动下拉刷新一次
      contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
      contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
      contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
      callback :pullfresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
    }
  }
})

function pullfresh() {
     //业务逻辑代码，比如通过ajax从服务器获取新数据；
    alert(1)
     //注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
     mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
}
	},10)
	
})
