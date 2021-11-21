<template>
  <div class="g-footer pagination-container">
    <el-pagination
      background
      :current-page="pagination.page"
      :page-size="pagination.limit"
      :page-sizes="defaultPageSizes"
      :layout="defaultPaginationLayout"
      :total="pagination.count"
      :pager-count='pagination.pagerCount'
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import mixin from '@/mixins/paginationMixin'
export default {
  mixins: [mixin],
  name: 'Pagination',
  props: ['pagination'],
  data() {
    return {
      defaultPageSizes: [],
      defaultPaginationLayout: ''
    }
  },
  created() {
    this.defaultPageSizes = this.mixinPagination.pageSizes
    this.defaultPaginationLayout = this.mixinPagination.layout
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('changeLimit', val)
    },
    handleCurrentChange(val) {
      this.$emit('changePage', val)
    }
  }
}
</script>
<style lang="scss" scoped>
  .pagination-container {
    position: absolute;
    bottom: 40px;
    right: 40px;
    .el-pagination {
      padding: 2px 0 2px 5px;
      text-align: center;
      margin-top: 40px;
      .el-select {
        margin-top: -2px;
      }
    }
  }
</style>
