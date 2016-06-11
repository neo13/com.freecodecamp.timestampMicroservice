import * as http from "http";
import * as url from "url";

http.createServer((request, response) => {
	let query = url.parse(request.url, true).pathname;

	switch (query) {
		case '/':
			// Homepage
			// to-do serve home page html
			break;
		default:
			// API
			// to-do distinguish and validate if the string is a time stamp or date or invalid
			// return the proper response
	}
});