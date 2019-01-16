/**
 * Vue.jsのディレクティブ(3)
 * - 要素の表示非表示(v-if)
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      isShown: false
    }
  },

  methods: {
    openModal(){
      this.isShown = true
    },
    closeModal(){
      this.isShown = false
    }
  }

})