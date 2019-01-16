/**
 * Vue.js 補足(1)
 * - HTML挿入(v-html)
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      text: 'Hello, Vue.js'
    }
  },

  methods: {
    toggle(){
      if(this.text === 'Hello, Vue.js'){
        this.text = '<button>Updated</button>'
      }else{
        this.text = 'Hello, Vue.js'
      }
    }
  }
})