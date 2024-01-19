(function ($) {
  $(function () {

    $('.sidenav').sidenav();


    $(".dropdown-trigger").dropdown();

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, options);
    });

    // Or with jQuery

    $(document).ready(function () {
      $('.datepicker').datepicker();
    });


    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.timepicker');
      var instances = M.Timepicker.init(elems, options);
    });

    // Or with jQuery

    $(document).ready(function () {
      $('.timepicker').timepicker();
    });


    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, options);
    });

    // Or with jQuery

    $(document).ready(function () {
      $('.collapsible').collapsible();
    });

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, options);
    });

    // Or with jQuery

    $(document).ready(function () {
      $('.tooltipped').tooltip();
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
