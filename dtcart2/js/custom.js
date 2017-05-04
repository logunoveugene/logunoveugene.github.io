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




    $('#stepper1').on('click', function(){  
        if($("#user-infomation").hasClass('show')){
          $('#user-infomation').collapse('hide');
          $('#user-infomation-succs').collapse('show');
          $('#user-infomation-title').addClass('step-success');
          $('#getting-infomation-title').removeClass('step-success');
          $('#getting-infomation-succs').collapse('hide');
        }
      });
        $('#stepper2').on('click', function(){  
        if($("#getting-information").hasClass('show')){
          $('#getting-information').collapse('hide');
          $('#getting-infomation-succs').collapse('show');
          $('#getting-infomation-title').addClass('step-success');

        }
      });



        $('#stepper-back2').on('click', function(){  
        if($('#payment-information').hasClass('show')){
          $('#payment-information').collapse('hide');
          $('#getting-information').collapse('show');
          $('#getting-infomation-succs').collapse('hide');
          $('#getting-infomation-title').removeClass('step-success');
        }
      });
        $('#stepper-back1').on('click', function(){  
        if($('#getting-information').hasClass('show')||$('#payment-information').hasClass('show')){
          $('#getting-information').collapse('hide');
           $('#payment-information').collapse('hide');
          $('#user-infomation').collapse('show');
          $('#user-infomation-succs').collapse('hide');
          $('#user-infomation-title').removeClass('step-success');
        }
      });


$(window).on('load', function(){
      var win = $(this); //this = window
      if (win.width() >= 720) { 
        $('#collapseExample-smart').addClass('show');
        $('#collapseExample-smart').removeClass('product-collapse');
        $('#product-collapse-plate').addClass('hidden-xl-down');
      }
});

$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() >= 720) { 
        $('#collapseExample-smart').addClass('show');
        $('#collapseExample-smart').removeClass('product-collapse');
        $('#product-collapse-plate').addClass('hidden-xl-down');
      }
      else{
        $('#collapseExample-smart').removeClass('show');
        $('#collapseExample-smart').addClass('product-collapse');
        $('#product-collapse-plate').removeClass('hidden-xl-down');
      }
});