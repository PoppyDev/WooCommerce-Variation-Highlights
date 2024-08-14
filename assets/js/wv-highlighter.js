jQuery(document).ready(function($) {
    // Function to highlight variations based on SKU field status
    function highlightVariationsBasedOnSKU() {
        // Loop through each variation
        $('.woocommerce_variation').each(function() {
            var variation = $(this);
            var skuField = variation.find('input[name^="variable_sku"]'); // Find the SKU input field by name attribute

            // Check if the SKU field is empty
            if (skuField.val() === '') {
                variation.closest('.wc-metabox.closed').css('background-color', '#f8d7da'); // Set the background to red if empty
            } else {
                variation.closest('.wc-metabox.closed').css('background-color', '#d4edda'); // Set the background to green if not empty
            }
        });
    }

    // Initial check on page load
    highlightVariationsBasedOnSKU();

    // Recheck when variations are changed or added
    $('#variable_product_options').on('change', 'input, select', function() {
        highlightVariationsBasedOnSKU();
    });

    // Recheck before save
    $('#publish').on('click', function() {
        highlightVariationsBasedOnSKU();
    });
});