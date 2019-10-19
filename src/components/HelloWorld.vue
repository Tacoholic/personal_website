<template>
  <div class="sidebar-wrapper">
    <!-- <aside class="aside aside-1"> -->
        <div class="about clearfix">
          <h1>CHICAGOAN,
          <br>
          SPORTS AFICIONADO
          <br>
          & TACOHOLIC.</h1> 
        </div>

        <div class="solis">
            <p>Former producer at <a href="https://vimeo.com/solisc" class="link">ESPN.</a></p>
            <p> <a href="https://www.anyonecanlearntocode.com/" class="link">Actualize </a>Coding Bootcamp graduate.</p>
            <p>Follow <a href="https://medium.com/@christiansolis_53189" class="link">me</a> on my new journey in the tech world.</p>
           
        </div>
        <div class="icons">
            <span><a href="https://www.linkedin.com/in/christian-solis1/"><i class="fa fa-linkedin" target="_blank" style="font-size:30px;"></i></a></span>
            <span><a href="https://github.com/Tacoholic"><i class="fa fa-github" style="font-size:30px;"></i></a></span>
            <span><a href="https://docs.google.com/document/d/1ca4Qb70X2UvE_oulJhprUuvvdU9u4-eu9IMKx-GC5B4//export?format=pdf"><i class="fa fa-file-o" target="_blank" style="font-size:29px;"></i></a></span>
           <!--  <span><a href="/CurrentProjects"><i class="fa fa-laptop" style="font-size:30px;"></i></a></span> -->

            
        </div>


        <div class="buttonholder">
                <a class="btn btn-primary btn-lg" href="mailto:email@christiansolis.me" role="button">Say hello!</a>
        </div>
        </div>
       <!--  <div>
            <a class="btn btn-primary btn-lg" href="mailto:@solischristian@gmail.com" role="button">Say hello!</a>
        </div> -->

   <!--  </aside> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style type="text/css">
    body {
      background-color: #e8e8e8;
    }
/*
h1{
  color: red;
}
*/
    @media(max-width: 767px)
      .content-wrapper {
        width: 100%;
        margin-left: 0%;
      }
    @media(max-width: 991px)
        .content-wrapper {
        float: none;
        clear: none;
        }

    .content-wrapper {
      position: static;
      overflow: visible;
      max-width: 1200px;


    }


    h1{
      text-align:center;
      font-size: 90px;
      margin-left: 75px;
      font-weight: bold;
      margin-bottom: 10px;
      margin: 0.67em; 
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;


    }
    @media (max-width: max-width: 991px)
    .about{
      margin-top:75px;
    }

    .about{
      margin-top: -100px;
      justify-content: center;
      width: auto;
      font-family: 'Just Another Hand', cursive;
      font-size: 60px;
      line-height: 42px;
    }

    @media (max-width: 991px)
    .solis {
      width: 100%;
      margin-top: 30px;   
    }

    .icons{
      text-align: center;

    }

    .solis{
      margin-top: -50px;
      
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-align: start;
      align-items: flex-start;
      font-size: 16px;
      line-height: 26px;
      font-family: 'Montserrat', sans-serif;
    }

    p {
      font-size: 20px;
      text-align:center;
      margin-bottom: 10px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    * {
      box-sizing: border-box;
    }

    
    
    @media (max-width: 991px;)
    .fa-linkedin {
    }

    @media (max-width: 991px;)
    .fa-github{
    }

    @media (max-width: 991px;)
    .fa-file-o{
    }

    @media (max-width: 991px;)
    .fa-file-text-o{
    }



  .fa-laptop{
    margin-top: 20px;
    color: red;
    margin-left: 40px;

  }

  .fa-linkedin{
    margin-top: 15px;
    color:red;
    margin-left: 3px;

  }

   .fa-github {
    margin-top: 15px;
    color:red;
    margin-left: 50px;
   }

   .fa-file-o {
    margin-left: auto;
     margin-right: auto;
    margin-top: 15px;
    color:red;
    margin-left: 45px;
   }

    .fa-file-text-o {
    margin-left: auto;
     margin-right: auto;
    margin-top: 15px;
    color:red;
    margin-left: 30px;
   }

    .buttonholder {
    text-align: center;
     font-family: 'Montserrat', sans-serif;
     font-size: 16px;
     padding: 15px 65px;
     margin-top: 45px;
     margin-left: 2px;
     border-radius: 100px;
     font-size: 16px;
     margin-bottom: 50px;
     }
    
    @media (max-width: 767px)
      .sidebar-wrapper {
      position: static;
      width: 100%;
      padding-left:65px;
    }

    @media (max-width: 991px)
      .sidebar-wrapper{
        height: 750px;
        padding-right: 55px;
    }

/*    .sidebar-wrapper{
      left: 0px;
      top: 0px;
      right: 552px;
      bottom: 0px;
      z-index: 0;
      padding: 75px 85px 50px;
      /*background-color: #fafafa;*/


    


    .main {
    width: 100%;
    height: auto;
    padding: 65px;
    background: #f4b93d;

    }

    @media (max-width: 767px)
      .aside-1 {
      position: static;
      width: 85%;
    }

    .aside-1{
      left: 85px;
      right: 0px;
      bottom: 15%;
    }

    div {
        display: block;


    }

    @media all and (min-width: 600px) {
      .aside { flex: 1 0 0; }
    }

    @media all and (min-width: 800px) {
      .main    { flex: 3 0px; }
      .aside-1 { order: 1; } 
      .main    { order: 2; }
    }

    body {
      padding: 2em; 
    }

  </style>
</html>


