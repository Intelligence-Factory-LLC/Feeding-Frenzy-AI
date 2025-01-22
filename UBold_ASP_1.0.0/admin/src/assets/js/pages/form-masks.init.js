/*
Template Name: Ubold - Responsive Bootstrap 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Form mask init js
*/

$( document ).ready(function() {
    $('[data-toggle="input-mask"]').each(function (idx, obj) {
        var maskFormat = $(obj).data("maskFormat");
        var reverse = $(obj).data("reverse");
        if (reverse != null)
            $(obj).mask(maskFormat, {'reverse': reverse});
        else
            $(obj).mask(maskFormat);
    });

    $('.autonumber').each(function(i, e) {
        new AutoNumeric(e);
    });
});

