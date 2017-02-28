export default ($http) => {
	var ContactsService = {
		contacts: [],
		create: (model) => {
			ContactsService.contacts.push(model);
			return $http.post('/api/contacts', model);
		},
		remove: (index) => {
			let [removed] = ContactsService.contacts.splice(index, 1);
			return $http.get(`/api/contacts/remove/${removed._id}`);
		},
		removeAll: () => {
			ContactsService.contacts = [];
			return $http.get('/api/contacts/remove/all');
		},
		retrieve: () => {
			return $http.get('/api/contacts').then(function (results) {
				ContactsService.contacts = angular.copy(results.data);
				return ContactsService.contacts;
			});
		}
	};

	return ContactsService;
};
