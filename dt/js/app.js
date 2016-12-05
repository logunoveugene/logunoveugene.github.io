$(document).foundation()
$(".site-register-check").hide();
$("#c2").click(function() {
    if($(this).is(":checked")) {
        $(".site-register-check").show();
    } else {
        $(".site-register-check").hide();
    }
});
