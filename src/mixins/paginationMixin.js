// 变量名建议加mixin，页面使用时能快速查找
export default {
  data() {
    return {
      mixinPagination: {
        pageSizes: [5, 10, 20, 30, 40, 50],
        layout: 'total, sizes, prev, pager, next, jumper',
        page: 1,
        limit: 10,
        count: 0
      }
    }
  },
  methods: {
    // 表格序号计算方法
    mixinIndexMethod(index) {
      const curpage = this.mixinPagination.page // 单前页码，具体看组件取值
      const limitpage = this.mixinPagination.limit // 每页条数，具体是组件取值
      return index + 1 + (curpage - 1) * limitpage
    },
    mixinGoBack() {
      this.$router.go('-1')
    },
    // 处理请求参数
    handleParams(form, timeType) {
      const params = {
        pageNum: this.mixinPagination.page,
        pageSize: this.mixinPagination.limit,
        ...form
      }
      if (form.keywordType && form.keyword) {
        params[this.queryForm.keywordType] = this.queryForm.keyword
      }
      if (timeType && form[timeType].length) {
        params.startTime = form[timeType][0]
        params.endTime = form[timeType][1]
      }
      delete params.keywordType
      delete params.keyword
      delete params[timeType]
      return params
    }
  }
}
