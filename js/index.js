/**
 * Created by zhang on 2017/4/12.
 */
$(function () {

    function innerHightMouseenter(ele, index) {
        $("#nav-list>.nav" + index + "").mouseenter(function () {       //ele.css("marginTop",-1+"px")
            ele.stop().slideDown(500);
        });
    }

    function innerHightMouseleave(ele, index) {
        $("#nav-list>.nav" + index + "").mouseleave(function () {
            ele.stop().slideUp(500);
        });
    }

    //导航栏的特效
    innerHightMouseenter($("#nav-list .greenhand"), 2)
    innerHightMouseleave($("#nav-list .greenhand"), 2);

    innerHightMouseenter($("#nav-list .download"), 3)
    innerHightMouseleave($("#nav-list .download"), 3);

    innerHightMouseenter($("#nav-list .recharge"), 4)
    innerHightMouseleave($("#nav-list .recharge"), 4);

    innerHightMouseenter($("#nav-list .news"), 5)
    innerHightMouseleave($("#nav-list .news"), 5);

    innerHightMouseenter($("#nav-list .active"), 6)
    innerHightMouseleave($("#nav-list .active"), 6);

    innerHightMouseenter($("#nav-list .service"), 7)
    innerHightMouseleave($("#nav-list .service"), 7);

    innerHightMouseenter($("#nav-list .interact"), 8)
    innerHightMouseleave($("#nav-list .interact"), 8);

    //使prime里面的a标签背景图片改变并改变样式
    //获取a标签
    //获取id 为pri-menu 的div
    $("#pri-menu ul li a").each(function () {
        var positionTop = parseInt($(this).css("backgroundPositionY"));
        $(this).mouseenter(function () {
            $(this).stop().animate({"backgroundPositionY": positionTop - 42 + "px"}).css("color", "white");
        });
        $(this).mouseleave(function () {
            $(this).stop().animate({"backgroundPositionY": positionTop + "px"}).css("color", "");
        })
    });

    //轮播图的实现
    //获取下划线 添加鼠标进入事件
    var imgWidth = $("#slide").width();
    //console.log(imgWidth);
    //console.log($("#slide-line ul li"));
    $("#slide-line ul li").each(function () {
        // console.log($(this));
        $(this).mouseenter(function () {
            $(this).css("backgroundColor", "#cc8b34").siblings("li").css("backgroundColor", "#1f242d");
            var index = $(this).index();
            console.log(index);
            console.log(imgWidth * index);
            $("#slide .slide-container").animate({
                "left": -imgWidth * index
            }, 300);
        });
    });
    //是左右按钮显示或是隐藏
    $("#slide").mouseenter(function () {
        $("#slide .slide-button").animate({"opacity": 1});
        clearInterval(timeId);
    });
    $("#slide").mouseleave(function () {
        $("#slide .slide-button").animate({"opacity": 0});
        timeId = setInterval(function () {
            $("#slide .slide-button>div:last").click();
        }, 1000);
    });
    //定时器的添加
    $("#slide .slide-button>div:last").click();
    var timeId = setInterval(function () {
        $("#slide .slide-button>div:last").click();
    }, 1000);
    //右侧按钮注册点击事件
    var count = 0;
    $("#slide .slide-button>div:last").click(function () {
        if (count == $("#slide .slide-container>li").length - 1) {
            count = 0;
            $("#slide .slide-container").css("left", 0);
        }
        $("#slide-line ul li:eq(" + count + ")").css("backgroundColor", "#cc8b34").siblings("li").css("backgroundColor", "#1f242d");
        count++;
        $("#slide .slide-container").stop().animate({
            "left": -imgWidth * count
        })
    });
    //左侧按钮注册点击事件
    $("#slide .slide-button>div:first").click(function () {
        $("#slide-line ul li:eq(" + count + ")").css("backgroundColor", "#cc8b34").siblings("li").css("backgroundColor", "#1f242d");
        if (count == 0) {
            count = $("#slide .slide-container>li").length - 1;
            $("#slide .slide-container").css("left", -count * imgWidth);
        }

        count--;
        $("#slide .slide-container").stop().animate({
            "left": -imgWidth * count
        })
    });
    //下方的platform的效果
    $("#platform h6").mouseenter(function () {
        $(this).stop().animate({"backgroundSize": '100%'}, 200);
        $("#platform h6 span").stop().animate({
            "left": "100px",
            "fontSize": "20px",
            "borderColor": "#fff"
        });
        $("#platform h6 em").stop().hide(200);
    }).mouseleave(function () {
        $(this).stop().animate({"backgroundSize": '125%'}, 200);
        $("#platform h6 span").stop().animate({
            "left": "180px",
            "fontSize": "14px",
            "borderColor": "rgba(255, 255, 255, 0.2)"

        });
        $("#platform h6 em").stop().show(200);
    });
    //获取list-style的ul
    $("#list-style li a").each(function () {
        var positionTop = parseInt($(this).css("backgroundPositionY"));
        $(this).mouseenter(function () {
            $(this).stop().animate({
                "backgroundPositionY": positionTop - 60 + "px",
            })
            $(this).css("color", "white");

        }).mouseleave(function () {
            $(this).stop().animate({
                "backgroundPositionY": positionTop + "px",
            });
            $(this).css("color", "#6185c5");
        });

    });


    //table 栏的切换
    $("#news-tab").find("li").each(function () {
        //console.log($(this).css("color", "#6B9CFB").parent("li").siblings("li").find("a"));
        $(this).click(function () {
            var index = $(this).index();
            $(this).children().css("color", "rgb(107, 156, 251)")
            $(this).siblings("li").find("a").css("color", "rgb(185, 197, 220)");
            $(".news-list:eq(" + index + ")").show(300).siblings("div.news-list").hide(300);
        });

    });
    $("#hot-tab").find("li").each(function () {
        $(this).click(function () {
            var index = $(this).index();
            $(this).children().css("color", "rgb(107, 156, 251)")
            $(this).siblings("li").find("a").css("color", "rgb(185, 197, 220)");
            $(".hot-info:eq(" + index + ")").show(300).siblings("div.hot-info").hide(300);
        });

    });


});