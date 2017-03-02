/**
 * Created by 29043 on 2017/3/2.
 */

//导航对应内容
function navContentShow(e){
  var nav=$(e).data("nav");
  var html="";
  if(nav==1){
    html="在线课程";
  }else if(nav==2){
    html="最新资讯";
  }else if(nav==3){
    html="师资力量";
  }else{
    html="招商加盟";
  }
  $(".nav-show-content").html(html).show();
}
function navContentHide(){
  $(".nav-show-content").hide();
}
$(function () {

});