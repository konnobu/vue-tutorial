var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'あなたが質問しない限り、私は回答できません！'
    },
    watch: {
        // この関数はquestionが変わるごとに実行される
        question: function (newQuestion) {
            this.answer = '入力を終えるのを待っています…'
            this.getAnswer()
        }
    },
    methods: {
        // _.debounce は特にコストが高い処理の実行をうまく制御するための
        // lodash で用意されている関数です。頻繁に yesno.wtf/apiへアクセス
        // するのは望ましくない場合もあります。そのために、ユーザが入力を完全に終えるまで
        // 非同期アクセスを実行しないようにします。
        // _.debounce(とその親戚である _.throttle)の詳細: https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function () {
                var vm = this
                if (this.question.indexOf('?') === -1) {
                    vm.answer = '質問には普通、はてなマークがあったほうがいいですよね。'
                    return
                }
                vm.answer = '考えています・・・'
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'エラー！APIへの問い合わせに失敗。 '　+ error
                    })
            },
            // ユーザの入力が終わるまで待つ時間をミリ秒で指定する
            500
        )
    }
})