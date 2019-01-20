/**
 * Vue.js 補足(3)
 * - Vue インスタンス内の要素取得(ref)
 */

let vm = new Vue({
  el: '#app',

  // `this.$refs.[html側でref="xxx"のxxxを記述]`で要素を取得することができます。
  // 以下、実行タイミングによって要素を取得できないため注意。
  created(){
    // $refsの要素を参照できません。    
    console.log(this.$refs)
    console.log(document.getElementsByTagName('button')[0])
  },
  beforeMount(){
    // $refsの要素を参照できません。
    console.log(this.$refs)
    console.log(document.getElementsByTagName('button')[0])
  },
  mounted(){
    // $refsの要素を参照できます。
    // ref="xxx"の値は一意である必要があります。
    console.log(this.$refs)
    console.log(document.getElementsByTagName('button')[0])

    // 参照された要素を`this.btn`に代入。
    this.btn = this.$refs.btn

    // ボタン要素(`this.btn`)に通常のJSのようにクリックイベントを登録。
    this.btn.addEventListener('click', function(){
      window.alert('押しちゃった')
    }, false)
  },

})