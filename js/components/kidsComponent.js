export default {
    template: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Roku Flashback - Kids</title>
      <link rel="stylesheet" href="css/main.css">
      <link rel="stylesheet" href="css/foundation.css">
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>
    
      <script src="https://unpkg.com/vue"></script>
      <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    </head>
    <body>
     <?php include('templates/header.php'); ?> 
    
    <div class="small-12 large-12 columns" id="kidsNav">
    <section class="row">
          <div class="small-6 large-6 large-pull-1 columns">
            <img src="images/logo.png" id="kidsLogo" alt="Logo">
    </div>
    </section>
    
    <section class="row">
          <div class="small-6 large-6 large-push-8 columns">
    
            <h2 class="hide">Main Navigation</h2>
                
            <a href="#" class="favNav">History<img src="images/history.svg" alt="history"></a>
                    <a href="#"class="favNav">Favorites<img src="images/favorite.svg" alt="favorite"></a>
                    <a href="#"class="favNav">My List<img src="images/list.svg" alt="list"></a>
                
    </div>
    </section>
    </div>
    
    <div class="small-12 large-12 columns">
    <form>
    <section class="row">
    <div class="small-6 large-4 columns">
    <input type="text" placeholder="Search.." id="searchbar">
    </div>
    <div class="small-6 large-4 columns">
    <button type="submit" id="submitButton">Submit</button>
    </div>
    </form>
    </div>
    
    
    <?php include('templates/select-movie.php'); ?> 
    
    <section id="bottomSection">
           <div class="small-12 large-12 large-centered columns">
    
          <section class="row">
          <h2 class="hide">How it works</h2>
          <div class="small-6 large-4 columns">
                      <h2>How It Works</h2>
                      <p>Make streaming fun and easy</p>
    
                      <a href="#">See how</a>
                      </div>
    
                      <h2 class="hide">See what's on</h2>
          <div class="small-6 large-4 columns">
              <h2>See What's On</h2>
                      <p>1,000+ reasons to smile</p>
    
                      <a href="#">Explore</a>
                      </div>
    
                      <h2 class="hide">products</h2>
          <div class="small-6 large-4 columns">
              <h2>Products</h2>
                      <p>Great streaming players and TV for everyone</p>
    
                      <a href="#">See our lineup</a>
                      </div>
    
    
    
                      </section>
    </section>
    
    </body>
     <?php include('templates/footer.php'); ?>
    </html>



    `
}