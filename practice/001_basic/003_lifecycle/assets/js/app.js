/**
 * Vue.jsの基本(3)
 * - ライフサイクル
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      message: 'Hello, Vue.js',
      count: 0     
    }
  },

  // Vueインスタンスは、インスタンスの生成・マウント・更新・破棄とライフサイクルイベントを有しています。
  // これらイベントをフックして特定の処理を実行することができます。

  /**
   * インスタンス生成
   */
  beforeCreate: function(){   // 生成前
    console.log(this)         // -> Vueインスタンスを参照
    console.log('create: before')
  },

  created: function(){        // 生成後
    console.log('create: after')
  },

  // OK: クラスメソッド
  // beforeCreate(){
  //   console.log(this)
  //   console.log('create: before')
  // },
  // NG: アロー関数
  // beforeCreate: () => {
  //   console.log(this)         // -> Windowオブジェクトを参照
  //   console.log('create: before')
  // },

  /**
   * マウント
   */
  beforeMount: function(){    // マウント前
    console.log('mount: before')
  },

  mounted: function(){        // マウント後
    console.log('mount: after')
  },


  /**
   * 更新
   */
  beforeUpdate: function(){   // 更新前
    console.log('update: before')
  },

  updated: function(){        // 更新後
    console.log('update: after')
  },

  /**
   * インスタンス破棄
   */
  beforeDestroy: function(){  // 破棄前
    console.log('destroy: before')
  },

  destroyed: function(){      // 破棄後
    console.log('destroy: after')
  },

})

// [1]
// developer toolsの[Console]タブより、` vm.message="How are you?" `等を打ち込んでみてください。
// 状態の更新に伴いビュー(表示エリア)が更新されることで beforeUpdate, updatedイベントが実行されます。
// 注意) ビューに紐づいていない更新についてはbeforeUpdate, updatedイベントが発火されません。(`vm.count=100`)

// [2]
// developer toolsの[Console]タブより、` vm.$destroy() `を打ち込んでみてください。
// Vueインスタンスが破棄され、beforeDestroy, destoryedイベントが実行されます。