$(document).ready(function() {

	// click event - search button

$("#searchBtn").on("click", function(){
  var query = $("#search").val(); // search item
  console.log(query);
  var startDate = ($("#start").val()).replace(/[-]/g,"");
  console.log(startDate);
  var endDate = ($("#end").val()).replace(/[-]/g,"");
  console.log(endDate);
  
	// var limit; // # of items to return

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	url += '?' + $.param({
			  'api-key': "d1e94bb4e2c64a878313efebcc222345",
			  'q': query,
			  'begin_date': startDate, // Format: YYYYMMDD
	  		  'end_date': endDate, // Format: YYYYMMDD
	  		  'hl': "true"
			});

  $.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		console.log(result); // display API call Object
		// update DOM, show each result
  });
}); //end on click

  //
	// }).fail(function(err) {
	// 	throw err;
	// });

	// click event - clear results
}); //end document ready
