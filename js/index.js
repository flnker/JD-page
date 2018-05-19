$('#shortcut li').hover(function(){
	if($(this).children('dl').length){
		$(this).addClass('li-active');
	}
},function(){
	if ($(this).children('dl').length) {
		$(this).removeClass('li-active');
	}
});

$('#keyword').focus(function(){
	$(this).val('');
});
$('#keyword').blur(function(){
	if ($(this).val()=='') {
		$(this).val($(this).attr('default'));
	}
});

// header cart
$('#header-cart dl').hover(function(){
	$(this).addClass('hover');
},function(){
	$(this).removeClass('hover');
});

// item-hover
$('#cate-list-show li').hover(function(){
	$(this).addClass('item-hover');
	$(this).children('.item-list').show();
},function(){
	$(this).removeClass('item-hover');
});
$('#cate-list-show .item-list-close').click(function(){
	$(this).parent().hide();
});

$('#top-slide').HDslide();
$('.module-tabs').each(function(){
	$(this).HDtabs();
});