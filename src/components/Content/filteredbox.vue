<template>
  <div class="filteredBox" v-show="tagArr.length === 0 ? false : true">
    <span 
    v-for="(tag, index) in tagArr" 
    :key="index" 
    class="filterTag" 
    :class="tag.name.length > 9 ? 'filterTag-2' : ''">
      {{tag.name}}
      <i @click="deleteTag(index)" class="el-icon-close filterTag-icon"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'filteredBox2',
    props: ['tagArr'],
    data() {
      return {
        tagVisible: true
      }
    },
    methods: {
      deleteTag(index) {
        this.tagArr.splice(index, 1);
        this.$emit('deleteTag', this.tagArr);
      }
    }
  }
</script>

<style lang="scss">
  .filteredBox {
    width: 100%;
    min-width: 1366px;
    background-color: #f8f9f9;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 4px;
    text-align: center;
    .filterTag {
      position: relative;
      width: calc((100% - 72px)/8);
      font-size: 14px;
      color: #333;
      background-color: #ddd;
      height: 32px;
      line-height: 32px;
      margin: 4px;
    }
    .filterTag-2 {
      width: calc((100% - 72px)/4 + 8px);
    }
    .filterTag-icon {
      border-radius: 50%;
      position: absolute;
      cursor: pointer;
      font-size: 12px;
      height: 16px;
      width: 16px;
      line-height: 16px;
      right: 4px;
      top: 8px;
      color: #999;
      &:hover {
        background-color: #409EFF;
        color: #fff;
      }
    }
  }
</style>
