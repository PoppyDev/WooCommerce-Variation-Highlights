# WooCommerce Variation Highlighter Plugin

## Plugin Name:
**WooCommerce Variation Highlighter**

## Description:
This WordPress plugin highlights empty SKU fields in WooCommerce product variations within the WP admin area. If the SKU field is empty, the associated variation box header is highlighted in red. If the SKU field is filled, the header is highlighted in green.

## Version:
1.0

## Author:
Poppy Signs Ltd

## Features:
- Highlights WooCommerce product variations in the admin panel based on whether the SKU field is filled or empty.
- Red background for empty SKU fields.
- Green background for filled SKU fields.

## Installation:
1. Upload the `woocommerce-variation-highlighter` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.

## Usage:
- The plugin automatically detects the SKU fields in WooCommerce product variations.
- It highlights the variation headers as you edit or save them.

## Version Control:
### Version 1.0
- Initial release of the WooCommerce Variation Highlighter plugin.
- Core functionality includes:
  - Detecting empty SKU fields.
  - Applying color-coded highlights to variation headers in the WooCommerce product editor.
- The JavaScript file `wv-highlighter.js` is enqueued only in the WP admin area to prevent frontend load.
