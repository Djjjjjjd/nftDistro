<script lang="ts" setup></script>
<template>
  <!-- wrapper -->
  <div class="container">
    <!-- sections -->
    <section class="hero">
      <div class="heroText">
        <p class="subHead">WEB 3 NON-FUNGIBLE TOKENS</p>
        <h1>
          Unlock Unique Digital Ownership with NFTs
        </h1>
        <p>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
        <div class="btn">
          <FontAwesomeIcon :icon="['fas', 'wallet']" class="btn-icon"/>
          <button >connect wallet</button>
        </div>
      </div>
      <div class="heroImage">
        <img src="/public/img/HeroImg.png" alt="heroImg" class="heroImg" >
        <img src="/public/img/Ball1.png" alt="ball1" class="heroBallF">
        <img src="/public/img/Ball2.png" alt="ball2" class="heroBallS">
        <img src="/public/img/Table.png" alt="table" class="heroTable">
      </div>
    </section>
  </div>
</template>


<style>
  .hero{
    display: flex;
    justify-content: space-between;
    padding: 20px 0 0 0;
  }
  .heroText{
    display: flex;
    flex-direction: column;
    max-width: 625px;
  }
  .heroText >h1{
    font-weight: 400;
    font-size: 70px;
    font-family: var(--accent-font);
    line-height: 84px;
  }
  .heroText >p{
    font-weight: 400;
    color: var(--grey);
    font-size: 20px;
    line-height: 42px;
    max-width: 580px;
  }
  .btn{
    position: relative;
    margin-top: 55px;
    transition: all 0.2s ease-out;
  }
  .btn-icon{
    position: absolute;
    top: 25px;
    left: 50px;
    color: var(--white);
  }
  .btn >button{
    background: var(--pink-gradient);
    width: 280px;
    height: 65px;
    border-radius: 20px;
    color: var(--white);
    text-transform: capitalize;
    cursor: pointer;
  }
  .btn:hover{
    transform: scale(101%);
  }
  .heroImage{
    width: 500px;
    position: relative;
  }
  .heroImg{
    position: absolute;
    top: 30px;
    right: 40px;
  }
  .heroBallF{
    position: absolute;
    bottom: -45px;
    left: -150px;
    filter: drop-shadow(var(--shadow));
  }
  .heroBallS{
    position: absolute;
    top: 0;
    right: 0;
    filter: drop-shadow(var(--shadow));
  }
  .heroTable{
    position: absolute;
    top: 65px;
    left: -155px;
  }
</style>