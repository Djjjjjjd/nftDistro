<script lang="ts" setup>
 
</script>
<template>
  <header class="container header">
    <div class="logo">
      <a href="/" class="">
        <img src="/public/icon/LOGO.png" alt="LOGO">
      </a>
      <div class="input">
        <div class="input-icon"><FontAwesomeIcon :icon="['fas', 'search']" /></div>
        <input type="text" placeholder="Search" />
      </div>
      </div>
    <nav class="nav">
      <NuxtLink to="/" class="header-link">Explore</NuxtLink>
      <NuxtLink to="/" class="header-link">Trending <i alt="fire"></i></NuxtLink>
      <NuxtLink to="/" class="header-link">FAQ</NuxtLink>
    </nav>
  </header>
</template>


<style>
header{
  padding: 60px 90px;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  display: flex;
  align-items: center;
  gap: 80px;
}
.logo img{
  width: 110px;
}
.input{
  display: block;
  position: relative;
  width: 285px;
  height: 50px;

}
.input> input{
  position: absolute;
  top: 0;
  left: 0;
  width: 82%;
  height: 100%;
  border-radius: 20px;
  padding-left: 50px;
  background-color: var(--milk-white);
    transition: all 0.2s ease-in-out;
}
.input-icon{
  position: absolute;
  z-index: 2;
  top: 14px;
  left: 15px;
  color: var(--grey);
}
nav{
  display: flex;
  align-items: center;
  gap: 50px;
}
.header-link{
  transition: all 0.2s ease-out;
}
.header-link:hover{
  font-weight: 600;
}
</style>