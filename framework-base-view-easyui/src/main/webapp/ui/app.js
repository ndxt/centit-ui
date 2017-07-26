requirejs.config({
    baseUrl: window.ViewContextPath + 'ui',
    
    paths: {
		jquery: 'js/jquery/jquery-1.11.2.min',

		'ueditor': 'js/plugins/ueditor/ueditor.all',

		'quill': 'js/plugins/quill/1.2.4/quill',
		
		'socket.io': 'js/plugins/socket.io-1.3.7',
		
		underscore: 'js/plugins/underscore/underscore-min',
		
		easyUI: 'js/easyui/1.5.2/jquery.easyui.min',

		codeMirror: 'js/plugins/codemirror/codemirror',
		
		yepnope: 'js/plugins/yepnope/yepnope-1.5.4.min',
		
		fullcalendar: 'js/plugins/fullcalendar-3.0.1/locale/zh-cn',
		
		moment: 'js/plugins/moment.min',

		uploader: 'js/plugins/uploader/uploader',

		dropmenu: 'js/plugins/dropmenu/js/dropmenu',

		// 用户自定义参数文件路径
		custom: '../custom',
		
		modules: '../modules',
		
		centit: 'js/centit',
		
		loaders: 'js/loaders',
		
		plugins: 'js/plugins',
		
		websocket: 'js/websocket',

		myuploader: 'widgets/uploader/centit.uploader',
		
        style: 'css',

		locale: 'js/easyui/1.5.2/locale/easyui-lang-zh_CN',

		spark: 'js/plugins/spark-md5.min',

		fileMD5: 'js/plugins/file.md5'

    },
    
    shim: {
    	ueditor: {
    		deps: ['plugins/ueditor/third-party/zeroclipboard/ZeroClipboard', 'plugins/ueditor/ueditor.config'],
    		exports: 'UE',
			init: function(ZeroClipboard) {
				window.ZeroClipboard = ZeroClipboard;
			}
		},

        quill: {
        	deps: ['css!plugins/quill/1.2.4/quill.snow.css'],
			exports: 'Quill'
		},

		uploader: {
			deps: ['fileMD5', 'css!plugins/uploader/uploader.css', 'css!widgets/uploader/centit.uploader.css'],
			init: function(FileMD5) {
				window.FileMD5 = FileMD5;
			},
			exports: 'Stream'
		},

    	easyUI : {
    		deps: ['jquery', 'css!style/icon.css'],

    		init: function($) {
    			$.parser.auto = false;
    		}
    	},

        dropmenu: {
			deps: ['css!plugins/dropmenu/css/dropmenu.css']
		},

		codeMirror: {
			deps: [
				'js/plugins/codemirror/mode/xml/xml',
				'js/plugins/codemirror/mode/css/css',
				'js/plugins/codemirror/mode/javascript/javascript',
				'css!plugins/codemirror/codemirror.css'
			]
		},
		
		fullcalendar: {
			deps: [
			     'js/plugins/fullcalendar-3.0.1/fullcalendar.min',
			     'css!js/plugins/fullcalendar-3.0.1/fullcalendar.min.css'
			]
		}
    },
    
    map: {
		'*' : {
			'css' : 'js/css.min',
			'text' : 'js/text'
		}
	}
});

requirejs(['main']);