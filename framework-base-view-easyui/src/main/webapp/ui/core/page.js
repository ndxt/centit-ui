define(function(require) {
	var Config = require('config');
	var Core = require('core/core');
	var Mustache = require('plugins/mustache.min');
	
	// 页面对象
	var Page = Class.extend(function() {
		var _self = this;
	
		this.id = '';
		
		// 页面DOM，默认为document
		this.panel = $(document);
		
		// object 页面对象默认值
		// data 从父级页面传过来的值
		this.object = this.data = {};
		
		// 父对象
		this.parent = null;
		
		this.controllers = {};
		
		// 注入子控制器
		this.injecte = function(controller) {
			if (!$.isArray(controller)) {
				controller = [controller];
			}
			
			controller.forEach(function(c, i) {
				_self.controllers[c.id] = c;
				c.parent = _self;
			});
			
		};
	
		/**
		 * 构造函数
		 */
		this.constructor = function(id, panel) {
			if (!id) throw ('id is not defined.');
			
			this.id = id;
			panel && (this.panel = $(panel));
		};
		
		this.$parse = function(data, obj) {
			if (!this.panel || !this.panel.length) {
				return;
			}
			
			var toRender = obj ? this.panel.find(obj) : this.panel;
			
			var html = toRender.html();
			toRender.html(Mustache.render(html, data));
		}
		
		// 初始化方法
		this.init = function(panel, data) {
			panel && (this.panel = panel);
			data && (this.data = data);
			
			initPrintForm(panel);
			
			this.load(panel || this.panel, data || this.data);
		};

		this.beforeLoad = function(data) {
			return true;
		};
		
		// 加载数据
		this.load = function(panel, data) {};
		
		// 提交
		this.submit = function(panel, data, closeCallback) {};
		
		// 注销
		this.onClose = function() {};
		
		// 注销前事件
		this.onBeforeClose = function(panel) {};
		
		/**
		 * 特殊处理打印form
		 */
		function initPrintForm(panel) {
			var form = panel.find('form.print');
		    
			if (form[0]) {
				// 解决 IE8 不支持 :last-child
				form.find('.fields:last-child, .field:last-child').addClass('last');
				
				// 解决 label 高度随 textarea 动态撑开 
				form.find('span.textbox').each(function() {
					var height = $(this).height()+5;
					$(this).parent().find('>label').css({
						'line-height': height+'px'
					});
				});
			}
		}
	});
	
	return Page;
});