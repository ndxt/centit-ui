define(function(require) {
	require('easyUI');

	var $ = require('jquery');

	// TODO 根据项目自定义功能扩展 EasyUI
  $.fn.datagrid.defaults.onLoadSuccess=function () {//增加鼠标hover之后显示该行的title事件
    $('.datagrid-view').parent().find('.datagrid-cell').each(function(){
      $(this).attr('title',$(this).html());
    });
  }
  $.fn.treegrid.defaults.onLoadSuccess=function () {//增加鼠标hover之后显示该行的title事件
    $('.datagrid-view').parent().find('.datagrid-cell').each(function(){
      $(this).attr('title',$(this).html());
    });
  }

});
