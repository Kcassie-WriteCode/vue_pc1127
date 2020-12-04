<template>
  <div class="pagination">
    <button
      @click="setCurrentPage(myCurrentPage - 1)"
      :disabled="myCurrentPage === 1"
    >
      上一页
    </button>
    <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnsCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button
      v-show="totalPages > 1"
      :class="{ active: myCurrentPage === totalPages }"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      @click="setCurrentPage(myCurrentPage + 1)"
      :disabled="myCurrentPage === totalPages"
    >
      下一页
    </button>
    <button>总数:{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageSize: {
      type: Number,
      default: 5,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pagerCount: {
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 == 1;
      },
      default: 7,
    },
  },
  data() {
    return {
      //currentpage随着点击页码会改变
      // 为了方便修改myCurrentPage，定义data数据
      // 原因：props数据只读不能修改
      myCurrentPage: this.currentPage,
    };
  },
  watch: {
    // 让每次页码发生变化加载新数据
    myCurrentPage(newVal) {
      //this.$listeners.currentChange(newVal);
      this.$emit("current-change", newVal);
    },
    // 当外面页面发生变化，里面页面也要变化
    currentPage(newVal) {
      this.myCurrentPage = newVal;
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      //收集所有参与计算的参数
      const { totalPages, pagerCount, myCurrentPage } = this;
      //中间需要的button数
      const count = pagerCount - 2;
      //myCurrentPage的左右两边各需的button数
      const halfCount = Math.floor(count / 2);
      //中间开始的页数
      // 1...3 4 [5] 6 7...10
      let start = myCurrentPage - halfCount;
      //myCurrentPage在右边  start最大只能为5，要展示7个// 1 ... 5 6 7 8 [9] 10
      if (myCurrentPage >= totalPages - halfCount) {
        start = totalPages - count;
      } else {
        start = myCurrentPage - halfCount;
      }
      // 1 [2] 3 4 5 6 ...10 // 1 [2] 3
      if (start <= 1) {
        start = 2;
      }
      // [1] --> 如果start大于总页数，不显示
      //中间结束的页数
      let end = start + count - 1;
      // 1 [2] 3
      if (end >= totalPages) {
        end = totalPages - 1;
      }
      return {
        start,
        end,
      };
    },
    // 需要遍历的按钮数量
    mapBtnsCount() {
      // [1] --> 如果start大于总页数，不显示 totalPages=1,start=2,end=0,
      //startEnd.end - startEnd.start + 1
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
}
.pagination button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;
}
.pagination .active {
  //cursor: not-allowed;
  background-color: #409eff;
  color: #fff;
}
</style>
