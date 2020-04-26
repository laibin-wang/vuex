<template>
  <div class="hello">
    <div>state.count:<b>{{this.$store.state.count}}</b></div>
    <div style="display:flex">
      <div class="pull-left">mapState:</div>
      <div class="pull-left" style="margin-left:10px">
        mapStateCount:<b>{{mapStateCount}}</b><br>
        mapStateCount1:<b>{{mapStateCount1}}</b><br>
        count:<b>{{count}}</b><br>
        countPlusLocalCount:<b>{{countPlusLocalCount}}</b>&nbsp;&nbsp;&nbsp;(state.count + this.localCount)
      </div>
    </div>
    <br>
    <div>getters.getStateCount: <b>{{this.$store.getters.getStateCount}}</b>&nbsp;&nbsp;&nbsp;(state.count + 1)</div>
    <div>getters.getOtherGetters: <b>{{this.$store.getters.getOtherGetters}}</b></div>
    <div>getters.getByNumber(10) <b>{{this.$store.getters.getByNumber(10)}}</b></div>
    <div style="display:flex">
      <div class="pull-left">mapGetters:</div>
      <div class="pull-left" style="margin-left:10px">
        mapGettersCount:<b>{{mapGettersCount}}</b>&nbsp;&nbsp;&nbsp;(state.count + 1)<br>
        mapGettersCount1:<b>{{mapGettersCount1}}</b>
      </div>
    </div>
    <br>
    <div style="display:flex">
      <div class="pull-left">mutations:commit提交:</div>
      <div class="pull-left" style="margin-left:10px">
        <button @click="mutationsAdd">mutationsAdd</button>
        <button @click="mutationsReduce">mutationsReduce</button><br>
        <button @click="mutationsAddNum(10)">mutationsAddNum(10)</button>
        <button @click="mutationsReduceNum(10)">mutationsReduceNum(10)</button>
      </div>
    </div>
    <div style="display:flex">
      <div class="pull-left">mapMutations:</div>
      <div class="pull-left" style="margin-left:10px">
        <button @click="add()">add()</button>
        <button @click="addNum(10)">addNum(10)</button><br>
        <button @click="add1()">add1()</button>
      </div>
    </div>
    <br>
    <div style="display:flex">
      <div class="pull-left">actions:dispatch提交:</div>
      <div class="pull-left" style="margin-left:10px">
        <button @click="actionsAdd">actionsAdd</button>
        <button @click="actionsReduce">actionsReduce</button><br>
        <button @click="actionsAddNum(10)">actionsAddNum(10)</button>
        <button @click="actionsReduceNum(10)">actionsReduceNum(10)</button><br>
        <button @click="actionsAddTimeout">actionsAddTimeout</button>
      </div>
    </div>
    <div style="display:flex">
      <div class="pull-left">mapActions:</div>
      <div class="pull-left" style="margin-left:10px">
        <button @click="addAction()">addAction()</button>
        <button @click="addActionNum(10)">addActionNum(10)</button><br>
        <button @click="add2()">add2()</button>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      localCount: 10
    }
  },
  methods: {
    mutationsAdd () {
      this.$store.commit('add')
    },
    mutationsReduce () {
      this.$store.commit('reduce')
    },
    mutationsAddNum (num) {
      this.$store.commit('addNum', num)
    },
    mutationsReduceNum (num) {
      this.$store.commit('reduceNum', num)
    },
    actionsAdd () {
      this.$store.dispatch('addAction')
    },
    actionsReduce () {
      this.$store.dispatch('reduceAction')
    },
    actionsAddNum (num) {
      this.$store.dispatch('addActionNum', num)
    },
    actionsReduceNum (num) {
      this.$store.dispatch('reduceActionNum', num)
    },
    actionsAddTimeout () {
      this.$store.dispatch('addActionAsync')
    },
    ...mapMutations([
      'add', // 将 this.add() 映射为 this.$store.commit('add')
      'addNum' // 将 this.addNum(num) 映射为 this.$store.commit('addNum', num)
    ]),
    ...mapMutations({
      add1: 'add' // 将 this.add1() 映射为 this.$store.commit('add')
    }),
    ...mapActions([
      'addAction', // 将 this.addAction() 映射为 this.$store.dispatch('addAction')
      'addActionNum' // 将 this.addActionNum(num) 映射为 this.$store.dispatch('addActionNum', num)
    ]),
    ...mapActions({
      add2: 'addAction' // 将 this.add2() 映射为 `this.$store.dispatch('addAction')`
    })
  },
  computed: {
    ...mapState({
      mapStateCount: state => state.count,
      mapStateCount1: 'count', // 等同于 'state => state.count'
      countPlusLocalCount (state) { // 为了获取'this'中'localCount'的值
        return state.count + this.localCount
      }
    }),
    ...mapState(['count']), // 映射 this.count 为 store.state.count
    ...mapGetters(['mapGettersCount']),
    ...mapGetters({
      mapGettersCount1: 'mapGettersCount'
    })
  },
  created () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    line-height: 30px;
  }

  b, button {
    margin-left: 15px;
  }
  .pull-left {
    float: left;
  }
</style>
