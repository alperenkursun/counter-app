var count = 0;

$(document).ready(function () {
  $("#dec").click(function () {
    count--;
    $("#count").text(count);
  });

  $("#inc").click(function () {
    count++;
    $("#count").text(count);
  });

  $("#res").click(function () {
    count = 0;
    $("#count").text(count);
  });
});
