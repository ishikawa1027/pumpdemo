$(function() {
	// コントローラの元となるオブジェクトを作成
	var helloController = {
		__name : 'HelloWorldController',
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
		}
	};

	// id="container"である要素にコントローラをバインド
	h5.core.controller('#container', helloController);
});