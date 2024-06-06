<template>
  <div class="expercience">
    <h1>Work Experience</h1>
    <hr>

     <div class="resume-section">
    <hr>


    <div class="resume-item">
      <p class="position">Software Developer</p>
      <p class="company">ABC Tech Solutions</p>
      <p class="date">June 2020 - Present</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consectetur libero, ut bibendum libero. Fusce nec purus vel mauris hendrerit malesuada.</p>
    </div>

    <div class="resume-item">
      <p class="position">Web Designer</p>
      <p class="company">XYZ Creative Agency</p>
      <p class="date">January 2018 - May 2020</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consectetur libero, ut bibendum libero. Fusce nec purus vel mauris hendrerit malesuada.</p>
    </div>
    <hr>
  </div>
  <hr>
  </div>
</template>

<style scoped>
.expercience {
  padding: 60px;
   color: rgb(228, 100, 185);
}
.expercience h1 {
  color:pink
}

.resume-section h1 {
  color: rgb(228, 100, 185);
  text-align: center;
}

.resume-section {
      max-width: 800px;
      background-color: #fff;
      padding: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      margin: 30px 0;
    }

    h1, h2 {
      color: #333;
    }

    .resume-item {
      margin-bottom: 30px;
    }

    .position {
      font-size: 26px;
      padding: 5px 0  ;
     color:rgb(134, 6, 96);
    }

    .company {
      color: #555;
    }

    .date {
      color: #777;
    }

    p {
      margin: 0;
      font-size: 20px;
      color: black;
    }
</style>
