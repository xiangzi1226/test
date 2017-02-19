
app.controller('luntan', function($scope, $http) {
  $http.get("json/luntan1.json")
  .success(function (response) {
  	$scope.titles = response;
  });
  $http.get("json/luntan2.json")
  .success(function (data) {
  	$scope.list = data;
  });
  $('#position').on('swipeLeft',function(){
  	$(this).animate({"left":"-12.42rem"});
  		$('#luntan #header #sp1').removeClass('border');
  		$('#luntan #header #sp2').addClass('border');
})
$('#position').on('swipeRight',function(){
  	$(this).animate({"left":"0rem"});
  		$('#luntan #header #sp2').removeClass('border');
  		$('#luntan #header #sp1').addClass('border');
})
$('#luntan #header #sp2').on('tap',function(){
		$('#position').animate({"left":"-12.42rem"})
		$('#luntan #header #sp1').removeClass('border');
		$(this).addClass('border');
})
$('#luntan #header #sp1').on('tap',function(){
		$('#position').animate({"left":"0"});
		$('#luntan #header #sp2').removeClass('border');
		$(this).addClass('border')
})
});

