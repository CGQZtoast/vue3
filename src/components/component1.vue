<script setup>
// 自动按需导入
// import { counterStore } from "../stores/counterStore";
const counter = counterStore()
</script>

<template>
  <div>组件1</div>
  <div>
    {{ counter.num }}
  </div>

  <el-button @click="counter.increase"><IEpPlus /></el-button>
  <el-button @click="counter.decrease"><IEpMinus /></el-button>

  <el-button>
    <el-icon class="is-loading">
      <IEpLoading />
    </el-icon>
  </el-button>
</template>