/**
 * Vue.js 補足(5)
 * - 要素の表示・削除時のアニメーション設定(transition)
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