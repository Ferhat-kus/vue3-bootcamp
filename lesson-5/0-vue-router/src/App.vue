<template>
  <div class="container">
    <router-link to="/" active-class="active" class="nav-link"
      >Anasayfa
    </router-link>
    <router-link to="/about" active-class="active" class="nav-link">
      Hakkımda
    </router-link>
    <router-link to="/detail/1234" active-class="active" class="nav-link">
      Detay
    </router-link>

    <router-view></router-view>
  </div>
</template>
<style>
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid red;
  color: red;
  margin-right: 5px;
  margin-top: 5px;
  display: inline-block;
}
.active {
  background-color: red;
  color: white;
}
</style>
