<template>
  <body>
  <title>Christian Solis</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bitter|Montserrat" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Just+Another+Hand" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 

  <!-- Sidebar -->
 <div id="sidebar-wrapper">
 
    <div class="about">
      <h1>CHICAGOAN.</h1>
      <h1>FRONT END DEVELOPER.</h1>
      <h1>SPORTS AFICIONADO</h1>
      <h1>& TACOHOLIC.</h1>
    </div>


    <div class="solis">
      <p>Former producer at <a href="https://vimeo.com/solisc" class="link">ESPN.</a></p>
      <p> <a href="https://www.https://anyonecanlearntocode.com/" class="link">Actualize </a>Coding Bootcamp graduate.</p>
      <p>Follow me on my new journey in the tech world.</p> 
    </div>


    <div class="icons">
      <span><a href="https://www.linkedin.com/in/christian-solis1/"><i class="fa fa-linkedin" style="font-size:30px;"></i></a></span>
      <span><a href="https://github.com/Tacoholic"><i class="fa fa-github" style="font-size:30px;"></i></a></span>
      <span><a href="https://medium.com/@christiansolis_53189"><i class="fa fa-medium" style="font-size:30px;"></i></a></span>
    </div>

    <div>
      <a class="btn btn-primary btn-lg" href="mailto:@solischristian@gmail.com" role="button">Say hello!</a>
    </div>
  </div>

<div class="body"> 
  <div class="Me">
  </div>

  <div class="Tacoholic">
  </div>

  <div class="Actualize">
  </div>
</div>

  </body>

</template>



<script>   


</script>

<style>
h1 {
  font-size: 60px;
}

.about{
  margin-top: 120px;
  margin-left: 75px;
  font-family: 'Just Another Hand', cursive;
}

.solis{
  margin-top: 25px;
  margin-left: 80px;
  font-family: 'Montserrat', sans-serif;
}
 
.fa-linkedin{
  margin-top: 15px;
  color:red;
  margin-left: 80px;

}

 .fa-github {
  margin-top: 15px;
  color:red;
  margin-left: 50px;
 }

 .fa-medium {
  margin-top: 15px;
  color:red;
  margin-left: 45px;
 }

 .btn {
  margin-top: 50px;
  margin-left: 75px;
  }

  #sidebar-wrapper {
    background-color: white;
    margin-left: -250px;
    left: 250px;
    width: 550px;
    position: fixed;
    height: 100%;
    overflow-y: auto;
    z-index: 1000;
    transition: all 0.4s ease 0s;
  }


  .Me {
    float: right;
    padding: 100px;
    width: 70%;
    background-color: #f4b93d;
    margin-left: 100px;
    height: 700px; /* only for demonstration, should be removed */
  }

  .Tacoholic {
    float: right;
    padding: 100px;
    width: 70%;
    background-color: #005ba8;
    margin-left: 100px;
    height: 700px; /* only for demonstration, should be removed */
  }

  .Actualize {
    float: right;
    /*padding: 100px;*/
    width: 70%;
    background-color: #b4ddbf;
    margin-left: 100px;
    height: 700px; /* only for demonstration, should be removed */
  }

 
</style>