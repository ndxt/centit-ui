define(['jquery', 'easyUI'], function($) {
	return receiveMessage;
	
	function receiveMessage(data) {
		data = $.parseJSON(data);
	
        $.messager.show({
            title:'新消息',
            msg:data.message,
            showType:'slide'
        });
	}
});