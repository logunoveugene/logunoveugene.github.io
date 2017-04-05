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

    jQuery('.quantity').each(function() {
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
      if($("#radio4").is(':checked')){
        $('#collapseExample').collapse('show');
      }
      else {
        $('#collapseExample').collapse('hide');
      }
    });
  //# sourceURL=pen.js