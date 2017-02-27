export default ($http) => {
	return {
		create: (model) => {
			return $http.post('/api/contacts', model);
		},
		retrieve: () => {
			return $http.get('/api/contacts');
		}
	};
};
