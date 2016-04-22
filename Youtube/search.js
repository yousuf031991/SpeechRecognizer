// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    var par = JSON.parse(str);
    var videoId = par.items[0].id.videoId;

    var innerYoutubeHTML = '<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/'+ videoId + '?autoplay=1&origin=http://example.com" frameborder="0"/>';
    $('#search-container').html(innerYoutubeHTML);
  });
}
