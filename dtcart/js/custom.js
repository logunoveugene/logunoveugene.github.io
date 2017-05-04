 $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        
        trigger: 'click',
        constraints: [
        {
          to: 'scrollParent',
          pin: true
        },
        ]}
        )
    });

    $('.quantity').each(function() {
      var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max || input.attr('disabled')=="disabled" )  {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min || input.attr('disabled')=="disabled") {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    
    $('input[name=radio]').on('change', function(){  
        if($("#radio1").is(':checked')){
          $('#collapseExample1').collapse('show');
          $('div[data-quantity=radio1]').addClass('collapse-alert-warning');
        }
        else {
          $('#collapseExample1').collapse('hide');
            $('div[data-quantity=radio1]').removeClass('collapse-alert-warning');
        }
        if($("#radio2").is(':checked')){
          $('#collapseExample2').collapse('show');
            $('div[data-quantity=radio2]').addClass('collapse-alert-warning');

        }
        else {
          $('#collapseExample2').collapse('hide');
            $('div[data-quantity=radio2]').removeClass('collapse-alert-warning');
        }
        if($("#radio3").is(':checked')){
          $('#collapseExample3').collapse('show');
            $('div[data-quantity=radio3]').addClass('collapse-alert-warning');
        }
        else {
          $('#collapseExample3').collapse('hide');
            $('div[data-quantity=radio3]').removeClass('collapse-alert-warning');
        }
        if($("#radio4").is(':checked')){
          $('#collapseExample4').collapse('show');
            $('div[data-quantity=radio4]').addClass('collapse-alert-warning');
        }
        else {
          $('#collapseExample4').collapse('hide');
            $('div[data-quantity=radio4]').removeClass('collapse-alert-warning');
        }
        if($("#radio5").is(':checked')){
          $('#collapseExample5').collapse('show');
            $('div[data-quantity=radio5]').addClass('collapse-alert-warning');
        }
        else {
          $('#collapseExample5').collapse('hide');
            $('div[data-quantity=radio5]').removeClass('collapse-alert-warning');
        }
      });



    $('input[name=payment]').on('change', function(){  
        if($("#p1").is(':checked')){
          $('div[data-quantity=p1]').addClass('collapse-alert-warning');
        }
        else {
            $('div[data-quantity=p1]').removeClass('collapse-alert-warning');
        }
        if($("#p2").is(':checked')){

            $('div[data-quantity=p2]').addClass('collapse-alert-warning');
        }
        else {
            $('div[data-quantity=p2]').removeClass('collapse-alert-warning');
        }
        if($("#p3").is(':checked')){
          $('#p3').collapse('show');
            $('div[data-quantity=p3]').addClass('collapse-alert-warning');
        }
        else {
          $('#collapseExample3').collapse('hide');
            $('div[data-quantity=p3]').removeClass('collapse-alert-warning');
        }


      });


var findMeButton = $('.find-me');

// Check if the browser has support for the Geolocation API
if (!navigator.geolocation) {

  findMeButton.addClass("disabled");
  $('.no-browser-support').addClass("visible");

} else {

  findMeButton.on('click', function(e) {

    e.preventDefault();

    navigator.geolocation.getCurrentPosition(function(position) {

      // Get the coordinates of the current possition.
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      $('.latitude').text(lat.toFixed(3));
      $('.longitude').text(lng.toFixed(3));
      $('.coordinates').addClass('visible');

      // Create a new map and place a marker at the device location.

    });

  });

}

$(window).on('load', function(){
      var win = $(this); //this = window
      if (win.width() >= 820) { $('#collapseExample-smart').addClass('show')}
});





