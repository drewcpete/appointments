


$(document).ready(function() {
  $(".appointmentform").submit(function(event) {
    var name = $("input#namein").val();
    var disc = $("input#Disc").val();
    var date = $("input#date").val();
    var time = $("input#time").val();

    $(".name").text(name);
    $(".disc").text(disc);
    $(".date").text(date);
    $(".time").text(time);

    $(".appointment").show();

    event.preventDefault();
});
});
