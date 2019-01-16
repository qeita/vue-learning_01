/**
 * Vue.jsの基本(6)
 * - メソッド
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      message: 'Hello, Vue.js'
    }
  },

  mounted(){
    setTimeout( () => {
      this.reverseMessage()
    }, 2000)
  },

  // Vueインスタンスで使用するメソッド(関数)を、methodsプロパティ内に登録します。
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  },

  // クラスメソッドも可
  // methods: {
  //   reverseMessage(){
  //     this.message = this.message.split('').reverse().join('')
  //   }
  // }

})