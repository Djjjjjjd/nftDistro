<script lang="ts" setup>
 
</script>
<template>
  <header class="container">
    <div class="header">
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
    </div>
  </header>
</template>


<style>
header{
  padding: 60px 90px;
}
.header{
  display: flex;
  align-items: center;
}
.logo{
  display: flex;
  align-items: center;
  gap: 40%;
}
.logo img{
  width: 200%;
}
.input{
  display: block;
  position: relative;
  width: 600px;
  height: 60px;
}
.input> input{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding-left: 50px;
  background-color: var(--milk-white);
  transition: all 0.2s ease-in-out;
}
.input-icon{
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 5%;
  color: var(--grey);
}
.nav{
  width:500px;
  display: flex;
  align-items: center;
  gap: 25%;
  margin-left: auto;
}
.header-link{
  font-size: 1.2em;
  transition: all 0.2s ease-out;
}
.header-link:hover{
  font-weight: 600;
}
</style>