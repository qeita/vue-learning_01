/**
 * Vue.jsのコンポーネント(1)
 * - ローカル登録
 */

// コンポーネントのローカル登録は、インスタンスで記述したオプションの形式でコンポーネント用変数に代入し、
// インスタンスの`components`プロパティでその変数を指定します。
const ButtonContainer = {
  data(){
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">You clicked me {{ count }} times.</button>
  `
}

let vm = new Vue({
  el: '#app',

  /**
   * components: {
   *   ButtonContainer(=> カスタム要素では 'button-container' ): ButtonContainer
   * }
   * 以下記述は上記と同義
   */
  components: {
    ButtonContainer
  },

  // カスタム要素名を任意の名前にする場合、以下のようにキーとして指定
  // htmlで`<container />`と記述したらButtonContainerのテンプレートが出力
  // components: {
  //   'container': ButtonContainer
  // }
})
