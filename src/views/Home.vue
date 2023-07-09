<template>
  <main>
    <div class="mb-5">
      <div class="hero position-relative">
        <div class="hero-bg">
          <!-- <img src="../assets/images/dscg1722_cut.jpg" alt=""> -->
          <picture>
            <source
              media="(min-width: 2000px)"
              srcset="../assets/images/hero_4k.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 2000px)"
              srcset="../assets/images/hero_4k.jpg"
              type="image/jpg"
            />
            <source
              media="(min-width: 960px)"
              srcset="../assets/images/hero_regular.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 960px)"
              srcset="../assets/images/hero_regular.jpg"
              type="image/jpg"
            />
            <source
              media="(max-width: 960px)"
              srcset="../assets/images/hero_mobile.jpg"
            />
            <img src="../assets/images/hero_regular.jpg" alt="" />
          </picture>
        </div>
        <div class="hero-textbox">
          <div class="hero-textbox-container">
            <h1 class="">Watercolor Artist Based In Taiwan</h1>
            <p>
              To see the world. Things dangerous to come to. To see behind
              walls. Draw closer. To find each other. And to feel. That is the
              purpose of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 100vh;
  &-bg {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-textbox {
    position: absolute;
    top: 0;
    color: #fff;
    &-container {
      width: 100%;
    }
    h1 {
      font-family: Tahoma, Verdana, Segoe, sans-serif;
      font-weight: 900;
    }
  }
}
@media (max-width: 576px) {
  .hero {
    &-textbox {
      &-container {
        width: 100%;
        padding: 2rem;
      }
      h1 {
        font-size: 2rem;
      }
    }
  }
}
@media (min-width: 576px) {
  .hero {
    &-textbox {
      &-container {
        width: 100%;
        padding: 3rem;
      }
      h1 {
        font-size: 2.5rem;
      }
    }
  }
}
@media (min-width: 768px) {
  .hero {
    &-textbox {
      &-container {
        width: 75%;
        padding: 5rem;
      }
      h1 {
        font-size: 3.5rem;
      }
    }
  }
}
@media (min-width: 996px) {
  .hero {
    &-textbox {
      &-container {
        width: 75%;
        padding: 5rem;
      }
      h1 {
        font-size: 3.5rem;
      }
    }
  }
}
@media (min-width: 1200px) {
  .hero {
    &-textbox {
      &-container {
        width: 60%;
        padding: 5rem;
      }
      h1 {
        font-size: 4rem;
      }
    }
  }
}
@media (min-width: 1400px) {
  .hero {
    &-textbox {
      &-container {
        width: 50%;
        padding: 6rem;
      }
      h1 {
        font-size: 5rem;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  setup() {},
};
</script>
