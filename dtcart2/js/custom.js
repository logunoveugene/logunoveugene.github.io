$(function() {
    $('[data-toggle="tooltip"]').tooltip({

        trigger: 'click',
        constraints: [{
            to: 'scrollParent',
            pin: true
        }, ]
    })
});

$('.quantity').each(function() {
    var spinner = jQuery(this)
    , input = spinner.find('input[type="number"]')
    , btnUp = spinner.find('.quantity-up')
    , btnDown = spinner.find('.quantity-down')
    , min = input.attr('min')
    , max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max || input.attr('disabled') == "disabled") {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min || input.attr('disabled') == "disabled") {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});
var spepps = $('input[name=radio]').on('change', function() {
    if ($("#radio1").is(':checked')) {
        $('#collapseExample1').collapse('show');
        $('div[data-quantity=radio1]').addClass('collapse-alert-warning');
    } else {
        $('#collapseExample1').collapse('hide');
        $('div[data-quantity=radio1]').removeClass('collapse-alert-warning');
    }
    if ($("#radio2").is(':checked')) {
        $('#collapseExample2').collapse('show');
        $('div[data-quantity=radio2]').addClass('collapse-alert-warning');

    } else {
        $('#collapseExample2').collapse('hide');
        $('div[data-quantity=radio2]').removeClass('collapse-alert-warning');
    }
    if ($("#radio3").is(':checked')) {
        $('#collapseExample3').collapse('show');
        $('div[data-quantity=radio3]').addClass('collapse-alert-warning');
    } else {
        $('#collapseExample3').collapse('hide');
        $('div[data-quantity=radio3]').removeClass('collapse-alert-warning');
    }
    if ($("#radio4").is(':checked')) {
        $('#collapseExample4').collapse('show');
        $('div[data-quantity=radio4]').addClass('collapse-alert-warning');
    } else {
        $('#collapseExample4').collapse('hide');
        $('div[data-quantity=radio4]').removeClass('collapse-alert-warning');
    }
    if ($("#radio5").is(':checked')) {
        $('#collapseExample5').collapse('show');
        $('div[data-quantity=radio5]').addClass('collapse-alert-warning');
    } else {
        $('#collapseExample5').collapse('hide');
        $('div[data-quantity=radio5]').removeClass('collapse-alert-warning');
    }
});

$('input[name=payment]').on('change', function() {
    if ($("#p1").is(':checked')) {
        $('div[data-quantity=p1]').addClass('collapse-alert-warning');
    } else {
        $('div[data-quantity=p1]').removeClass('collapse-alert-warning');
    }
    if ($("#p2").is(':checked')) {

        $('div[data-quantity=p2]').addClass('collapse-alert-warning');
    } else {
        $('div[data-quantity=p2]').removeClass('collapse-alert-warning');
    }
    if ($("#p3").is(':checked')) {
        $('#p3').collapse('show');
        $('div[data-quantity=p3]').addClass('collapse-alert-warning');
    } else {
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


$('#stepper2').on('click', function() {
    if ($("#getting-information").hasClass('show')) {
        $('#getting-information').collapse('hide');
        $('#getting-infomation-succs').collapse('show');
        $('#getting-infomation-title').addClass('step-success');

    }
});

$('#stepper-back2').on('click', function() {
    if ($('#payment-information').hasClass('show')) {
        $('#payment-information').collapse('hide');
        $('#getting-information').collapse('show');
        $('#getting-infomation-succs').collapse('hide');
        $('#getting-infomation-title').removeClass('step-success');
    }
});


$(window).on('load', function() {
    var win = $(this);
    //this = window
    if (win.width() >= 768) {
        $('#collapseExample-smart').addClass('show');
        $('#collapseExample-smart').removeClass('product-collapse');
        $('#product-collapse-plate').addClass('hidden-xl-down');
        $('#collapseExample-1').addClass('show');
        $('#collapseExample-1').removeClass('product-collapse');
        $('#product-collapse-1').addClass('hidden-xl-down');
    }
});

var width = $(window).width();
$(window).on('resize', function() {
    if ($(this).width() != width) {
        width = $(this).width();
        if (width >= 768) {
            $('#collapseExample-smart').addClass('show');
            $('#collapseExample-smart').removeClass('product-collapse');
            $('#product-collapse-plate').addClass('hidden-xl-down');

            $('#collapseExample-1').addClass('show');
            $('#collapseExample-1').removeClass('product-collapse');
            $('#product-collapse-1').addClass('hidden-xl-down');
        } else {
            $('#collapseExample-smart').removeClass('show');
            $('#collapseExample-smart').addClass('product-collapse');
            $('#product-collapse-plate').removeClass('hidden-xl-down');

            $('#collapseExample-1').removeClass('show');
            $('#collapseExample-1').addClass('product-collapse');
            $('#product-collapse-1').removeClass('hidden-xl-down');

        }

    }
});







var kolich = new Vue({
    el: '#count',
    data: {
        companyDetal: false,
        prise: 12599,
        stringprise: '12 599',
        summ: 12599,
        stringsumm: '12 599',
        count: 1,
        seen: false,
        seenService: false,
        serviseListItem: [],
        serviseListItemSum: 0,
        serviseListItemSumCOUNT: 0,
        serviseListItemCOUNT:0,
        orderSum: 12599,
        companyDetal: false,
        private: {
            gifts : [
            {
                name : 'Батарея Flama FLB-LP-E10"',
                img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/526/872/catalog_tile/12500525_1.jpg",
                price: 600,
                
                stores : [ {storename:"в ТЦ Черемушки"}, {storename:"на Алеутской"}] 
            },

            {
              name : 'Крышка для объектива Flama Ф82',
              img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/513/785/catalog_tile/31002347_1.jpg",
              price: 950,
              
              stores : [ {storename:"на Гоголя"}, {storename:"на Алеутской"}] 
          },
          {
            name:"Пленка защитная Kenko",
            img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/515/812/catalog_tile/31002388_1.jpg",
            price: 620,
            
            stores : [ {storename:"в ТЦ Черемушки"}, {storename:"на Гоголя"}, {storename:"на Алеутской"}] 
        },

        {
          name : 'Вспышка Nissin Di466N ',
          img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/486/385/catalog_tile/31002090_1.jpg",
          price: 800,

          stores : [ {storename:"в ТЦ Черемушки"},  {storename:"на Алеутской"}] 
      },
      {
          name : 'Штатив Sony VCT-R100 ',
          img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/513/681/catalog_tile/31000996_1.jpg",
          price: 990,
          
          stores : [ {storename:"в ТЦ Черемушки"}, {storename:"на Гоголя"}, ] 
      }


      ]
  },selectedPrivate: {
    selectedGifts : []},
    filter: "",    
    giftcountset:2,
    giftsum:3000,
    selectedGiftcount:0,
    selectedGiftsum:0

},


methods: {
    companydetal:function() {
        if (this.companyDetal === "false") {
            this.companyDetal = false;
        }

    },
    step2:function() {

        if ($("#user-infomation").hasClass('show')) {
            $('#user-infomation').collapse('hide');
            $('#user-infomation-succs').collapse('show');
            $('#user-infomation-title').addClass('step-success');
            $('#getting-infomation-title').removeClass('step-success');
            $('#getting-infomation-succs').collapse('hide');
        }


    },
    step1:function() {

      if ($('#getting-information').hasClass('show') || $('#payment-information').hasClass('show')) {
        $('#getting-information').collapse('hide');
        $('#payment-information').collapse('hide');
        $('#user-infomation').collapse('show');
        $('#user-infomation-succs').collapse('hide');
        $('#user-infomation-title').removeClass('step-success');
    }

},
addNew: function (index) {
    if (this.selectedPrivate.selectedGifts.length < this.giftcountset) {
      this.selectedPrivate.selectedGifts.push(this.filteredgifts[index])}
      
  },
  del: function(index) {
    this.selectedPrivate.selectedGifts.splice(index,1);
    
},
serviseApp:function() {
  this.serviseListItemCOUNT = this.serviseListItem.length * this.count;

  this.serviseListItemSum = this.serviseListItem.reduce(function(sum, current) {
    return sum + current;
}, 0);
  this.serviseListItemSumCOUNT = this.serviseListItemSum * this.count;

  if (this.serviseListItem != 0) {
    this.seenService = true;
}
else{
    this.seenService = false;
};

this.orderSum = this.summ + this.serviseListItemSumCOUNT;

},
downcount: function() {
    if (this.count != 1) {
        this.count = this.count - 1;
        this.summ = this.prise * this.count;
        this.stringsumm = this.summ.toLocaleString();
        if (this.count == 1) {
            this.seen = false;
        };


    } else {
        this.seen = false;
    };
    this.serviseListItemSumCOUNT = this.serviseListItemSum * this.count;
    this.serviseListItemCOUNT = this.serviseListItem.length * this.count;
    this.orderSum = this.summ + this.serviseListItemSumCOUNT;
},
upcount: function() {
    this.count = this.count + 1;
    this.summ = this.prise * this.count;
    this.seen = true;
    this.stringsumm = this.summ.toLocaleString();
    this.serviseListItemSumCOUNT = this.serviseListItemSum * this.count;
    this.serviseListItemCOUNT = this.serviseListItem.length * this.count;
    this.orderSum = this.summ + this.serviseListItemSumCOUNT;
},
countinput: function() {
    this.summ = this.prise * this.count;
    this.stringsumm = this.summ.toLocaleString();
    this.serviseListItemSumCOUNT = this.serviseListItemSum * this.count;
    this.serviseListItemCOUNT = this.serviseListItem.length * this.count;
    this.orderSum = this.summ + this.serviseListItemSumCOUNT;
}

},
computed: {
  filteredgifts: function () {
    var self = this
    return self.private.gifts.filter(function (folder) {
      return folder.name.indexOf(self.filter) !== -1
  })
},
selectedGiftcountq:function () {
  for(var i = 0, len = this.selectedPrivate.selectedGifts.length; i < len; i++) {
    this.selectedGiftsum += this.selectedPrivate.selectedGifts.price[i];  }
}
}

});















