<?php get_header(); ?>
<div class="sky-unit"></div>
<div class="blog-container">
   <h1>Blog</h1>
    <?php
    $query_blogposts = new WP_Query( 'category_name=blog_post' );
    if($query_blogposts->have_posts()):
        while($query_blogposts->have_posts()):
            $query_blogposts->the_post();
            the_title();
            echo get_the_date();
            ?>
            <a href="<?php the_permalink();?>">To Post</a>
            <?php
            the_excerpt();
        endwhile;
    endif;
    wp_reset_postdata();
    ?> 
</div>


<?php get_footer();?>