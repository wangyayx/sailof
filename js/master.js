$(document).ready(function() {
	$(window).bind("resize", resizeWindow);
	function resizeWindow(e) {
		var newWindowWidth = $(window).width() - ('20px');
		if (newWindowWidth > 768) {
			$('.ac-gn-list').show();			
		}
		if (newWindowWidth <= 478) {
			$('.ac-gn-list').hide();
		}
	}
});

window.onscroll = function () {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollup = document.getElementById('scrollup');
	//当滚动到距离顶部200px时，返回顶部的锚点显示
	if (t >= 60) {
		$("#header").addClass("navbar-fixed-top");
		$("#header").removeClass("noramlHd");
	} else {          //恢复正常
		$("#header").addClass("noramlHd");
		$("#header").removeClass("navbar-fixed-top");
	}
};

var changeMenu = function() {
	var list = $('.ac-gn-list');
	if (list.is(':hidden')) {
		var hmt = $('.ac-gn-menuicon-bread-crust-top');
		var hmb = $('.ac-gn-menuicon-bread-crust-bottom');
		hmt.removeClass('ac-gn-menuicon-bread-crust-top');

		hmt.addClass('ac-gn-menuicon-bread-top');



		hmb.removeClass('ac-gn-menuicon-bread-crust-bottom');

		hmb.addClass('ac-gn-menuicon-bread-bottom');

		list.show();
		$("#main-page-mask").show();
		$(".g-header").show();
	} else {

		var smt = $('.ac-gn-menuicon-bread-top');

		var smb = $('.ac-gn-menuicon-bread-bottom');



		smt.removeClass('ac-gn-menuicon-bread-top');

		smt.addClass('ac-gn-menuicon-bread-crust-top');



		smb.removeClass('ac-gn-menuicon-bread-bottom');

		smb.addClass('ac-gn-menuicon-bread-tmp-bottom');

		smb.removeClass('ac-gn-menuicon-bread-tmp-bottom');

		smb.addClass('ac-gn-menuicon-bread-crust-bottom');

		list.hide();

		$("#main-page-mask").hide();
		$(".g-header").hide();
	}

	

	$("#main-page-mask").click(function(e){

		var smt = $('.ac-gn-menuicon-bread-top');

		var smb = $('.ac-gn-menuicon-bread-bottom');



		smt.removeClass('ac-gn-menuicon-bread-top');

		smt.addClass('ac-gn-menuicon-bread-crust-top');



		smb.removeClass('ac-gn-menuicon-bread-bottom');

		smb.addClass('ac-gn-menuicon-bread-tmp-bottom');

		smb.removeClass('ac-gn-menuicon-bread-tmp-bottom');

		smb.addClass('ac-gn-menuicon-bread-crust-bottom');

		e.stopPropagation();

		list.hide();

		$(this).hide();

	});

	



};











$(document).ready(function () {

    function e() {

        o = window.scrollY || document.documentElement.scrollTop, t()

    }



    function t() {

        r || requestAnimationFrame(n), r = !0

    }



    function n() {

        r = !1;

        for (var e = o, t = e + .8 * window.innerHeight, n = 0; n < i.length; n++) {

            var s = $(i[n]).offset().top;

            t > s && i[n].classList.add("active")

        }

    }



    var i = document.querySelectorAll(".anim"), o = 0, r = !1;

    window.addEventListener("scroll", e, !1), requestAnimationFrame(n), $(window).load(function () {

        requestAnimationFrame(n)

    })

})





/*导航下拉菜单*/

function dropMenu(obj){

	$(obj).each(function(){

		var theSpan = $(this);

		var theMenu = theSpan.find(".children_menu");

		theSpan.hover(function(){

			$(theMenu).stop().slideToggle()

		}

			

			/*function(){

				theMenu.animate(0,function(){

					$(this).slideDown();

				});

			},

			function(){

				theMenu.animate(0,function(){

					$(this).slideUp();

				},function(){

					$(this).height(100);

				})

			}*/

		);

	});

}



$(document).ready(function(){	

	dropMenu(".ac-gn-item");

});





// 头部向下滚隐藏

/*$(function(){

	var scrollValue = $(window).scrollTop(),

		outerHeight = $(".g-header").outerHeight();

	window.onscroll = function(){

		

		var scrollTop = $(window).scrollTop();

		if(scrollTop<outerHeight && scrollTop<scrollValue){

			$(".g-header").removeClass("header-show")

		} else{

			scrollTop+$(window).height()<$(document).height()&&$(".g-header").removeClass("header-hide").addClass("header-show");

		}

		scrollValue = scrollTop;

	}

});

$(function () {



	// 首页滚动

	if (!$(document.body).hasClass('home-page')) {

		return

	}

	// 首页滚动



	var html = document.getElementsByTagName('html')[0];

	var screenWidth = html.getBoundingClientRect().width;



	if (screenWidth <= 640 ) {

		$(document.body).addClass('page-scroll');

		return

	}



	if (!$(document.body).hasClass('home-page')) {

		return

	}



	function pageScroll(){

		var top = $(window).scrollTop()

		if (top > 1) {

			

			$(document.body).addClass('page-scroll')

		} else {

			$(document.body).removeClass('page-scroll')			

		}

	}

	pageScroll();

	$(window).on('scroll',function(){

		pageScroll();

	})

})*/





