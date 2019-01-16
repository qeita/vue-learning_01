/**
 * Vue.jsのディレクティブ(5)
 * - リストレンダリング(v-for)
 */

let vm = new Vue({
  el: '#app',

  data(){
    return {
      items1: [
        'aaaaa',
        'bbbbb',
        'ccccc',
        'ddddd',
        'eeeee'
      ],
      // items1: [
      //   {txt: 'aaaaa'},
      //   {txt: 'bbbbb'},
      //   {txt: 'ccccc'},
      //   {txt: 'ddddd'},
      //   {txt: 'eeeee'}
      // ],
      items2: {
        first: 'Daisky',
        last: 'Yamazaki',
        job: 'Engineer'
      }
    }
  },

  methods: {
    add(){
      const v = Math.random().toString(36).slice(-5)
      this.items1.push(v)
    },
    remove(){
      this.items1.splice(
        Math.floor(Math.random() * this.items1.length),
        1
      )
    },
    update(){
      const i = Math.floor(Math.random() * this.items1.length)
      if(!this.items1[i]) return

      this.items1[i] = '[UPDATED!!!]'   // これだと表示側にリアクティブに更新されない

      // 対応方法1: Vue.set
      // Vue.set([状態], [該当インデックス], [変更後の値])
      // Vue.set(this.items1, i, '[UPDATED!!!]')

      // 対応方法2: 配列のsplice
      // Array.splice([削除する配列のインデックス], [削除する個数], [削除した要素の代わりに挿入するデータ])
      // this.items1.splice(i, 1, '[UPDATED!!!]')

      // 対応方法3: 配列を新規作成(コピー)、代入
      // const items = this.items1.concat()   // 配列を値渡し(コピー)
      // items[i] = '[UPDATED!!!]'
      // this.items1 = items

      console.log(this.items1)
    }
  }

})