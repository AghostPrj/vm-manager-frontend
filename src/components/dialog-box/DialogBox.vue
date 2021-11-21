<template>
  <el-dialog
    :title="title"
    :visible="visible"
    :width="dialogWidth"
    :closeOnClickModal="false"
    @open="openDialog"
    @close="closeDialog"
  >
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      :label-position="labelPosition"
      :label-width="labelWidth"
      :class="className?className:''"
    >
      <slot name="form-content" />
    </el-form>
    <slot name="other-content" />
    <span slot="footer" class="dialog-footer">
      <slot name="footer-btns" />
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogBox',
  props: {
    title: {
      type: String,
      default: null,
      required: true
    },
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    form: {
      type: Object,
      default: null
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    dialogWidth: {
      type: [String, Number],
      default: '80%'
    },
    labelWidth: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: ''
    },
    rules: {
      type: Object,
      default: null
    }
  },
  methods: {
    openDialog() {
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
      this.$emit('handle-open')
    },
    closeDialog() {
      this.$emit('handle-close')
    },
    validate(valid) {
      return this.$refs.form.validate(valid)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-dialog {
  .el-dialog__body {
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    .el-input,
    .el-textarea,
    .el-date-editor {
      width: 100%
    }
    .el-textarea__inner{
      min-height: 70px !important;
    }
  }
  .el-input__suffix {
    right: 10px;
    color: #3b414f;
  }
  .el-dialog__footer {
    padding: 10px;
    .el-button {
      padding: 5px 15px;
      height: 32px;
      font: normal 400 14px PingFangSC-Regular, PingFang SC;
      &--default:focus, &--default:hover {
        border-color: $mainText;
        background: #FFF;
        color: $mainText;
      }
    }
    .el-button--default {
      border-color: #d9d9d9;
    }
  }
  .top-tips {
    font-size: 12px;
    font-weight: 500;
    color: #959aac;
    line-height: 22px;
    margin-bottom: 8px;
  }
}

// 表格明细字体颜色
/deep/.el-form.detail-form {
  .el-form-item{
    margin-bottom: 0;
  }
  .el-form-item__label {
    color: #3b414f;
    font-weight: normal;
  }
  .el-form-item__content {
    color: #3b414f;
  }
}
// 表格分左右两边
/deep/.el-form.flex-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .el-form-item {
    width: 50%;
  }
  .width-row {
    width: 100%;
  }
  .score-row {
    .score-num {
      color: #679c56;
      font-size: 20px;
      font-weight: bold;
    }
    .score-list {
      color: #3b414f;
      font-size: 12px;
      line-height: 25px;
      height: 264px;

      .score-list-content {
        padding-right: 20px;
      }
    }
  }
}
</style>
