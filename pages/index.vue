<script lang="ts" setup></script>
<template>
  <!-- wrapper -->
    <!-- sections -->
    <section class="">
      <div class="container hero">
        <div class="heroText">
          <p class="subHead">WEB 3 NON-FUNGIBLE TOKENS</p>
          <h1>
            Unlock Unique Digital Ownership with NFTs
          </h1>
          <p>Experience the Revolutionary World of Non-Fungible<br>Tokens on Our Exclusive NFT Marketplace</p>
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
      </div>
    </section>
    <section class="trendingArt">
      <div class="container">
        <div class="trendingArtTitle">
          <h2>Trending Art<i><img src="/public/icon/fire.png" alt=""></i></h2>
          <a href="">discover more</a>
        </div>
        <div class="trendingArtCrards"></div>
      </div>
    </section>
</template>


<style>
  .hero{
    display: flex;
    justify-content: space-between;
    padding: 20px 0 0 0;
    height: 100vh;
  }
  .heroText{
    display: flex;
    flex-direction: column;
    gap: 3%;
    width: 50%;
    margin-top: 10%;
  }
  .heroText >h1{
    font-weight: 400;
    font-size: 6em;
    font-family: var(--accent-font);
    line-height: 1.5;
  }
  .heroText >p{
    font-weight: 400;
    font-size: 1.2em;
    color: var(--grey);
    line-height: 2;
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
    width: 50%;
    position: relative;
  }
  .heroImg{
    width: 90%;
    position: absolute;
    top: 10%;
    right: 5%;
  }
  .heroBallF{
    position: absolute;
    width: 25%;
    bottom: 20%;
    left: -10%;
    filter: drop-shadow(var(--shadow));
  }
  .heroBallS{
    position: absolute;
    width: 10%;
    top: 7%;
    right: 0;
    filter: drop-shadow(var(--shadow));
  }
  .heroTable{
    position: absolute;
    width: 40%;
    top: 13%;
    left: -10%;
  }
  /* Trending Art */
  .trendingArt{
    height: 100vh;
    color: var(--white);
  }
  .trendingArtTitle{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4em 0 0;
  }
  .trendingArtTitle h2{
    font-size: 3em;
  }
  .trendingArtTitle a{
    text-transform: capitalize;
  }
</style>