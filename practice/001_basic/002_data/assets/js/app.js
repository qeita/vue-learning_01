/**
 * Vue.jsの基本(2)
 * - データ(リアクティブシステム)
 */

let vm = new Vue({
  el: '#app',

  // dataプロパティに管理したい情報を指定すると、リアクティブシステムに追加
  data: function(){
    return {
      message: 'Hello, Vue.js'      
    }
  },

  // クラスメソッドでも可
  // data(){
  //   return {
  //     message: 'Hello, Vue.js (from data(){...})'
  //   }
  // }
})

// [1]
// developer toolsの[Console]タブより、` vm.message="How are you?" `等を打ち込んでみてください。
// dataの更新にあわせてhtmlの表示側も更新されます。
// *通常のJSではhtmlへの更新を手動で行う必要。

// [2]
// dataに後で追加する場合リアクティブに扱えなくなるため、管理したい情報は初期値を設定して予め用意しておくこと。
