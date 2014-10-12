$(function() {
	// コントローラの元となるオブジェクトを作成
	var shakeController = {
		_SHAKEINTERVAL : 200,
		_lastShakedTimeMillis : 0,
		_isMoving : false,
		_startMovingThreshold : 10.0,
		_stopMovingThreshold : 6.0,

		__name : 'pump.ShakeController',
		__construct : function() {
			this.log.info('{0}を実行', '__construct');
		},
		__init : function() {
			this.log.info('{0}を実行', '__init');
		},
		__ready : function() {
			this.log.info('{0}を実行', '__ready');
		},
		'{window} devicemotion' : function(context, $el) {
			context.event.preventDefault();
			var currentTimeMillis = new Date().getTime();

			// 直前のshakeから一定時間経っていなければ終了
			if(currentTimeMillis - this._lastShakedTimeMillis < this._SHAKEINTERVAL){
				return;
			}

			var ac = context.event.originalEvent.acceleration;
			this.log.debug('加速度 x:{0}, y:{1}, z:{2}', ac.x, ac.y, ac.z);
			if (Math.abs(ac.y) > this._startMovingThreshold) {
				this._isMoving = true;
			}
			if (this._isMoving && Math.abs(ac.x) < this._stopMovingThreshold) {
				this._isMoving = false;
				// alert('shakin!');
				this.$find('#debugWindow').append("shakin!<br>");
				this._lastShakedTimeMillis = currentTimeMillis;
				this.trigger('shake');
			}
		}
	};

	// id="container"である要素にコントローラをバインド
	h5.core.controller('#container', shakeController);
});