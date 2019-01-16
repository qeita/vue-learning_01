/**
 * Vue.jsの基本(5)
 * - ウォッチャ(監視)
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      message: 'Hello, Vue.js',
      log: ''
    }
  },

  // data(状態)の変更を検知するのに、watchプロパティがあり
  // 引数に[変更後][変更前]の値が渡されます。

  watch: {
    message: function(after, before){
      console.log(`prev: ${before}`)
      console.log(`current: ${after}`)

      // 関数を呼び出すetc
      // const log = () => {
      //   this.log = `${ this.message } is logging...`        
      // }
      // log()
    }
  },

  // クラスメソッドでも可
  // watch: {
  //   message(after, before){
  //     console.log(`prev: ${before}`)
  //     console.log(`current: ${after}`)
  //   }
  // }

})

// [1]
// developer toolsの[Console]タブより、` vm.message="How are you?" `等を打ち込んでみてください。
// 状態の変更を検知して、console.logで[変更前][変更後]の値が出力されます。

// [2]
// 算出プロパティもウォッチャと同じく変更を検知して実行されるが、違いとして先のキャッシュという性質の他
// - 算出プロパティは [値として返す場合]
// - ウォッチャは [変更前の値を使って何かする場合・検知した後に関数など特定処理を実行する場合]
// というざっくりイメージで使い分けるといいと思います。
