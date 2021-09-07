$(document).ready(function(){
    $("#submitcity").click(function(){
        return getWeather();
    });
});

function getWeather(){
    var city = $("#city").val();
    if(city !=''){
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q' + city + "&units=metric"+ "&appid=23f933d3c08609b1b884444b9766a3d9",
            type: "GET",
            dataType: "json",
            success:   function(data){
                $("#showweather").html(showResults(data));
                $("#city").val('');
            }
        });  
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorcity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>الرجاء إدخال اسم مدينة بالإنجليزية</div>");
    }

}

function showResults(data){
    return '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center"> الطقس الحالي لمدينة'+data.name+'.'+data.sys.country+'</h2>'+
           "<h3 style='pading-left:40px;'><strong>الطقس</Strong>: "+data.weather[0].main+"</h3>"+
           "<h3 style='pading-left:40px;'><strong>الوصف</strong>: <ing src='http://openweathermap.org/ing/w/"+data.weather[0].icon+".png'>"+data.weather[0].description+"</h3>"+
           "<h3 style='pading-left:40px;'><strong> درجة الحرارة</strong>: "+data.main.temp+" &deg;C</h3>"+
           "<h3 style='pading-left:40px;'><strong>الضغط الجوي</strong>:"+data.main.pressure+" hpa</h3>"+
           "<h3 style='pading-left:40px;'><strong>الرطوبة</strong>: "+data.main.humidity+"%</h3>"+
           "<h3 style='pading-left:40px;'><Strong> درجة الحرارة الدنيا </Strong>:"+data.main.temp_min+"&deg;C</h3>"+
           "<h3 style='pading-left:40px;'><Strong> درجة الحرارة العليا </Strong>:"+data.main.temp_max+"&deg;C</h3>"+
           "<h3 style='pading-left:40px;'><Strong>سرعة الرياح</Strong>:"+data.wind.speed+"m/s</h3>"+
           "<h3 style='pading-left:40px; padding-bottom:30px;'><Strong>اتجاه الرياح</Strong>: "+data.wind.deg+"&deg;</h3>";
}