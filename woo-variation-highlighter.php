<?php
/*
Plugin Name: WooCommerce Variation Highlighter
Description: Highlights empty SKU fields in WooCommerce product variations in the admin area.
Version: 1.0.0
Author: Poppy Signs
Author URI: https://www.poppysigns.co.uk/
License: GPL2
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Enqueue the custom JS for WP admin
function wv_highlighter_enqueue_admin_script() {
    wp_enqueue_script( 'wv-highlighter-js', plugin_dir_url( __FILE__ ) . 'assets/js/wv-highlighter.js', array( 'jquery' ), null, true );
}
add_action( 'admin_enqueue_scripts', 'wv_highlighter_enqueue_admin_script' );
