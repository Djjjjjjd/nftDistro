<script setup></script>
<template>
  <section class="featuredCollectionsItems">
    <div class="colectionWrapper">
      <div class="colectionImg">
        <img src="/public/img/collections.png" alt="">
      </div>
      <div class="colectionTitle">
        <div class="titleAvastar">
          <p><img src="/public/icon/avatar/elips.png" alt="">Perperzon</p>
        </div>
        <div class="titleAvastaL">
          <h3>ExBoot #1</h3>
          <p>description</p>
          <p>We would like to present you The Exboot 3D - Watching you~</p>
        </div>
        <div class="titlePrice">
          <div class="currentBid">
            <p>Current Bid</p>
            <p><img src="/public/icon/ethereum.png" alt=""> 3.421</p>
          </div>
          <div class="endIn">
            <p>End In</p>
            <p>1 hr 12m 14s</p>
          </div>
        </div>
        <div class="titleBtn">
          <div class="btnPink">
            <FontAwesomeIcon :icon="['fas', 'wallet']" class="btn-icons"/>
            <button class="">connect wallet</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
  .featuredCollectionsItems{
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 10px;
    width: 600px;
  }
  .colectionWrapper{
    padding: 20px 20px;
    display: flex;
    gap: 30px;
  }
  .colectionImg{
    width: 50%;
  }
  .colectionImg img{
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
  .colectionTitle{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .titleAvastar p{
    display: flex;
    align-items: center;
    gap: 5%;
  }
  .titleBtn{
    display: block;
  }
  .btnPink{
    position: relative;
  }
  .btnPink:hover{
    transform: scale(102%);
    transition: all 0.2s ease-in-out; 
  }
  .btn-icons{
    position: absolute;
    z-index: 2;
    top: 1em;
    left: 1em;
    color: var(--white);
    font-size: 20px;
  }
  .btnPink button{
    position: absolute;
    padding: 1em 3em;
    color: var(--white);
    background: var(--pink-gradient);
    border-radius: 20px;
    cursor: pointer;
    
  }
</style>