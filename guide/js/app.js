var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue!'
    }
})


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Javascript' },
            { text: 'Learn React' },
            { text: 'Learn Vue.js' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello, Vue!'
    }
})

// todo-itemと呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
    // todo-itemコンポーネントはカスタム属性のようなプロパティで受け取ります
    // このプロパティはtodoと呼ばれる
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { text: '野菜' },
            { text: '完全食COMP' },
            { text: 'カロリーメイト' }
        ]
    }
})