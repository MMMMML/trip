$(function(){
/*nav导航栏开始*/
$('#header').find('.nav').children('li').on('mouseover',function(){
	$(this).find('strong').stop().animate({'top':-60})
}).on('mouseout',function(){
	$(this).find('strong').stop().animate({'top':0})
})
/*nav导航栏结束*/
/*图片滚动栏开始*/
var $scrollWidth=$('#scroll-play').find('ul').find('li').width();
var $scrollClone=$('#scroll-play').find('ul').find('li').first().clone();
var $scrollImg=$('#scroll-play').find('ul');
var $scrollLis=$('#scroll-play').find('ol').find('li');
    $scrollImg.append($scrollClone);
var $scrollLen=$scrollImg.find('li').size();
var index=0;
var timer=null;
function scrollplay(){
	index++;
	if(index==$scrollLen){
		$scrollImg.css({'left':0});
		index=1;
		
	}
	$scrollImg.stop().animate({'left':-index*$scrollWidth});
	if(index==$scrollLen-1){
		$scrollLis.eq(0).addClass('blueborder').siblings('li').removeClass('blueborder');
	}
	$scrollLis.eq(index).addClass('blueborder').siblings('li').removeClass('blueborder');
}
timer=setInterval(scrollplay,3000);
$('#scroll-play').hover(function(){
	clearInterval(timer);
},function(){
timer=setInterval(scrollplay,3000);	
})
$scrollLis.on('mouseover',function(){
	var i=$(this).index();
	index=i;
	$(this).addClass('blueborder').siblings('li').removeClass('blueborder');
	$scrollImg.stop().animate({'left':-index*$scrollWidth});
})

/*图片滚动栏结束*/
/*上榜展示区开始*/
$('.show-img').find('li').on('mouseover',function(){
	var $position=$(this).position();
	$(this).find('div').stop().animate({'top':-15});
	$(this).find('div').children('img').stop().animate({'width':300,'left':-7.5});
	$('.fly').stop().show().animate({'top':$position.top,'left':$position.left,'width':$(this).width(),'height':$(this).height()});
}).on('mouseleave',function(){
	$(this).find('div').stop().animate({'top':0});
	$(this).find('div').children('img').stop().animate({'width':285,'left':0});
})

/*上榜展示区结束*/	
/*3d滚动区域开始*/
$('.slider3d__item').find('a').hover(function(){
	$(this).stop().fadeOut(200).css('background','#23958F').fadeIn(1000);
},function(){
	$(this).stop().css('background','');
})
/*3d滚动区域结束*/
/*文字选项卡区域开始*/	
$('#choose').find('.chooseleft').find('ul').children('li').on('mouseover',function(){
	$(this).addClass('coloron').siblings('li').removeClass('coloron');
	$('#choose').find('.chooseleft').find('.author').children('ol').eq($(this).index()).show(1000).siblings('ol').hide();
})
function article(){
var $ulfirst=$('#choose').find('.chooseright').find('ul').children('li').first();
var $ul=$('#choose').find('.chooseright').find('ul');
    $ulfirst.slideUp(500,function(){
    $ulfirst.remove().clone().appendTo($ul).slideDown(1000);
    })
   }
  setInterval(article,2000);
/*文字选项卡区域结束*/
/*登录区域开始*/
$('.denglu').on('click',function(){
	$('.cover').fadeIn();
	$('.in').slideDown(1000);
})
$('.cls').on('click',function(){
	$('.cover').fadeOut();
	$('.in').slideUp(1000);
})

var onoff=false;
	var $left,$top;
	var $clientwidth=document.documentElement.clientWidth;
	var $clientheight=document.documentElement.clientHeight;
	$('.in').on('mousedown',function(e){
		 $left=e.pageX-$(this).offset().left;
		 $top=e.pageY-$(this).offset().top;
		 onoff=true;
		 $(window).on('mousemove',function(e){
		 	if(onoff==true){
		 	var $clinetx=e.pageX-$left;
		 	var $clienty=e.pageY-$top;
		 	$clinetx=Math.max(0,$clinetx);
		 	$clinetx=Math.min($clientwidth-$('.in').width(),$clinetx);
		 	$clienty=Math.max(0,$clienty);
		 	$clienty=Math.min($clientheight-$('.in').height(),$clienty);
		 	$('.in').css({'left':$clinetx,'top':$clienty});
		 	}
		 }).on('mouseup',function(){
		 	onoff=false;
		 })
		 
	})
$('.o1').on('click',function(){
	$('.third').stop().animate({'height':120});
	$(this).hide();
	$('.lg-btm').hide();
	$('.o2').fadeIn();
})
$('.o2').on('click',function(){
	$('.third').stop().animate({'height':55});
	$(this).hide();
	$('.lg-btm').fadeIn();
	$('.o1').fadeIn();
})
$('.sub').on('mouseover',function(){
	$(this).children(':input').stop().fadeOut(30).css({'background':'#23958F','color':'white'}).fadeIn(1000);
}).on('mouseout',function(){
	$(this).children(':input').css({'background':'#fff','color':'#209F99'});
})

/*登录区域结束*/
/*注册区域开始*/
$(':input').on('blur',function(){
	if($(this).not('#resent').val()==''){
		$(".psshow").text($(this).attr('placeholder')+'不能为空');
		return false;
	}
	if($(this).is('#username')){
		var $username=$.trim($('#username').val());
			//声明正则
			var pattern=/^[\u4E00-\u9FA5]{2,4}$/ig;
			if(!pattern.test($username)){
				$(this).addClass("blue");
				$(".psshow").text('请输入2-4位的中文');
			}
		}
	if($(this).is('#txtname')){
		var $txtname=$.trim($('#txtname').val());
		var pattern=/^[a-z0-9]{3,6}$/ig;
		if(!pattern.test($txtname)){
				$(this).addClass("blue");
				$(".psshow").text('请输入3-6位英文或数字，不含特殊字符');
			}
	}
	if($(this).is('#personnum')){
			var  $personnum=$('#personnum').val();
			var pattern=/^[0-9]{17}([0-9]|X)$/ig;
			if(!pattern.test($personnum)){
				$(this).addClass("blue");
				$(".psshow").text('请输入18位身份证号码');
			}
		}
	if($(this).is('#txtemail')){
			var  $txtemail=$('#txtemail').val();
			var pattern=/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,4}$/ig;
			if(!pattern.test($txtemail)){
				$(this).addClass("blue");
				$(".psshow").text('请输入正确邮箱地址');
			}
		}
	if($(this).is('#phonenum')){
			var  $phonenum=$('#phonenum').val();
			var pattern=/^1[0-9]{10}$/ig;
			if(!pattern.test( $phonenum)){
				$(this).addClass("blue");
				$(".psshow").text('请输入正确电话号码');
			}
		}
	if($(this).is('#ecode')){
		var $ecode=$('#ecode').val();
		var pattern=/^[0-9]{6}$/ig;
		if(!pattern.test( $ecode)){
				$(this).addClass("blue");
				$(".psshow").text('请输入正确验证码');
			}else{
				$(".psshow").text('');
				
			}
		
		
	}
	if($(this).is('#txtpassword')){
			var  $txtpassword=$('#txtpassword').val();
			var pattern=/^[a-z]/ig;
			if(!pattern.test($txtpassword)){
				$(this).addClass("blue").next('h4');
				$(".psshow").text('请输入正确密码');
			}
	}
})
    $(':input').on('focus',function(){
    	$(this).removeClass('blue');
    })
    $('#phonenum').on('keyup',function(){
    	if($(this).val().length==11){
    		$('#resent').attr('disabled',false).css({'background':'#2BD2A9','color':'white'});
    	}else{
    		$('#resent').attr('disabled',true).css({'background':'#fff','color':'#2BD2A9'});
    	}
    })
    var $true=true;
    $('.sps').on('click',function(){
    	if($true){
    		var $src="img/sps2.png";
    		$(this).attr('src',$src);
    		$('#txtpassword').attr('type','text');
    		$true=false;
    	}else{
    		var $src1="img/sps.png";
    		$(this).attr('src',$src1);
    		$('#txtpassword').attr('type','password');
    		$true=true;
    	}
    })
    
    
    
$('#regbutton').on('click',function(){
	$(':input').blur();
		if($('.psshow').text()==''){
			alert($('#txtname').val()+',有你的旅程，更加精彩！')
			return true;
		}
		return false;
})
		
	

$('#txtpassword').on('keyup',function(){
		var n=0;
		if(/[a-z]/.test(this.value)){
			n++;
		}
		if(/\d/.test(this.value)){
			n++;
		}
		if(/[^0-9a-z]/.test(this.value)){
			n++;
		}
		$.each($('.in').find('ol').children('li'), function(i) {
			if(i==(n-1)){
				$(this).addClass('blue');
			}else{
				$(this).removeClass('blue');
			}
		});
	})




/*注册区域结束*/

/*地图图片开始*/
var imgtime=null;
function imgcover(){
	var imgnum=Math.round(Math.random()*($('#container').children('div').length-1));
	$('#container').children('div').eq(imgnum).fadeIn(1000).siblings('div').fadeOut(1000);
}
imgcover();
imgtime=setInterval(imgcover,3000);
/*地图图片结束*/
/*侧边导航栏开始*/
$('.sidebar').on('mouseover',function(){
	$('.barshow').stop().animate({'width':325});
})
$('.sidebar').find('ul').children('li').on('mouseover',function(){
	$(this).css('background','black').siblings('li').css('background','');
	$('.barshow').find('ul').children('li').eq($(this).index()).fadeIn(1000).siblings('li').hide();
})
$('.barshow').find('ul').children('li').on('mouseleave',function(){
	$('.sidebar').find('ul').children('li').css('background','');
	$('.barshow').stop().animate({'width':0}).find('ul').children('li').fadeOut();
	
})
/*侧边导航栏结束*/
//目的地地图部分开始
         $(function () {
            //数据可以动态生成，格式自己定义，cha对应china-zh.js中省份的简称
            var dataStatus = [{ cha: 'HKG', name: '香港', des: '<br/>购物的天堂' },
                             { cha: 'HAI', name: '海南', des: '<br/> 安全的旅游岛，美妙的度假地'},
                             { cha: 'YUN', name: '云南', des: '<br/>七彩云南' },
                             { cha: 'BEJ', name: '北京', des: '<br/>不到长城非好汉' },
                             { cha: 'TAJ', name: '天津', des: '<br/>敞开天津门，笑迎八方客'},
                             { cha: 'XIN', name: '新疆', des: '<br/>水果的天堂' },
                             { cha: 'TIB', name: '西藏', des: ''},
                             { cha: 'QIH', name: '青海', des: '<br/>大美青海欢迎你'},
                             { cha: 'GAN', name: '甘肃', des: '<br/>七彩丹霞欢迎你'},
                             { cha: 'NMG', name: '内蒙古', des: '<br/>自由自在内蒙古'},
                             { cha: 'NXA', name: '宁夏', des: '<br/>塞上江南，神奇宁夏'},
                             { cha: 'SHX', name: '山西', des: '<br/>华夏古文明 山西好风光'},
                             { cha: 'LIA', name: '辽宁', des: '<br/>21世纪中国滑雪胜地'},
                             { cha: 'JIL', name: '吉林', des: '<br/>冰雪之城'},
                             { cha: 'HLJ', name: '黑龙江', des: '<br/>冰雕玉镯'},
                             { cha: 'HEB', name: '河北', des: '<br/> 新世纪，游河北，新感受'},
                             { cha: 'SHD', name: '山东', des: '<br/>走近孔子，扬帆青岛'},
                             { cha: 'HEN', name: '河南', des: '<br/>牡丹之都'},
                             { cha: 'SHA', name: '陕西', des: '<br/> 古老与现代，淳朴与自然'},
                             { cha: 'SCH', name: '四川', des: '<br/>拜水都江堰，问道青城山'},
                             { cha: 'CHQ', name: '重庆', des: '<br/>非来不可'},
                             { cha: 'HUB', name: '湖北', des: '<br/>养生太极湖，问道武当山 '},
                             { cha: 'ANH', name: '安徽', des: '<br/>难忘安徽'},
                             { cha: 'JSU', name: '江苏', des: '<br/>美好江苏欢迎你'},
                             { cha: 'SHH', name: '上海', des: '<br/>魔都欢迎你'},
                             { cha: 'ZHJ', name: '浙江', des: '<br/>诗画江南，山水浙江'},
                             { cha: 'FUJ', name: '福建', des: '<br/>清新福建'},
                             { cha: 'TAI', name: '台湾', des: '<br/>美丽台湾欢迎你'},
                             { cha: 'JXI', name: '江西', des: '<br/> 世界瓷都，仙鹤乐园'},
                             { cha: 'HUN', name: '湖南', des: '<br/>湖南欢迎你'},
                             { cha: 'GUI', name: '贵州', des: '<br/>走遍大地神州，醉美多彩贵州'},
                             { cha: 'GXI', name: '广西', des: '<br/>桂林山水甲天下'}, 
                             { cha: 'GUD', name: '广东', des: '<br/>活力广东，精彩纷呈'}];
			
            $('#container').vectorMap({ map: 'china_zh',
                color: "#FEFEFE", //地图颜色
                onLabelShow: function (event, label, code) {//动态显示内容
                    $.each(dataStatus, function (i, items) {
                        if (code == items.cha) {
                            label.html(items.name + items.des +"<br/>");
                        }
                    });
                }
				
           })
            $.each(dataStatus, function (i, items) {
                if (items.des.indexOf('个') != -1) {//动态设定颜色，此处用了自定义简单的判断
                    var josnStr = "{" + items.cha + ":'#00FF00'}";
                    $('#container').vectorMap('set', 'colors', eval('(' + josnStr + ')'));
                }
            });
            $('.jvectormap-zoomin').click(); //放大
        });
/*目的地地图部分结束*/

/*九宫格区域开始*/
	$('.jiugongge').find('ul').children('li').on('mouseover',function(){
		$('.jiugongge').find('ul').children('li').children('a').stop().fadeIn(700).css({'zIndex':19});
		$(this).children('.nine').css({'zIndex':25});
		$(this).children('.top').stop().animate({'top':-197},600).css({'zIndex':20});
		$(this).children('.topR').stop().animate({'top':-394},600).css({'zIndex':20});
		$(this).children('.topRR').stop().animate({'top':-591},600).css({'zIndex':20});
		$(this).children('.right').stop().animate({'right':-300},600).css({'zIndex':20});
		$(this).children('.rightR').stop().animate({'right':-600},600).css({'zIndex':20});
		$(this).children('.rightRR').stop().animate({'right':-900},600).css({'zIndex':20});
		$(this).children('.bottom').stop().animate({'top':197},600).css({'zIndex':20});
		$(this).children('.bottomR').stop().animate({'top':394},600).css({'zIndex':20});
		$(this).children('.bottomRR').stop().animate({'top':591},600).css({'zIndex':20});
		$(this).children('.left').stop().animate({'left':-300},600).css({'zIndex':20});
		$(this).children('.leftR').stop().animate({'left':-600},600).css({'zIndex':20});
		$(this).children('.leftRR').stop().animate({'left':-900},600).css({'zIndex':20});
	}).on('mouseout',function(){
		$('.jiugongge').find('ul').children('li').children('a').stop().fadeOut(700).css({'zIndex':5});
		$(this).children('.nine').css({'zIndex':5});
		$(this).children('.top').stop().stop().animate({'top':0},600).css({'zIndex':0});
		$(this).children('.topR').stop().stop().animate({'top':0},600).css({'zIndex':0});
		$(this).children('.topRR').stop().stop().animate({'top':0},600).css({'zIndex':0});
		$(this).children('.right').stop().animate({'right':0},600).css({'zIndex':0});
		$(this).children('.rightR').stop().animate({'right':0},600).css({'zIndex':0});
		$(this).children('.rightRR').stop().animate({'right':0},600).css({'zIndex':0});
		$(this).children('.bottom').stop().animate({'top':0},600).css({'zIndex':0});
		$(this).children('.bottomR').stop().animate({'top':0},600).css({'zIndex':0});
		$(this).children('.bottomRR').stop().animate({'top':0},600).css({'zIndex':0});
		$(this).children('.left').stop().animate({'left':0},600).css({'zIndex':0});
		$(this).children('.leftR').stop().animate({'left':0},600).css({'zIndex':0});
		$(this).children('.leftRR').stop().animate({'left':0},600).css({'zIndex':0});
	})



/*九宫格区域结束*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})