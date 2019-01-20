/**
 * Vue.js 補足(4)
 * - カスタムディレクティブ
 */

Vue.directive(
  'custom',
  {
    // ディレクティブが要素に紐づいた時に実行
    bind: function(el, binding, vnode, oldVnode){
      console.log('--- bind ---')
      console.log(el)
      console.log(binding)
      console.log(vnode)
      console.log(oldVnode)
      console.log(el.parentNode)    // 親要素が取得不可
    },
    // 以下のようなクラスメソッド風に記述もOK
    // bind(){
    // ...
    // }

    // ディレクティブを付与した要素が親要素に出力された時に実行
    inserted: function(el, binding, vnode, oldVnode){
      console.log('--- inserted ---')
      console.log(el)
      console.log(binding)
      console.log(vnode)
      console.log(oldVnode)
      console.log(el.parentNode)    // 親要素が取得可能
    },

    // ディレクティブを付与した要素を包含するコンポーネント要素の仮想Node(VNode) が更新される時に実行
    update: function(el, binding, vnode, oldVnode){
      console.log('--- update ---')
      console.log(el)
      console.log(binding)
      console.log(vnode)
      console.log(oldVnode)
    },

    // ディレクティブを付与した要素を包含するコンポーネント要素の仮想Node(VNode) と子コンポーネントの仮想Nodeが更新された後に実行
    componentUpdated: function(el, binding, vnode, oldVnode){
      console.log('--- componentUpdated ---')
      console.log(el)
      console.log(binding)
      console.log(vnode)
      console.log(oldVnode)
    }
    // updateは子コンポーネントが更新される前にフック
    // componentUpdatedは子コンポーネントが更新された後にフック
  }
)

const Counter = {
  data(){
    return {
      countChild: 0
    }
  },
  template: `
    <div>
      <p>子要素のカウント: {{ countChild }}</p>
      <button @click="countChild++">子要素のCount Up</button>
    </div>
  `
}

let vm = new Vue({
  el: '#app',

  data(){
    return {
      countParent: 0
    }
  },
  components: {
    Counter
  },

  template: `
    <div class="custom-directive">
      <section v-custom>
        <p>親要素のカウント: {{ countParent }}</p>
        <button @click="countParent++">親要素のCount Up</button>
      </section>
      <Counter />
    </div>
  `
})