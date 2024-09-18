# WooCommerce Variation Highlighter Plugin

## Description:
This WordPress plugin highlights empty SKU fields in WooCommerce product variations within the WP admin area. If the SKU field is empty, the associated variation box header is highlighted in red. If the SKU field is filled, the header is highlighted in green.

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

-----------------------
## Additional Information:

The use of this tool will allow you to identify an array of variations that have been created when using a large number of attribute settings.

It can be painstaking when you create 200+ variations and start to lose which ones are active (through SKU's that are used), and to those that are not ready to be be made live just yet based on your criteria.

It's always a good rule to keep those that are not required to have an empty SKU and to be desabled (unticked on [Enable] checkbox) to prevent issues on the front end, and to allow you to manage your products much easier.

It will also allow you to identify duplicate SKU's and highlight the box when removed, making it easier to see which variation requires a valid SKU.

This plugin can be removed/deleted when finished with to help keep your site clean of unwanted code after use. It can always be re-installed when required. It has no connection to your database and only as 2kb JS file to function.
