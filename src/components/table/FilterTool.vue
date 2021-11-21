<template>
  <div class="filter-tool-container">
    <el-form :model="filterForm" ref="filterForm">
      <slot />
      <el-button
        type="primary"
        v-if="showSearch"
        plain
        @click="search"
        class="search-btn"
        size="medium"
      >
        搜索
      </el-button>
      <el-button
        type="primary"
        v-if="showReset"
        plain
        @click="reset"
        class="reset-btn"
        size="medium"
      >
        重置
      </el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'FilterTool',
  props: {
    form: { type: Object, default: () => {} },
    showSearch: { type: Boolean, default: true },
    showReset: { type: Boolean, default: true }
  },
  data() {
    return {
      filterForm: {}
    }
  },
  watch: {
    form(cur, old) {
      if (cur) this.filterForm = { ...cur }
    }
  },
  methods: {
    filter() {
      this.$emit('filter', true)
    },
    reset() {
      this.$emit('reset', true)
    },
    search() {
      this.$emit('search', 1)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-form {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  .el-form-item {
    display: flex;
    margin-bottom: 20px;
    margin-right: 30px;
    margin-bottom: 20px;
    float: left;
  }
  .el-form-item:last-of-type {
    margin-right: 20px;
  }
  .el-input,
  .el-select {
    width: 175px;
    margin-right: 0;
  }
  .multiple-select {
    .el-select__tags {
      flex-wrap: unset;
      overflow: auto;
    }
  }
  .input-with-select {
    width: 320px;
    .el-select,
    .el-input {
      width: 105px;
    }
    .el-input-group__prepend {
      padding-left: 15px;
      padding-right: 0;
    }
  }
  .keyword-input {
    width: 280px !important;
  }
  .el-input__inner,
  .el-range-input {
    background: transparent;
  }
  .search-btn,
  .reset-btn {
    margin-left: 0px;
    margin-bottom: 20px;
    // background: #f5f6fa;
    background: transparent;
    color: $--color-primary;
    float: left;
    height: 40px;
  }
  .reset-btn {
    margin-left: 10px;
  }
  .search-btn:hover,
  .reset-btn:hover {
    background: $--color-primary;
    color: #fff;
  }
  .export-btn {
    position: absolute;
    right: 0;
    top: 0;
  }
  .el-form-item__label,
  .el-input__inner {
    color: #3b414f;
  }
  .el-input__inner {
    border-color: #dddfe5;
  }
}
</style>
