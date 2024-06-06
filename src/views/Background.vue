<template>
  <div class="background">
    <h1>Educational Background</h1>
    <hr>

      <div class="education-section">

        <div class="education-item">
        <p class="degree">Bachelor of Science in Information Technology</p>
        <p class="institution">Mater Dei College</p>
        <p class="date">2020-present</p>
        </div>

        <div class="education-item">
        <p class="degree">Master of Science in Information Technology</p>
        <p class="institution">Holy Name University</p>
        <p class="date">Expected Graduation: December 2025</p>
        </div>
        </div>
        <hr>
  </div>
</template>

<style scoped>
.background {
  padding: 60px;
   color: rgb(228, 100, 185);
}
.background h1 {
    color: pink;    
}

.education-section {
      max-width: 600px;
      margin: 50px auto;
      background-color: #fff;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      
    }

    h1 {
      color: #333;
    }

    .education-item {
      margin-bottom: 10px;
    }

    .degree {
      font-size: 22px;
      color:rgb(134, 6, 96);
    }

    .institution {
          font-size: 17px;
      color: #555;
    }

    .date {
          font-size: 17px;
      color:#555
    }

    .education-item {
        padding: 10px;
        background-color: rgba(128, 128, 128, 0.356);
        border-radius: 10px;
    }
</style>