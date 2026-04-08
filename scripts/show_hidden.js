$(document).ready(function() {

  // You can also use .is(":visible") instead.

  $("#q1").on('click', function() {
    if ($("#q1 .more").hasClass("hidden")) {
      $("#q1 .less").addClass("hidden");
      $("#q1 .more").removeClass("hidden");
    } else {
      $("#q1 .less").removeClass("hidden");
      $("#q1 .more").addClass("hidden");
    }
  });

  $("#q2").on('click', function() {
    if ($("#q2 .more").hasClass("hidden")) {
      $("#q2 .less").addClass("hidden");
      $("#q2 .more").removeClass("hidden");
    } else {
      $("#q2 .less").removeClass("hidden");
      $("#q2 .more").addClass("hidden");
    }
  });

  $("#q3").on('click', function() {
    if ($("#q3 .more").hasClass("hidden")) {
      $("#q3 .less").addClass("hidden");
      $("#q3 .more").removeClass("hidden");
    } else {
      $("#q3 .less").removeClass("hidden");
      $("#q3 .more").addClass("hidden");
    }
  });

  $("#q4").on('click', function() {
    if ($("#q4 .more").hasClass("hidden")) {
      $("#q4 .less").addClass("hidden");
      $("#q4 .more").removeClass("hidden");
    } else {
      $("#q4 .less").removeClass("hidden");
      $("#q4 .more").addClass("hidden");
    }
  });

  $("#q5").on('click', function() {
    if ($("#q5 .more").hasClass("hidden")) {
      $("#q5 .less").addClass("hidden");
      $("#q5 .more").removeClass("hidden");
    } else {
      $("#q5 .less").removeClass("hidden");
      $("#q5 .more").addClass("hidden");
    }
  });

  $("#q6").on('click', function() {
    if ($("#q6 .more").hasClass("hidden")) {
      $("#q6 .less").addClass("hidden");
      $("#q6 .more").removeClass("hidden");
    } else {
      $("#q6 .less").removeClass("hidden");
      $("#q6 .more").addClass("hidden");
    }
  });

});
