define(function(require) {
	var io = require('socket.io');
	
	// 客户端
	var socket = null;
	
	return {
		init: init,
		on: on
	};
	
	///////////////////////////
	
	/**
	 * 初始化
	 */
	function init(options, events) {
		if (!options.enable || !options || !options.socket_host) return;
		
		var url = 'ws://' + options.socket_host + ':' + options.socket_port + '?userCode=' + options.userCode;
		var socket = io(url);
		
		events = events || {};
		for (var name in events) {
			socket.on(name, events[name]);
		}
	}
	
	/**
	 * 添加事件
	 */
	function on(name, callback) {
		if (!socket) return;
		
		socket.on(name, callback)
	}
	
});