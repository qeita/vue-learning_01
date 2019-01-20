/**
 * Vue.jsのコンポーネント(2)
 * - プロパティ(props)
 */

const Blog = {
  // 親コンポーネントから値を受け取るには、`props`に受け取るプロパティ名を指定。
  // ここでは、親コンポーネント(BlogContainer)の`blogItems`をv-forで個別要素で`item`プロパティから受け取っています。
  // 以下は配列構造で親から複数のプロパティ名を受け取れるようになっています。
  props: ['item'],

  // 以下の書き方もOKで、オブジェクト形式でキーには[親から受け取るプロパティ名]、値には[そのプロパティの型]を指定。
  // 受け取るプロパティの型チェックを行い、違っていたらJSで警告を表示します。
  // props: {
  //   item: Object
  // },
  // 以下はバリデーションの詳細設定
  // props: {
  //   item: {
  //     type: Object,
  //     required: true,   // 必須項目かどうか
  //     default: {}       // 初期値を指定
  //   }
  // },

  template: `
    <div>
      <h3>{{ item.title }}</h3>
      <span>{{ item.date }}</span>
      <p>{{ item.desc }}</p>      
    </div>
  `
}


/**
 * ブログ記事を格納するコンテナ
 */
const BlogContainer = {
  data(){
    return {
      blogArray: [
        {
          id: 3,
          date: '2019/01/06',
          title: 'Vue.jsのコンポーネントについて',
          desc: 'コンポーネントが扱えるようになると何が楽になるの？'
        },
        {
          id: 2,
          date: '2019/01/03',
          title: 'Vue.jsのディレクティブ詳細',
          desc: 'v-xxxって何なの？からディレクティブについて一つ一つ解説'
        },
        {
          id: 1,
          date: '2019/01/01',
          title: 'Vue.jsはじめました',
          desc: '初心者がVue.jsに手を出してみた'
        }
      ]
    }
  },
  components: {
    Blog
  },
  template: `
    <div>
      <blog v-for="blogItem in blogArray" :key="blogItem.id" :item="blogItem" />
    </div>
  `
}

let vm = new Vue({
  el: '#app',
  components: {
    BlogContainer
  }
})