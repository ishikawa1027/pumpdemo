○ライブラリの追加
外部接続できない場合は、以下のhifiveが必要とするライブラリを含まないため、
個別にダウンロードする必要があります。

・jQuery: The Write Less, Do More, JavaScript Library
	home: http://jquery.com/
	file: http://code.jquery.com/jquery-1.9.1.js

○ビルド時にJavaScriptバリデータでNullPointerExceptionが出る場合の対処法

1. プロジェクトを右クリックしプロパティを選択。
2. JavaScript -> インクルード・パスを選択。
3. インクルード・パス画面でソースタブを選択しバリデータの対象から外したいファイルを除外設定する。

※このプロジェクトではあらかじめ WebContent/js/lib以下のファイルは除外設定しています。

〇JavaScriptフォーマッタの使用方法
configフォルダにプロファイルXMLがあるので、フォーマッタを有効にしたい場合は以下のとおり設定して下さい。

1.プロジェクト・エクスプローラにて、該当プロジェクトで右クリックし、コンテキストメニューの『プロパティ』選択。
2.メニュー一覧から、JavaScript -> コード・コードスタイル -> フォーマッタ を選択。
3.『プロジェクト固有の設定を有効にする』にチェックを入れる。
4.画面にある『インポート』ボタンを押下し、configフォルダにある『H5_JS_WST_FORMATTER_PROFILE.xml』を選択。
5.メニュー一覧から、JavaScript -> エディター -> 補完アクション を選択。
6.OKを押下して設定完了。

上記設定後、編集中に「Ctrl + Shift + F」を押下すると、フォーマットを適用することができます。