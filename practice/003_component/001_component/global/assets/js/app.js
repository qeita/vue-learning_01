/**
 * Vue.jsのコンポーネント(1)
 * - グローバル登録
 */

// コンポーネントをグローバル登録するには、`Vue.component([コンポーネント名], {...})`を使います。
Vue.component(
  /**
   * [コンポーネント名]
   * (文字列テンプレート、または単一ファイルコンポーネントではなく)DOM 上で直接コンポーネントを使用する場合は、
   * W3C rules に従ったカスタムタグ名(全て小文字で、ハイフンが含まれていること)を推奨します。
   */
  'button-container',

  /**
   * ルートVueインスタンスのように、dataを設定することができます。
   */
  {
    data(){
      return {
        count: 0
      }
    },
    // `template`にはこのコンポーネントを使った時に出力する内容を記載します。
    // クォーテーション('...' or "...")で記述することもできるが、改行する場合改行箇所にエスケープ(\)文字を付与。
    // テンプレートリテラル(以下のようにバッククォートで囲む)を使えば、エスケープ文字を使わなくても改行できます。
    template: `
      <button @click="count++">You clicked me {{ count }} times.</button>
    `
  }
)

let vm = new Vue({
  el: '#app'
})

/**
 * カスタム要素名(カスタムタグ)は複数個の単語になるものは単語間をハイフン('-')でつなげること
 * キャメルケース等一部の記述違いで表示されないため注意
 *  -> https://jp.vuejs.org/v2/guide/components-registration.html#%E5%91%BD%E5%90%8D%E3%81%AE%E3%82%B1%E3%83%BC%E3%82%B9-Name-Casing
 * 
 * (OK) カスタム要素名として出力してくれる組み合わせ
 * html: button-container   js: button-container
 * html: button-container   js: ButtonContainer
 * 
 * 
 * (NG) カスタム要素名として出力してくれない組み合わせ
 * html: button-container   js: Button-container
 * html: button-container   js: button-Container
 */
