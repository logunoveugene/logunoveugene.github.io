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
        }
        else {
          $('#collapseExample1').collapse('hide');
        }
        if($("#radio2").is(':checked')){
          $('#collapseExample2').collapse('show');
        }
        else {
          $('#collapseExample2').collapse('hide');
        }
        if($("#radio3").is(':checked')){
          $('#collapseExample3').collapse('show');
        }
        else {
          $('#collapseExample3').collapse('hide');
        }
        if($("#radio4").is(':checked')){
          $('#collapseExample4').collapse('show');
        }
        else {
          $('#collapseExample4').collapse('hide');
        }
        if($("#radio5").is(':checked')){
          $('#collapseExample5').collapse('show');
        }
        else {
          $('#collapseExample5').collapse('hide');
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
      var map = new GMaps({
        el: '#map',
        lat: lat,
        lng: lng
      });

      map.addMarker({
        lat: lat,
        lng: lng
      });

    });

  });

}
