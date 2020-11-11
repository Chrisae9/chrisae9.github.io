$(document).ready(function () {
  $.get("../resources/templates/navbar.html", function (data) {
    $("body").prepend(data);
  });

  $.get("../resources/templates/footer.html", function (data) {
    $("body").append(data);
  });
});
