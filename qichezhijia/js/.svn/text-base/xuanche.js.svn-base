app.controller('chooseCar',function($scope,$http){

    // $('.bigBox').on('swipeRight',function(){
    //           $('.smallBox').animate({'left':'12.42rem'})
    // })
     $('.bottomBox').on('swipeLeft',function(){
              $('.smallBox').animate({left:'-12.42rem'})
               $('.borderBottom').animate({
                width:'1.4rem',
                left:'6.25rem'
              })
    })
     $('.right').on('swipeRight',function(){
              $('.smallBox').animate({left:0})
                $('.borderBottom').animate({
                width:'1rem',
                left:'4.35rem'
              })
    })
     $('.navBox').on('swipeLeft',function(){
              $('.nav').animate({left:'-3.1rem'})
               
    })
      $('.navBox').on('swipeRight',function(){
              $('.nav').animate({left:0})
               
    })

     $('.new').on('tap',function(){
              $('.smallBox').animate({left:0})
              $('.borderBottom').animate({
                width:'1rem',
                left:'4.35rem'
              })
       })
     $('.old').on('tap',function(){
              $('.smallBox').animate({left:'-12.42rem'})
              // $('.tap').css(border-width:'0.9rem')
               $('.borderBottom').animate({
                width:'1.4rem',
                left:'6.25rem'
              })
        })
    $http.get('json/brand.json')
    .success(function(data,status,headers,config){
        console.log(data,status,headers,config);
        $scope.names = data;
    })
    .error(function(data,status,headers,config){
        console.log("error");
    })
    $http.get('json/car.json')
    .success(function(data,status,headers,config){
        console.log(data,status,headers,config);
        $scope.cars = data;
    })
    .error(function(data,status,headers,config){
        console.log("error");
    })

})