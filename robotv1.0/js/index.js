/**
 * Created by 29043 on 2017/3/2.
 */

//导航对应内容
function navContentShow(e){
  var nav=$(e).data("nav");
  var html="";
  if(nav==1){
    html=`<div class="nav-show-left">
                <h3>在线课程</h3>
                <ul class="nav-show-nav">
                    <li><a href="#">初级课程</a></li>
                    <li><a href="#">中级课程</a></li>
                    <li><a href="#">高级课程</a></li>
                    <li><a href="#">竞赛课程</a></li>
                    <li><a href="#">免费课程</a></li>
                </ul>
            </div>
            <div class="nav-show-right">
                <img src="images/nav-show-right-p1.jpg">
            </div>`;
  }else if(nav==2){
    html=`<div class="nav-show-left">
                <h3>最新资讯</h3>
                <ul class="nav-show-nav">
                    <li><a href="#">新闻资讯</a></li>
                    <li><a href="#">竞赛相关</a></li>
                    <li><a href="#">爱博特社区</a></li>
                </ul>
            </div>
            <div class="nav-show-right">
                <img src="images/nav-show-right-p1.jpg">
            </div>`;;
  }else if(nav==3){
    html=`<div class="nav-show-left">
                <h3>师资力量</h3>
                <ul class="nav-show-nav">
                    <li><a href="#">教师资历</a></li>
                    <li><a href="#">在线培训</a></li>
                    <li><a href="#">名师教学</a></li>
                </ul>
            </div>
            <div class="nav-show-right">
                <img src="images/nav-show-right-p1.jpg">
            </div>`;;
  }else{
    html=`<div class="nav-show-left">
                <h3>招商加盟</h3>
                <ul class="nav-show-nav">
                    <li><a href="#">加盟动态</a></li>
                    <li><a href="#">加盟问答</a></li>
                    <li><a href="#">加入我们</a></li>
                    <li><a href="#">学校合作</a></li>
                    <li><a href="#">服务支持</a></li>
                </ul>
            </div>
            <div class="nav-show-right">
                <img src="images/nav-show-right-p1.jpg">
            </div>`;;
  }
  $(".nav-show-content").html(html).show();
}
function navContentHide(){
  if($(".nav-show-content").is(":focus")){
    return;
  }
  // $(".nav-show-content").hide();
}
$(function () {

});