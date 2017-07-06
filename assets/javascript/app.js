$(document).ready(function() {

	// click event - search button

	var query = $(this).attr(""); // search item
	var startDate = $(this).attr("") + "0101"; // add "0101"
	var endDate; // add "1231"
	var limit; // # of items to return

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
	}).fail(function(err) {
		throw err;
	});

	// click event - clear results
});