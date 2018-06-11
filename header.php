<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php bloginfo("name");?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Place favicon.ico in the root directory -->
        <!--    This code is necessary to trigger the wp_enqueue_scripts action
                good lord.... -->
        <?php wp_head();?>
    </head>
    <body>
        <script type="text/javascript">
            var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
        </script>
        <ul class="navbar">
            <li><a href="/wordpress">Home</a></li>
            <li><a href="/wordpress/blog">Blog</a></li>
        </ul>