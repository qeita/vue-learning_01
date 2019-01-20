/**
 * Vue.js 補足(6)
 * - スロット(slot)
 */

const ButtonContainer = {
  // 親コンポーネントから子コンポーネントに受け取る口をslotタグで表します。
  template: `
    <button>
      <slot></slot>
    </button>
  `,

  // 以下のようにslotタグを空要素として書いてもよし。
  // template: `
  //   <button>
  //     <slot />
  //   </button>
  // `
}

let vm = new Vue({
  el: '#app',
  components: {
    ButtonContainer
  }
})