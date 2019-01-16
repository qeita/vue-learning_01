/**
 * Vue.jsのディレクティブ(1)
 * - メソッド(v-on)
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      message: 'Hello, Vue.js'
    }
  },

  methods: {
    reverseMessage(){
      this.message = this.message.split('').reverse().join('')
    },

    alertBox(txt, event){
      console.log(event)
      window.alert(txt)
    }
  }
})