<?php get_header(); ?>
<div class="sky-unit"></div>
<div class="blog-container">

    <?php
    // Start the loop.
    while ( have_posts() ) : the_post();
    ?>
        <div class="blog-post single">
            <h2 class="post-title"><?php the_title();?></h2>
            <h3 class="post-date">&mdash; <?php echo get_the_date();?></h3>
            <p class="post-content">
                <?php the_excerpt();?>
            </p>
        </div>
    <?php
        // Previous/next post navigation.
        the_post_navigation( array(
            'prev_text' => "Letzter Post: %title",
            'next_text' => "Nächster Post: %title",
            "taxonomy"  => "category",
            "in_same_term" => true
        ) );

    // End the loop.
    endwhile;
    ?>
</div>
 
<?php get_footer(); ?>