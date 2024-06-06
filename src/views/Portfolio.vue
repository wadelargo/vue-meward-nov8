<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <hr>
        <div class="container"> 
          <div class="sud1">
            <img src="@/assets/love1.jpg" alt=""> <h2>Jonathan Ruba</h2>
          </div>

          
          <div class="sud2">
         
            <h3>HelloWorld!</h3>

            <p> I'm a BSIT student with a knack for problem-solving and a strong technical skill set. Proficient in Java and Python, I excel in system analysis, database management, and network administration. My adaptability, analytical mindset, and effective communication make me a valuable asset in dynamic team environments. I'm excited to contribute my skills to the ever-evolving world of Information Technology.</p>
          </div>
        
        </div> 
        <hr>
  </div>
</template>

<style scoped>
h1 {
  color: pink;
}
p {
  margin: 0 50px;
  color: white;
  font-weight: italic;
}
.sud2 {

}
h3 {
  margin: 40px 200px;
  font-size: 30px;
  color: rgb(65, 230, 43);
}
h2 {
  margin: 40px 20px;
  margin-top: -50px;
  color: pink;
  
}
.container {
 display: flex;
}
.portfolio {
  padding: 60px;
   color: rgb(228, 100, 185);
}

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 80px 0;
}
</style>