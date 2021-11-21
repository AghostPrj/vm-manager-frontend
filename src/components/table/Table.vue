<template>
  <div class="cd-table-container">
    <filter-tool
      v-if="form"
      id="filter-tool"
      ref="filterTool"
      :form="form"
      :showSearch="showSearch"
      @search="search"
      @reset="reset"
    >
      <slot name="filter-tool" />
    </filter-tool>
    <div v-if="showOperation" class="operation-box clearfix">
      <slot name="operation-box" />
      <el-button type="primary" plain @click="refresh()">刷新</el-button>
    </div>
    <slot name="statistics" />
    <div class="table-contain">
      <slot name="data-tip" />
      <el-table
        v-loading="loading"
        ref="table"
        :row-key="rowKey"
        :data="data"
        :header-cell-style="{ color: '#3B414F', background:'#F3F7F2', fontWeight: 'bold'}"
        stripe
        @selection-change="selectionChange"
        border
      >
        <bm-no-data slot="empty">
          <template slot="no-data">
            <span class="no-data-icon" />
            <span class="no-data-text">暂无记录</span>
          </template>
        </bm-no-data>
        <el-table-column
          v-for="(item, i) in columns"
          :key="i"
          :prop="item.key"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
        >
          <template v-slot="{ row }">
            <span>{{ row[item.key] || '--' }}</span>
          </template>
        </el-table-column>
        <slot />
        <el-table-column v-if="columns.length > 0" label="操作">
          <slot name="operation" />
        </el-table-column>
      </el-table>
      <bm-pagination
        v-if="pagination"
        class="pagination-container"
        :pagination="pagination"
        @changepage="changePage"
        @changelimit="changeLimit"
      />
    </div>
    <slot name="pagination" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'Table',
  /**
   * 参数说明
   * height table的高度 固定表头
   * columns 表头
   * -- label
   * -- key
   * -- width
   * data 表格要显示的数据
   * pagination 分页
   * showSearch 默认展示搜索
   */
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    data: {
      type: Array,
      required: false,
      default: () => []
    },
    columns: {
      type: Array,
      required: false,
      default: () => []
    },
    form: {
      type: Object,
      required: false,
      default: () => {}
    },
    pagination: {
      type: Object,
      required: false,
      default: () => {}
    },
    showSearch: { type: Boolean, default: true },
    rowKey: { type: String, default: 'id' },
    showOperation: { type: Boolean, default: true }
  },
  components: {
    'filter-tool': () => import('./FilterTool')
  },
  methods: {
    search(page) {
      this.$emit('searchPage', page)
    },
    reset() {
      this.$emit('reset')
    },
    changePage(page) {
      this.$emit('changePage', page)
    },
    changeLimit(limit) {
      this.$emit('changeLimit', limit)
    },
    selectionChange(selection) {
      this.$emit('selectionChange', selection)
    },
    // 返回上一页
    goBack() {
      this.$router.go(-1)
    },
    // 刷新
    refresh() {
      // this.$router.go(0)
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/table.scss';
</style>
