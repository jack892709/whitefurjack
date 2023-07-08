<template>
  <!-- <div>
        <h1>This is a header</h1>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/sketchbooks">Sketchbooks</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/comission">Comission</router-link> |
        <router-link to="/contact">Contact</router-link>
    </div> -->

  <CartPopup
    :is-cart-active="isCartActive"
    @closeCart="isCartActive=false"
  />
  <!-- <header> -->
  <div
    class="nav-mobile d-lg-none"
    v-show="isMenuActive"
  >
    <div class="nav-mobile-container px-3 pt-5 pb-3 fade-y">
      <div class="h-100 w-100 hidden-scrollbar">
        <div class="container-fluid h-100">
          <div class="row h-100">
            <div class="col-md-1"></div>
            <div class="col-md-7 h-md-100 pb-4">
              <div class="w-100 h-100 hidden-scrollbar">
                <div class="nav-mobile-item">
                  <router-link
                    to="/about"
                    class="fs-sm-adaptive"
                    @click="toggleMenu"
                  >
                    <span>About</span>
                  </router-link>
                </div>
                <div class="nav-mobile-item dropdown">
                  <div class="d-flex">
                    <router-link
                      to="/sketchbooks"
                      class="fs-sm-adaptive"
                      @click="toggleMenu"
                    >
                      <span>Sketchbooks</span>
                    </router-link>
                    <button
                      type="button"
                      class="btn my-dropdown-toggle toggle-white"
                      @click="toggleSketchbookList"
                    ></button>
                  </div>
                  <div
                    class="my-dropdown-menu"
                    v-show="isSketchbookListOpen"
                  >
                    <div class="d-flex flex-column">
                      <div class="ps-4">
                        <router-link
                          to="/sketchbooks/outdoors"
                          class="fs-sm-adaptive"
                          @click="toggleMenu"
                        >
                          <span>Outdoors</span>
                        </router-link>
                      </div>
                      <div class="ps-4">
                        <router-link
                          to="/sketchbooks/cafe"
                          class="fs-sm-adaptive"
                          @click="toggleMenu"
                        >
                          <span>Café</span></router-link>
                      </div>
                      <div class="ps-4">
                        <router-link
                          to="/sketchbooks/portrait"
                          class="fs-sm-adaptive"
                          @click="toggleMenu"
                        >
                          <span>Portrait</span></router-link>
                      </div>
                      <div class="ps-4">
                        <router-link
                          to="/sketchbooks/motorcycle"
                          class="fs-sm-adaptive"
                          @click="toggleMenu"
                        >
                          <span>Motorcycle</span></router-link>
                      </div>
                      <div class="ps-4">
                        <router-link
                          to="/sketchbooks/urban"
                          class="fs-sm-adaptive"
                          @click="toggleMenu"
                        >
                          <span>Urban</span></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nav-mobile-item">
                  <router-link
                    to="/shop"
                    class="fs-sm-adaptive"
                    @click="toggleMenu"
                  >
                    <span>Shop</span>
                  </router-link>
                </div>
                <div class="nav-mobile-item">
                  <router-link
                    to="/commission"
                    class="fs-sm-adaptive"
                    @click="toggleMenu"
                  >
                    <span>Commission</span>
                  </router-link>
                </div>
                <div class="nav-mobile-item">
                  <router-link
                    to="/contact"
                    class="fs-sm-adaptive"
                    @click="toggleMenu"
                  >
                    <span>Contact</span>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-md-3 py-5 my-md-auto">
              <div class="d-flex flex-column fs-5">
                <div class="py-1">
                  <span class=" text-uppercase">#whitefurjack</span>
                </div>
                <div class="py-1">
                  <span class=" text-uppercase">#urbansketcher</span>
                </div>
                <div class="py-1">
                  <span class=" text-uppercase">#hiking</span>
                </div>
              </div>
              <div class="inline-flex fs-5 py-3">
                <a
                  href="https://www.instagram.com/whitefurjack"
                  target="_blank"
                  class="d-inline-flex align-items-center"
                >
                  <div class="nav-desktop-icon ms-0 icon-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                      />
                    </svg>
                  </div>
                  <span class="ps-3 text-uppercase">instagram</span>
                </a>
              </div>
              <div class="py-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="nav-desktop"
    :class="{ 'bg-transparent': isMenuActive }"
  >
    <div class="px-3 px-md-4">
      <div class="py-md-1">
        <div class="d-flex justify-content-start align-items-center">
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->
          <router-link
            to="/"
            class="py-1"
          >
            <img
              src="../assets/whitefurjack_handwriting.png"
              alt=""
              class="logo"
              :class="{ inverted: isMenuActive }"
              @click="resetMenuActive"
            />
          </router-link>
          <div
            class="d-flex"
            id="navbarNavDropdown"
          >
            <ul class="mynavbar d-none d-lg-flex">
              <li class="nav-desktop-item">
                <router-link
                  to="/about"
                  class="nav-desktop-link"
                >
                  <span>About</span>
                </router-link>
              </li>
              <li class="nav-desktop-item">
                <router-link
                  to="/sketchbooks"
                  class="nav-desktop-link dropdown"
                >
                  <span>Sketchbooks</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </router-link>
                <div class="nav-hover-menu">
                  <ul class="nav-dropdown-list bg-white shadow">
                    <li class="nav-dropdown-item">
                      <router-link to="/sketchbooks/outdoors">
                        <span>Outdoors</span>
                      </router-link>
                    </li>
                    <li class="nav-dropdown-item">
                      <router-link to="/sketchbooks/cafe">
                        <span>Café</span>
                      </router-link>
                    </li>
                    <li class="nav-dropdown-item">
                      <router-link to="/sketchbooks/portrait">
                        <span>Portrait</span>
                      </router-link>
                    </li>
                    <li class="nav-dropdown-item">
                      <router-link to="/sketchbooks/motorcycle">
                        <span>Motorcycle</span>
                      </router-link>
                    </li>
                    <li class="nav-dropdown-item">
                      <router-link to="/sketchbooks/urban">
                        <span>Urban</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-desktop-item">
                <router-link
                  to="/shop"
                  class="nav-desktop-link"
                ><span>Shop</span></router-link>
              </li>
              <li class="nav-desktop-item">
                <router-link
                  to="/commission"
                  class="nav-desktop-link"
                ><span>Commission</span></router-link>
              </li>
              <li class="nav-desktop-item">
                <router-link
                  to="/contact"
                  class="nav-desktop-link"
                ><span>Contact</span></router-link>
              </li>
            </ul>
          </div>
          <div class="d-none d-lg-flex ms-auto nav-desktop-iconbox">
            <div class="d-flex align-items-center">
              <div class="nav-desktop-icon icon-dark">
                <a
                  href="https://www.instagram.com/whitefurjack"
                  target="_blank"
                  spaceholder="instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="nav-desktop-icon icon-dark position-relative"
                @click="isCartActive=true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-custom"
                  v-if="tobuyCount>0"
                >
                  {{tobuyCount}}
                  <span class="visually-hidden">number of items in cart</span>
                </span>
              </div>
              <div class="nav-desktop-icon icon-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="toggle-button ms-auto d-lg-none"
            :class="{ active: isMenuActive }"
            @click="toggleMenu"
          >
            <div class="menu-bar-top"></div>
            <div class="menu-bar-middle"></div>
            <div class="menu-bar-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </header> -->
</template>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 99;
}
.bg-custom {
  background-color: #2f2f2f;
  opacity: 0.7;
}
.nav-mobile {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  // background-color: #6892b5;
  background-color: #2f2f2f;
  color: #fff;
  transition: all 0.2s;
  a {
    color: #fff;
    text-decoration: none;
  }
  .nav-mobile-container {
    height: 100%;
    // height: calc(100vh - 4rem);
  }
  .nav-mobile-item {
    font-size: calc(2rem + 1.5vw);
    font-weight: 700;
    line-height: 1.6;
    margin-bottom: 0.25rem;
    :hover {
      color: #8a8a8a;
    }
  }
}
@media (max-width: 480px) {
  .fs-sm-adaptive {
    display: block;
    font-size: 10vw;
    span {
      font-size: 1em;
    }
  }
}
.my-dropdown-toggle {
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  &::after {
    display: inline-block;
    margin-left: 0.255em;
    /* vertical-align: .255em; */
    content: '';
    border-top: 0.5em solid;
    border-right: 0.5em solid transparent;
    border-bottom: 0;
    border-left: 0.5em solid transparent;
  }
}
.toggle-white {
  color: #fff;
  :hover {
    color: #8a8a8a;
  }
}
.hidden-scrollbar {
  // height: 600px; //temp
  /* hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
}
@media (min-width: 768px) {
  .h-md-100 {
    height: 100%;
  }
}
.fade-e {
  &::after {
    content: '';
    position: fixed;
    pointer-events: none;
    left: 0;
    width: 100%;
    height: 8rem;
    bottom: 4rem;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#2f2f2f),
      to(transparent)
    );
    background: -webkit-linear-gradient(bottom, #2f2f2f 10%, #2f2f2f 100%);
    background: -o-linear-gradient(bottom, #2f2f2f 10%, #2f2f2f 100%);
    background: linear-gradient(to top, #2f2f2f 10%, transparent 100%);
  }
}
.fade-y {
  position: relative;
  > div {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    width: 100%;
    height: 100%;
    bottom: 0rem;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#2f2f2f),
      to(transparent)
    );
    // background: -webkit-linear-gradient(bottom, #2f2f2f 10%, #2f2f2f 100%);
    // background: -o-linear-gradient(bottom, #2f2f2f 10%, #2f2f2f 100%);
    background: linear-gradient(
      to top,
      #2f2f2f 10%,
      transparent 16%,
      transparent 84%,
      #2f2f2f 90%
    );
  }
}

.logo {
  position: relative;
  max-height: 45px;
  max-width: 100%;
  transition: 0.3s ease filter;
  &.inverted {
    filter: invert(100%);
  }
}
.nav-desktop {
  position: sticky;
  top: 0;
  // position: relative;
  z-index: 100;
  width: 100%;
  // height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}
.mynavbar {
  margin-bottom: 0;
}
.nav-desktop-item {
  position: relative;
  margin: 0rem 0.8rem;
  display: inline-flex;
  line-height: 2rem;
  list-style: none;
  a {
    color: #8a8a8a;
  }
  &:hover {
    .nav-desktop-link {
      color: #2f2f2f;
    }
  }
}
.nav-desktop-link {
  display: flex;
  align-items: center;
  font-family: canada-type-gibson, Helvetica, Arial, sans-serif;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-out, border 0.15s ease-out;
  span {
    border-bottom: 2px solid transparent;
  }
  &:hover {
    color: #2f2f2f;
    &:not(.dropdown) {
      span {
        border-bottom: 2px solid #2f2f2f;
      }
    }
  }
  &.router-link-active {
    color: #2f2f2f;
    span {
      border-bottom: 2px solid #2f2f2f;
    }
  }
  &:hover {
    & + .nav-hover-menu {
      visibility: visible;
      opacity: 1;
    }
  }
  svg {
    height: 1rem;
    padding-left: 0.2rem;
  }
}
.nav-desktop-icon {
  width: 1.2rem;
  height: 1.2rem;
  line-height: 0;
  margin-left: 2rem;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  &.icon-dark {
    color: #2f2f2f;
    a {
      color: inherit;
    }
    &:hover {
      color: #8a8a8a;
    }
  }
  &.icon-white {
    color: #fff;
    a {
      color: inherit;
    }
    &:hover {
      color: #8a8a8a;
    }
  }
}
.nav-hover-menu {
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding-top: 1rem;
  top: 1.5rem;
  left: -0.5rem;
  z-index: 1;
  &:hover {
    visibility: visible;
    opacity: 1;
  }
}
.nav-dropdown-list {
  width: 100%;
  // background: #fff;
  padding: 0;
  border-radius: 0.2rem;
  // box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
  //     rgba(17, 17, 26, 0.05) 0px 8px 32px;
  .nav-dropdown-item {
    list-style: none;
    a {
      display: flex;
      text-decoration: none;
      padding: 0.2rem 1rem;
    }
    &:hover {
      a {
        color: #2f2f2f;
      }
    }
  }
}

.toggle-button {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  div {
    position: relative;
    top: 0;
    height: 4px;
    background-color: #2f2f2f;
    margin-bottom: 9px;
    transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
      0.3s ease right;
    border-radius: 1px;
  }
  .menu-bar-top {
    transform-origin: 0;
  }
  .menu-bar-middle {
    right: 0;
    width: 30px;
  }
  .menu-bar-bottom {
    margin-bottom: 0;
    transform-origin: 30px;
  }
  &.active {
    div {
      background-color: #fff;
    }
    .menu-bar-top {
      top: -2px;
      transform: rotateZ(45deg);
    }
    .menu-bar-middle {
      width: 42px;
      top: 0;
      right: 6px;
      transform: rotateZ(-45deg);
    }
    .menu-bar-bottom {
      top: 2px;
      transform: rotateZ(45deg);
    }
  }
}
// @media (max-width: 992px) {
//     .nav-desktop {
//         position: sticky;
//         top: 0;
//         z-index: 1020;
//     }
// }
@media (min-width: 992px) {
  .logo {
    max-height: 54px;
  }
}
</style>

<script>
import {
  ref, watch, onMounted, onUnmounted, computed,
} from 'vue';
import { useStore } from 'vuex';
import CartPopup from '@/components/CartPopup.vue';

export default {
  name: 'Header',
  components: {
    CartPopup,
  },
  setup() {
    // Navbar
    const isMenuActive = ref(false);
    const resetMenuActive = () => {
      isMenuActive.value = false;
    };
    const resetScrollPos = () => {
      const tmp = document.getElementsByClassName('hidden-scrollbar');
      for (let i = 0; i < tmp.length; i += 1) {
        tmp[i].scrollTop = 0;
      }
    };
    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };
    watch(isMenuActive, () => {
      // no-scroll
      if (isMenuActive.value) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
        resetScrollPos();
      }
    });
    const isSketchbookListOpen = ref(false);
    const toggleSketchbookList = () => {
      isSketchbookListOpen.value = !isSketchbookListOpen.value;
    };

    // // Scroll Behavior
    const windowWidth = ref(window.innerWidth);
    const onWidthChange = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => window.addEventListener('resize', onWidthChange));
    onUnmounted(() => window.removeEventListener('resize', onWidthChange));
    watch(
      () => windowWidth.value,
      () => {
        if (windowWidth.value >= 992 && isMenuActive.value) {
          resetMenuActive();
        }
      },
    );

    // Cart
    const isCartActive = ref(false);

    // Vuex Storage
    const store = useStore();

    return {
      isMenuActive,
      toggleMenu,
      resetMenuActive,

      isSketchbookListOpen,
      toggleSketchbookList,

      isCartActive,

      tobuyCount: computed(() => store.getters.tobuyCount),
    };
  },
};
</script>
