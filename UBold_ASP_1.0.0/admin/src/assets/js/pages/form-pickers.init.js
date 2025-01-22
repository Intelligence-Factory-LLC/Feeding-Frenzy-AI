/*
Template Name: Ubold - Responsive Bootstrap 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Form pickers init js
*/

!function ($) {
    "use strict";

    var FormPickers = function () { };

    FormPickers.prototype.init = function () {
        //Flat picker
        $('#basic-datepicker').flatpickr();

        $('#datetime-datepicker').flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i"
        });

        $('#humanfd-datepicker').flatpickr({
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
        });

        $('#minmax-datepicker').flatpickr({
            minDate: "2020-01",
            maxDate: "2020-03"
        });

        $('#disable-datepicker').flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            disable: ["2025-01-10", "2025-01-21", "2025-01-30", new Date(2025, 4, 9) ],
            dateFormat: "Y-m-d",
        });

        $('#multiple-datepicker').flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d"
        });

        $('#conjunction-datepicker').flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d",
            conjunction: " :: "
        });

        $('#range-datepicker').flatpickr({
            mode: "range"
        });

        $('#inline-datepicker').flatpickr({
            inline: true
        });

        $('#basic-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i"
        });

        $('#24hours-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
        });

        $('#minmax-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            minDate: "16:00",
            maxDate: "22:30",
        });

        $('#preloading-timepicker').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            defaultDate: "01:45"
        });

        // Color Picker
        $("#colorpicker-default").spectrum();

        $("#colorpicker-showalpha").spectrum({
        showAlpha: true
        });

        $("#colorpicker-showpaletteonly").spectrum({
        showPaletteOnly: true,
        showPalette: true,
        palette: [
            ['#3bafda', 'white', '#675aa9',
            'rgb(255, 128, 0);', '#f672a7'],
            ['red', 'yellow', 'green', 'blue', 'violet']
        ]
        });

        $("#colorpicker-togglepaletteonly").spectrum({
        showPaletteOnly: true,
        togglePaletteOnly: true,
        togglePaletteMoreText: 'more',
        togglePaletteLessText: 'less',
        palette: [
            ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
            ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
            ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
            ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
            ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
            ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
            ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
        ]
            });

        $("#colorpicker-showintial").spectrum({
            showInitial: true
        });

        $("#colorpicker-showinput-intial").spectrum({
            showInitial: true,
            showInput: true
        });

        //Clock Picker
        $('.clockpicker').clockpicker({
            donetext: 'Done'
        });
        
        $('#single-input').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            'default': 'now'
        });
        $('#check-minutes').click(function(e){
            // Have to stop propagation here
            e.stopPropagation();
            $("#single-input").clockpicker('show')
                    .clockpicker('toggleView', 'minutes');
        });
        
    },
        $.FormPickers = new FormPickers, $.FormPickers.Constructor = FormPickers

}(window.jQuery),

    //initializing 
    function ($) {
        "use strict";
        $.FormPickers.init()
    }(window.jQuery);


