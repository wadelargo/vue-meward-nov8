<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
    <div class="container">
      <div class="wrapper">
        
         

          <div class="link">
            <pre><span class="ruba">Jonathan Ruba </span>
            <span class="sports">Sports Coordinator</span></pre>
            
              <ul>
                  <li><RouterLink to="/">Personal Information<div class="button"></div></RouterLink></li>
                  <li><RouterLink to="/experience">Work Experience<div class="button"></div></RouterLink></li>
                  <li><RouterLink to="/background">Educational Background<div class="button"></div></RouterLink></li>
                  <li><RouterLink to="/portfolio">Portfolio<div class="button"></div></RouterLink></li>
              </ul>
         <img src="@\assets\love2.png" alt="">
          </div>

          

      </div>

      <div class="sud">
        <RouterView />
      </div>
    </div>


</template>

<style scoped>
img {
  width: 200px;
  height: 210px;
  float: left;
  margin: 84px 0;
  
}
.button {
  float: right;
  border: 1px solid black;
  border-radius: 50%;
  width: 30px;
  height: 25px;
  background-color: rgb(214, 40, 176);
  margin-left: 40px;
}

.sports {
  font-size: 17px;
  font-weight:bold;
  margin-right: 20px;
  color: rgb(133, 20, 76);
}
.ruba {
  font-size: 40px;
}
h1 {
  text-align: right;
  padding: 10px;
}
.link {
  text-align: right;
  width: 600px;

}

.link ul {
  list-style: none;
  padding: 0;
}

.link ul li {

  font-weight: bold;
  font-size: 20px;
  padding: 17px;
  margin-right: 10px; /* Adjust the spacing between list items as needed */
}
.link ul li:hover {
  color: blue;
  transform: translateX(7px);
  transition: 0.2s;
  font-size: 25px;
  
}
.link ul li a:hover {
  color: blue;
  font-weight: bold;
}


.sud {
  background-color: rgb(138, 20, 85);
  width: 940px;
}

.link ul li a {
  text-decoration: none;
}
nav {
  float: right;
}
.container {
  display: flex;
  justify-content: inline-block;
  border: 1px solid black;
  width: 90%;
  height: 640px;
  margin: 80px;
}
.wrapper {
  width: 40%;
  display: flex;
  background-color: white;
  box-shadow: inset 0 60px 20px 0 rgb(243, 76, 173);
}
.sud {

}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>