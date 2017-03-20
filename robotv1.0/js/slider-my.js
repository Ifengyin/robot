/**
 * Created by 29043 on 2017/3/20.
 */
/**
 * Created by wangyu on 2016/12/15.
 */
(function($){
  $.fn.wyjd_banner=function(arr){
    var elementId=this.attr('id');
    var adv={
      LIWIDTH:0,
      $ulImgs:null,
      INTERVAL:1000,
      WAIT:3000,
      timer:null,
      init(){
        this.LIWIDTH=parseFloat(
          $('#'+elementId).css("width")
        );
        this.$ulImgs=$("#"+elementId+" ul:first");
        this.updateView();
        $('#'+elementId+' ul:last').on('mouseover',"li",(e)=>{
          var target=$("#"+elementId+" ul:last>li").index(e.target);
          var old=arr[0].i;
          this.move(target-old);
        });
        this.autoMove();
      },
      autoMove(){
        this.timer=setTimeout(
          ()=>this.move(1),
          this.WAIT
        );
      },
      movePrev(n){
        n*=-1;
        arr=arr.splice(-n,n).concat(arr);
        this.updateView();
        this.$ulImgs.css("left",parseFloat(this.$ulImgs.css("left"))-n*this.LIWIDTH
        );
      },
      move(n){
        clearTimeout(this.timer);
        if(n<0){
          this.movePrev(n);
          this.$ulImgs.stop(true).animate(
            {left:0},
            this.INTERVAL,
            ()=>this.autoMove()
          );
        }else{
          this.$ulImgs.stop(true).animate(
            {left:-n*this.LIWIDTH},
            this.INTERVAL,
            ()=>this.moveCallback(n)
          );
        }
      },
      moveCallback(n){
        arr=arr.concat(arr.splice(0,n));
        this.updateView();
        this.$ulImgs.css("left",0);
        this.autoMove();
      },
      updateView(){
        for(var i=0,lis="",idxs="";i<arr.length;i++){
          lis+=`<li><img src="${arr[i].img}"></li>`;
          idxs+="<li></li>";
        }
        this.$ulImgs.html(lis).css(
          "width",arr.length*this.LIWIDTH);
        $('#'+elementId+' ul:last').html(idxs).children(`li:eq(${arr[0].i})`).addClass("hover");
      }
    }
    adv.init();
  }
})(jQuery);
/*
//需要引入jquery，页面结构及调用方式如下：
<div id="slider">
  <ul id="imgs">
  </ul>
  <ul id="indexs">
  </ul>
  </div>
//调用方式：
  $("#slider").wyjd_banner([
    {"i":0,"img":"imgs/banner_01.jpg"},
    {"i":1,"img":"imgs/banner_02.jpg"},
    {"i":2,"img":"imgs/banner_03.jpg"},
    {"i":3,"img":"imgs/banner_04.jpg"},
    {"i":4,"img":"imgs/banner_05.jpg"},
  ]);*/