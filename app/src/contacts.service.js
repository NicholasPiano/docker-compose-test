export default ($http) => {
	var ContactsService = {
		contacts: [],
		create: (model) => {
			ContactsService.contacts.push(model);
			return $http.post('/api/contacts', model);
		},
		removeAll: () => {
			return $http.get('/api/contacts/remove/all').then(function () {
				ContactsService.contacts = [];
				return ContactsService.contacts;
			});
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
