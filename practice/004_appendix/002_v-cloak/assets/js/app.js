/**
 * Vue.js 補足(2)
 * - Vue インスタンスのコンパイル終了まで残存(v-cloak)
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      message: 'Hello, Vue.js'      
    }
  }
})
