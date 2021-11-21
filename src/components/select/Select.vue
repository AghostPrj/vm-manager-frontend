<template>
  <el-select
    v-model="modelValue"
    :placeholder="placeholder"
    :clearable="clearable"
    :multiple="multiple"
    :disabled="disabled"
    filterable
    @change="selectChange"
    remove-tag
  >
    <el-option
      v-for="(item) in selectList"
      :key="item.value!=null?item.value : item.val"
      :value="item.value!=null?item.value : item.val"
      :label="item.label"
    />
  </el-select>
</template>
<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: [String, Number, Array],
      required: false,
      default: ''
    },
    // 选项列表
    list: {
      type: Array,
      required: false,
      default: () => []
    },
    // vuex 对应state key
    listKey: {
      type: String,
      required: false,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false,
      required: false
    },
    clearable: {
      type: Boolean,
      default: false,
      required: false
    },
    allOption: {
      type: Boolean,
      default: false,
      required: false
    },
    placeholder: {
      type: String,
      required: false,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectList: function() {
      if (this.list && this.list.length > 0) {
        return this.list
      } else {
        return this.$store.getters[this.listKey]
      }
    }
  },
  created() {},
  watch: {
    value(newName, oldName) {
      this.modelValue = newName
    }
  },
  data() {
    return {
      modelValue: this.value
    }
  },
  methods: {
    selectChange(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
