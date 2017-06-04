/**
 * Created by Super_noodle on 2017/4/8.
 */
window.onload=function () {

//关于我们
    //点击搜索框清除内容
    $("#right-us>p:eq(3)>.search").focus(function () {
        $(this).val("");
    }).blur(function () {
        $(this).val("乌云贸易团");
    });


//关于我们---轮播图开始
    //获取相框
    var dvObj=document.getElementsByClassName("lunbotu")[0];
    var width=dvObj.offsetWidth;
    //获取ul标签
    var ulObj=dvObj.children[0];
    //获取左边按钮
    var previous=dvObj.children[1];
    //获取右边按钮
    var next=dvObj.children[2];
    //获取li标签
    var liObjs=ulObj.children;
    var index=0;
    for(var i=0;i<liObjs.length;i++){
        //鼠标进入事件
            dvObj.addEventListener("mouseover",function () {
                animate(previous,{"left":10});
                animate(next,{"left": 370});
            },true);
           previous.addEventListener("mouseover",function () {
                animate(previous,{"left":10});
                animate(next,{"left": 370});
            },true);
            next.addEventListener("mouseover",function () {
                animate(previous,{"left":10});
                animate(next,{"left": 370});
            },true);
            //点击左按钮
            previous.onclick=function () {
                if(index==0){
                    index=liObjs.length-1;
                    ulObj.style.left=-index*width+"px";
                }
                index--;
                animate(ulObj,{"left":-index*width});
            };
            //点击右按钮
            next.onclick=function () {
                if(index==liObjs.length-1){
                    index=0;
                    ulObj.style.left=-index*width+"px";
                }
                index++;
                animate(ulObj,{"left":-index*width});
            };
        //鼠标离开事件
        dvObj.onmouseout=function () {
            animate(previous,{"left":-50});
            animate(next,{"left": 430});
        };
    }


//轮播图结束

//视频专区
    //鼠标进入事件
    $(".bottom-video>ul>li").mouseenter(function () {
        //获取img标签
        var imObj=$(this).find("img");
        //获取p标签
        var pObj=$(this).find("p");
        //获取span标签
        var spans=$(this).find("span");

        imObj.stop().animate({"width":260,"height":180,"left":-10,"top":-10});
        pObj.stop().animate({"bottom":-25});
        spans.stop().animate({"top":-60});
    });

    //鼠标离开事件
    $(".bottom-video>ul>li").mouseleave(function () {
//获取img标签
        var imObj=$(this).find("img");
        //获取p标签
        var pObj=$(this).find("p");
        //获取span标签
        var spans=$(this).find("span");

        imObj.stop().animate({"width":240,"height":160,"left":0,"top":0});
        pObj.stop().animate({"bottom":0});
        spans.stop().animate({"top":50});
    });
/*视频专区结束*/

/*版本回顾开始*/
    //获取ul标签
    // var uuObj=document.getElementsByClassName("dv-version")[0].children[0];
    // //获取li标签
    // var lisObjs=uuObj.children;
    $("#dv-version>.dd-version>ul>li:eq(0)").css("marginLeft",-45).siblings("li").each(function (index,ele) {
        // var liLeft=205*(index+1);
        $(ele).css("marginLeft",-110);
    });
    $("#dv-version>.dd-version>ul").css({"left":-1760});
    var num=8;
    //点击右按钮
    $("#dv-version>.next1").click(function () {
        // console.log($("#dv-version>.dd-version>ul>li").length)
        if(num==$("#dv-version>.dd-version > ul>li").length-5){
            $("#dv-version>.next1").hide();
        }else{
            $("#dv-version>.previous1").show();
        }
        num++;
        $("#dv-version>.dd-version>ul").stop().animate({"left":-num*220});
        $("#dv-version>.dd-version > ul>li:eq("+(num+2)+")").css("zIndex","100");
        $("#dv-version>.dd-version > ul>li:eq("+(num+2)+")>img").stop().animate({"zIndex":100},function () {
            $("#dv-version>.dd-version > ul>li:eq("+(num+2)+")>img").stop().animate({"width":'100%',"height":'100%',"marginTop":-38},500);
        });
        $("#dv-version>.dd-version > ul>li:eq("+(num+1)+")").css("zIndex","0");
        $("#dv-version>.dd-version > ul>li:eq("+(num+1)+")>img").stop().animate({"width":'60%',"height":'60%',"zIndex":0,"marginTop":0},50);
    });
    //点击左按钮
    $("#dv-version>.previous1").click(function () {
        if(num==-1){
            $("#dv-version>.previous1").hide();
        }else{
            $("#dv-version>.next1").show();
        }
        num--;
        $("#dv-version>.dd-version>ul").stop().animate({"left":-num*220});
        $("#dv-version>.dd-version > ul>li:eq("+(num+2)+")").css("zIndex","100");
        $("#dv-version>.dd-version > ul>li:eq("+(num+2)+")>img").stop().animate({"zIndex":100},function () {
            $("#dv-version>.dd-version > ul>li:eq("+(num+2)+")>img").animate({"width":'100%',"height":'100%',"marginTop":-38},500);
        });
        $("#dv-version>.dd-version > ul>li:eq("+(num+3)+")").css("zIndex","0");
        $("#dv-version>.dd-version > ul>li:eq("+(num+3)+")>img").stop().animate({"width":'60%',"height":'60%',"marginTop":0},50);

    });



/*版本回顾结束*/
};




