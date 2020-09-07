<template>
  <div class="content">
    <big-data-container  :resize="true">
      <div>
        这个是页面内容
      </div>
    </big-data-container>
  </div>

</template>

<script>
export default {
  name: "bigdata"
}
</script>

<style scoped>
.content{
  width: 100vw;
  height: 100vh;
}
div{
  box-sizing: border-box;
}
</style>
