/**
 * Vue.jsのディレクティブ(2)
 * - バインディング(v-bind)
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      message: 'Hello, Vue.js',
      styles: {},
      className: '',
      isDisabled: false
    }
  },

  methods: {
    toggleStyle(){
      // 背景色及びフォントカラーをランダムに切替
      this.styles = {
        background: `rgba(${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) })`,
        color: `rgb(${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) })`
      }
    },
    toggleClass(){
      // クリックする度に、`className`の値を`cls_01`と空文字に切替
      this.className = this.className === '' ? 'cls_01' : ''
    },
    toggleInput(){
      this.isDisabled = !this.isDisabled
    }
  }

})