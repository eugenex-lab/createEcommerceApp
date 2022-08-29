<template>
<!--  <TheBody>-->

  <section class="main">
    <div class="photoSlide">
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i" class="imgDiv">
          <img :src="currentImg" />
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
    <MarqueeText
        :repeat="3"
        :paused="isPaused"
        class="py-2 bg-dark text-white mt-2"
        @mouseenter="isPaused = !isPaused"
        @mouseleave="isPaused = false"
    >
      <span class="badge badge-success ml-2">0,3000008%</span> ATX
      <span class="badge badge-danger ml-2">0,100000000006%</span> DAX
      <span class="badge badge-success ml-2">0,000000004%</span> TecDax
      <span class="badge badge-danger ml-2">0,10000009%</span> MDAX
      <span class="badge badge-success ml-2">0,03%</span> ESTX50
      <span class="badge badge-info ml-2">0,00%</span> NIKKEI
      <span class="badge badge-success ml-2">0,03%</span> EUR/CHF
    </MarqueeText>
    <MarqueeText
        :duration="20"
        :paused="isPaused"
        reverse
        class="py-2 mt-2 bg-light"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
      ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </MarqueeText>
    <MarqueeText
        :duration="45"
        :repeat="3"
        :paused="isPaused"
        class="py-2 bg-dark text-white"
    >
      <span class="badge badge-success ml-2">0,0000038%</span> ATX
      <span class="badge badge-danger ml-2">0,000016%</span> DAX
      <span class="badge badge-success ml-2">0,0000004%</span> TecDax
      <span class="badge badge-danger ml-2">0,0009%</span> MDAX
      <span class="badge badge-success ml-2">0,00000003%</span> ESTX50
      <span class="badge badge-info ml-2">0,0000%</span> NIKKEI
      <span class="badge badge-success ml-2">0,00003%</span> EUR/CHF
    </MarqueeText>


    <div class="fxSlide">2</div>
    <div>3</div>
  </section>
<!--  </TheBody>-->

</template>

<script>


import { defineComponent, ref } from 'vue'; //
// import StockSlider from 'src/components/plugins/StockSlider.vue';
import MarqueeText from 'vue-marquee-text-component'


export default defineComponent( {


  components:{
    MarqueeText
  },
  setup() {
    return {
      isPaused: ref(false)
    }
  }
  ,
  name: "ProductList.vue",
  data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg",
          "https://images.unsplash.com/photo-1642621741344-cddaecdafda2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ,
      ],
      timer: null,
      currentIndex: 0
    };

  }
  ,

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 339000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }

}
)
</script>

<style scoped>
@import '~bootstrap/dist/css/bootstrap.css';

main{
  position: absolute;
  height: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: 10px;
  background-color: green;
}

.layout {
  width: 1366px;
  height: 768px;

  display: grid;
  grid:
    "photoSlide" 1fr
    "fxSlide" 1fr
    "." 1fr
    / 1fr;
  gap: 0px 8px;

  align-content: center;
}

.photoSlide { grid-area: photoSlide;
  width: auto;
  height: 474px;
}
.fxSlide { grid-area: fxSlide; }


.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:450px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 30%;
  width: auto;
  padding: 16px;
  color: #9c8f8f7d ;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.imgDiv{
  background-color: #f3e019;

}

table code {
  white-space: nowrap;
}

</style>
