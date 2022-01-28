<template>
  <div
    class="page-loader"
    v-if="!isloaded"
  >
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false,
    }
  },
  mounted() {
    this.documentReady()
  },
  methods: {
    documentReady() {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          this.isloaded = true
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$colors: #15b148, #28401d, #d76032, #00000d;

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: o;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 250, 250, 1);
  z-index: 999;
}
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }

  &:first-child {
    animation: left 1s infinite;
  }

  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>