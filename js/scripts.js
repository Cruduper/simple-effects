$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle(function() {
        $( "" ).fadeIn( "slow", function() {
          // Animation complete
        });

    });
    $("#walrus-hidden").toggle();
    // $( ".fade" ).fadeIn( "slow", function() {
      // Animation complete
  

  });
});

