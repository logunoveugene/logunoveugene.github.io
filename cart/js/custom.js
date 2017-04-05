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
  //# sourceURL=pen.js