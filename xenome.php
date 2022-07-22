<?php
/**
 * Plugin Name:       Xenome (poll)
 * Description:       Make the unfamiliar familiar – Educate, empower and listen to your audience through bite-sized pieces of information and clever feedback mechanisms
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Xenome PTY LTD
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       https://xenome.app/
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_xenome_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_xenome_block_init' );

add_action('admin_menu', 'xenome_setup_menu');

function xenome_setup_menu(){
	//The icon in Base64 format
	$icon_base64 = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjguMDUyIiBoZWlnaHQ9IjEyOC4wNTMiIHZpZXdCb3g9IjAgMCAxMjguMDUyIDEyOC4wNTMiPgogIDxwYXRoIGlkPSJQYXRoXzU5NSIgZGF0YS1uYW1lPSJQYXRoIDU5NSIgZD0iTTEyOC4wNTIsMTI4LjA1M2gtNzQuN0E1My4zMSw1My4zMSwwLDAsMSwwLDc0LjdWMEgxMjguMDUyVjEyOC4wNTJaTTgzLjA0MSw4Ny4xaDBsMTIuOSwxOC44NzRoMTMuNjVMOTEsNzguNzc1bDE4LjEtMjcuMzgxSDk2LjY2OWwtMTEuNiwxOC43LTEyLjc3NC0xOC43SDU4LjY0Mkw3Ny4yMzMsNzguNiw1OC45NjgsMTA1Ljk3OUg3MS4xNTZMODMuMDQsODcuMVoiIGZpbGw9IiMyYjhkZDgiLz4KPC9zdmc+Cg==';

	//The icon in the data URI scheme
	$icon_data_uri = 'data:image/svg+xml;base64,' . $icon_base64;
	add_menu_page( 'Xenome admin', 'Xenome', 'manage_options', 'xenome-admin', 'xenome_init', $icon_data_uri );
}

function xenome_init(){
	echo "<iframe style='width: 100%;
	height: calc(100vh - 50px);' class='xenome-admin' src='https://xenome.app/register'></iframe>";
}
