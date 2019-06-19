
<template>
  <section class="posts">
    <h1>Projects</h1>
    <article>
      <header>
        <h3>Tacoholic</h3>
      </header>
      <a class="image fit"><img src="/taquito.png"></a>
      <p>This app detects the nearest taco joint to the Actualize Campus.</p>
      <p>The Backend of this application uses Ruby on Rails while the Frontend uses Vue.js. I also installed the Geocoder gem and used the Google Places and Google Details API's.</p>
      <a class="btn btn-primary btn-lg" href="https://github.com/Tacoholic/tacoholic" role="button">Github Link</a>

      <ul class="actions special"></ul>
      </div>
    </article>
    <article>
      <header>
        <h3>Netflix Landing Page Clone</h3>
      </header>
      <br>
      <a class="image fit"><img src="https://i.ibb.co/r5krrdz/logo.png"></a>
      <p>To learn more about CSS, HTML and Javascript, I built an exact clone of the Netflix landing page.</p>
      <p>This landing page was built completely in React.</p>
      <a class="btn btn-primary btn-lg" href="https://github.com/Tacoholic/netflix-landing-page" role="button">Github Link</a>
      <ul class="actions special"></ul>
      </div>
    </article>
    <div class="solisicons">
        <span><a href="/"><i class="fa fa-home" style="font-size:35px;"></i></a></span>
    </div>
    
  </section>
</template>
<script>
export default {
  name: 'CurrentProjects',
  props: {
    msg: String
  }
}
</script>
<style type="text/css">

.posts{
  margin-top: -100px;
}
h3{
  padding-top: 10px;
  font-weight: bold;
}

p{
font-size: 1.6em;

}
  
  .solisicons{
    text-align: center;
    padding-top: 30px;
  }

  .fa-home{
    color: red;
  }
  @media (max-width: 991px;)
    .solisicons {
    }

</style>
