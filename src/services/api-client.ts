import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '557a0ddf0c024e66b5c825ad48d39c50',
	},
});
