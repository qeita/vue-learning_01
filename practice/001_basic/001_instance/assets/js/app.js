/**
 * Vue.jsの基本(1)
 * - Vueインスタンスの作成
 */

new Vue({
  // ここにオプションとして追加
})

/**
 * Vueのマウント先指定
 */

// new Vue({
//   // elキーにセレクタを指定(jQueryのセレクタ指定と同じ)
//   el: '#app'
// })

// 以下の記述でもOK
// new Vue({
//   mounted(){
//     console.log('instance')
//   }
// }).$mount('#app')

/**
 * Vueインスタンスの構成
 * 以下のように書いていきます。使わないオプションは記述不要です
 */

// new Vue({
//   // マウント先
//   el: '...',

//   // データ(状態)
//   data(){
//     return {}
//   },

//   // ライフサイクルイベント
//   mounted(){
//     console.log('mounted')
//   },

//   // 算出プロパティ
//   computed: {
//     message(){
//       return ''
//     }
//   },

//   // ウォッチャ
//   watch: {
//     text(a, b){}
//   },

//   // メソッド
//   methods: {
//     getText(){}
//   }
// })