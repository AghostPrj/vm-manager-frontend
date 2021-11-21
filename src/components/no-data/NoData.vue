<template>
  <div class="no-data">
    <slot name="no-data" />
  </div>
</template>
<script>
export default {
  name: 'NoData'
}
</script>
<style lang="scss" scoped>
.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #A2B2CE;
  text-align: center;
  .no-data-image {
    display: block;
  }
  .no-data-text{
    margin-top: 16px;
    font: normal 400 14px PingFang-SC-Regular, PingFang-SC;
    color: rgba(59, 65, 79, 0.5);
  }
}
</style>
