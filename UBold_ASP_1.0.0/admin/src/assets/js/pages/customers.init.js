/*
Template Name: Ubold - Responsive Bootstrap 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Customers Init Js
*/

$(document).ready(function() {
    "use strict";
  
    // Default Datatable
    $("#products-datatable").DataTable({
      language: {
        paginate: {
          previous: "<i class='mdi mdi-chevron-left'>",
          next: "<i class='mdi mdi-chevron-right'>"
        },
        info: "Showing customers _START_ to _END_ of _TOTAL_",
        lengthMenu:
          "Display <select class='form-select form-select-sm ms-1 me-1'>" +
          '<option value="10">10</option>' +
          '<option value="20">20</option>' +
          '<option value="-1">All</option>' +
          "</select> customers"
      },
      pageLength: 10,
      columns: [
        {
          orderable: false,
          render: function(data, type, row, meta) {
            if (type === "display") {
              data =
                '<div class="form-check"><input type="checkbox" class="form-check-input dt-checkboxes"><label class="form-check-label">&nbsp;</label></div>';
            }
            return data;
          },
          checkboxes: {
            selectRow: true,
            selectAllRender:
              '<div class="form-check"><input type="checkbox" class="form-check-input dt-checkboxes"><label class="form-check-label">&nbsp;</label></div>'
          }
        },
        { orderable: true },
        { orderable: true },
        { orderable: true },
        { orderable: true },
        { orderable: true },
        { orderable: true },
        { orderable: false }
      ],
      select: {
        style: "multi"
      },
      order: [[5, "asc"]],
      drawCallback: function() {
        $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        $(".dataTables_length label").addClass("form-label");
        $(".dataTables_filter label").addClass("form-label");

      }
    });
  });