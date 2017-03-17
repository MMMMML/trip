var index=0;
var timer=null;
var imglis=$('.focus').children('img');
var $lis=$('#home').find('ul').children('li');
function move(){
	index++;
	index%=imglis.length;
	imglis.eq(index).animate({'opacity':1,'z-index':1},1000).siblings('img').animate({'opacity':0,'z-index':0},1000);
	$lis.eq(index).addClass('blue').siblings('li').removeClass('blue');
	}
timer=setInterval(move,3000);
    $lis.on('mouseover',function(){
    	index=$(this).index();
    	imglis.eq(index).animate({'opacity':1,'z-index':1},1000).siblings('img').animate({'opacity':0,'z-index':0},1000);
    	$(this).addClass('blue').siblings('li').removeClass('blue');
    })
    $('#home').hover(function(){
    	clearInterval(timer);
    },function(){
    	timer=setInterval(move,3000);
    })
    $('.content').find('li').hover(function(){
    	$(this).children('img').stop().animate({'width':300,'height':370})
    },function(){
    	$(this).children('img').stop().animate({'width':250,'height':319})
    })
    /*nav导航栏开始*/
$('#tou').find('.nav').children('li').on('mouseover',function(){
	$(this).find('strong').stop().animate({'top':-60})
}).on('mouseout',function(){
	$(this).find('strong').stop().animate({'top':0})
})
/*nav导航栏结束*/

