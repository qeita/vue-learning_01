/**
 * Vue.jsのコンポーネント(3)
 */

const ButtonContainer = {
  // ButtonContainerコンポーネントが呼び出された時出力する内容
  // methods内部でemitしているが、以下は `@click="$emit('UP')"`でもOK
  template: `
    <button @click="countUp">Count Up</button>
  `,
  methods: {
    countUp(){
      // カスタムイベント'UP'を発火
      this.$emit('UP')
    }
  }
}


let vm = new Vue({
  el: '#app',

  data(){
    return {
      count: 0
    }
  },
  // ButtonContainerコンポーネントを子コンポーネントとして、templateに呼び出し
  components: {
    ButtonContainer
  },
  // id="app"要素に出力する内容
  // カスタムイベント'UP'を受け取ったら`plus`メソッドを実行
  template: `
    <div>
      <p>{{ count }}</p>
      <button-container @UP="plus" />
    </div>  
  `,
  methods: {
    plus(){
      this.count++
    }
  }
})