import axios from 'axios';
const KEY="AIzaSyAFnhJqdRakjgYXXxjyApdK1glEJzta77I";

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResults:5,
		key: KEY
	}

});