var div = $('#buthis').hide(),
news = [
	'... but his kids like food.',
	'... but his house needs monthly payments.',
	'... but his hobbies cost money.',
	'... but his time is worth it.',
	'... but his hyperactivity needs an outlet.',
	'... but his roof needs fixing.',
	'... but his projects need funding.',
	'... but his wife wants presents.',
	'... but his Spotify is premium.',
	'... but his car needs a checkup.',
	'... but his garage needs a fire extinguisher.',
	'... but his stomach likes good food.',
	'... but his computer needs an upgrade.',
	'... but his shoes are worn out.'
	],
previous = 0, next = 0;

function changeNews() {
	do { next = Math.floor( Math.random() * news.length ); } while( previous == next );
	div.fadeIn().delay(2000).fadeOut(function() {
		changeNews();
		}).text( news[ next ] );
	previous = next;
}

	changeNews();