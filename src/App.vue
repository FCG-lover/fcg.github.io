<template>
  <div>
    <div class="nav">
      <router-link to="/">
        <div>关于</div>
      </router-link>
      <router-link to="/work">
        <div>工作经验</div>
      </router-link>
      <router-link to="/show">
        <div>个人数据库展示</div>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
a {
  color: white;
  text-decoration: none;
}
.nav{
  display: flex;
  justify-content: space-between;
  background-color: #0b70bd;
  color: white;
  padding: 30px;
}
</style>
