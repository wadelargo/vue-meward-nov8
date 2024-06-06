<template>
  <div class="home">
    <h1>Personal Information</h1>
    <hr>

    <div class="container">
    <div class="box1">
      <ul>
        <li>Name:</li>
        <li>Address:</li>
        <li>Sex:</li>
        <li>Birth Date:</li>
        <li>Height:</li>
        <li>Weight:</li>
        <li>Hobbies:</li>
        <li>Languages:</li>
      </ul>
    </div>
     
    <div class="box2">
      <ul>
        <li>Jonthan Ruba</li>
        <li>Talenceras Tubigon Bohol</li>
        <li>Male</li>
        <li>DEC 07, 2003</li>
        <li>170cm</li>
        <li>47</li>
        <li>Dating with my lalabs</li>
        <li>Ilocano</li>
      </ul>
    </div>
    
    </div>
   <hr>
  </div>
</template>

<style scoped>

.container {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 40px 0;
}
.home {
  padding: 60px;
  color: pink;
  

  

}

.box1 {
  text-decoration: none;
    color: rgb(170, 21, 103);
    display: inline-block;
    width: 150px;
    font-size: 20px;
}
.box1 ul{
  list-style: none;
  padding: 0;
}
.box1 ul li {
  margin-top: 20px;
}

.box2 {
    text-decoration: none;
    color: rgb(99, 6, 86);
    display: inline-block;
    font-size: 20px;
  
}
.box2 ul{
  list-style: none;
  padding: 0;
}
.box2 ul li {
  margin-top: 20px;
}

</style>
