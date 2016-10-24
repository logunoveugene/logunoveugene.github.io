$(document).foundation();

$(".custom-tab-open").on("click",function(){
  var a = $(this).attr("href");
  $(".tabs-content>div.active").removeClass("active");
  $(".tabs-content>div"+a).addClass("active");
  return false;
});

var options = {
  valueNames: [ 'brand' ]
};

var userList = new List('brand-sort', options);