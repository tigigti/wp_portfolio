<?php get_header(); ?>
<div class="sky-unit"></div>
<div class="blog-container">
   <h1>Blog</h1>
    <?php
    if(have_posts()):
        while(have_posts()):
            the_post();
            the_content();
        endwhile;
    endif;
    ?> 
</div>


<?php get_footer();?>