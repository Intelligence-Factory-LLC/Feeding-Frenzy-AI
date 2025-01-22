/*
Template Name: Ubold - Responsive Bootstrap 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Responsive table init js
*/

!function ($) {
    "use strict";

    var ResponsiveTable = function () { };

    ResponsiveTable.prototype.init = function () {


        document.addEventListener('DOMContentLoaded', function () {
            $('.table-rep-plugin').responsiveTable('update');

            $('.btn-toolbar [data-toggle=dropdown]').attr('data-bs-toggle', "dropdown");
        });


    },
        $.ResponsiveTable = new ResponsiveTable, $.ResponsiveTable.Constructor = ResponsiveTable

}(window.jQuery),

    //initializing 
    function ($) {
        "use strict";
        $.ResponsiveTable.init()
    }(window.jQuery);