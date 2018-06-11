<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
 
get_header(); ?>
    <div class="sky-unit"></div>
    <div class="blog-container">
 
        <?php
        // Start the loop.
        while ( have_posts() ) : the_post();
 
            the_title();
            the_content();
 
            // Previous/next post navigation.
            the_post_navigation( array(
                'prev_text' => "Letzter Post: .%title",
                'next_text' => "Nächster Post: .%title",
                "taxonomy"  => "category",
                "in_same_term" => true
            ) );
 
        // End the loop.
        endwhile;
        ?>
    </div><!-- .content-area -->
 
<?php get_footer(); ?>