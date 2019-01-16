/**
 * Vue.jsの基本(4)
 * - 算出プロパティ
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      message: 'Hello, Vue.js'
    }
  },

  // 算出プロパティはdata(状態)に依存して更新するプロパティを登録、表示側はそのプロパティを呼び出してやればOK
  computed: {
    reversedMessage: function(){
      return this.message.split('').reverse().join('')
      // 注意) Vueインスタンスの中で、dataのmessageを参照するには、`this.message...`と記載
    }
  },

  // クラスメソッドでも可
  // computed: {
  //   reversedMessage(){
  //     return this.message.split('').reverse().join('')
  //   }
  // }

})

// [1]
// developer toolsの[Console]タブより、` vm.message="How are you?" `等を打ち込んでみてください。
// 状態の更新に伴いそれに依存して算出プロパティも計算されます。

// 算出プロパティを使う用途として、
// 1) html側で冗長な記述になる部分を整理できます。
// 2) 算出プロパティはその情報をキャッシュする性質を持ち、状態が変わるタイミングで再計算し変わらない場合は、現在の値を返す形になっています()。