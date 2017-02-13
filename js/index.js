$('document').ready(function() {

  $('#search').on('click', function() {

    var text = $('#searchTerm').val();

    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + text + '&format=json&callback=?';
    $.getJSON(url, function(wiki) {
      console.log(wiki);

      $("#output").empty();

      for (var i = 0; i < wiki[1].length; i++) {
        $("#output").append("<h2>" + wiki[1][i] + "</h2>" + "<p>" + wiki[2][i] + "</p>" + "<a href=" + wiki[3][i] + " target=_blank>Wikipedia Link</a>")
      }

    });
  });
});