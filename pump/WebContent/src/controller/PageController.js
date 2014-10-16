$(function() {
	// コントローラの元となるオブジェクトを作成
	var pumpController = {
		__name: 'pump.PumpController',
		__construct : function() {
			this.log.info('{0}を実行', '__construct');
		},
		__init : function() {
			this.log.info('{0}を実行', '__init');
		},
		__ready : function() {
			this.log.info('{0}を実行', '__ready');
		},
		'#pumpTrigger click' : function() {
		},
		'#btn click': function() {
			alert('Hello, World!');
		}
	};

	// id="container"である要素にコントローラをバインド
	h5.core.controller('#container', pumpController);
});