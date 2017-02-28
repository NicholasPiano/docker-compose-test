export default ($http) => {
	var ContactsService = {
		contacts: [],
		create: (model) => {
			ContactsService.contacts.push(model);
			return $http.post('/api/contacts', model);
		},
		removeAll: () => {
			var _this = ContactsService;
			return $http.get('/api/contacts/remove/all').then(function () {
				_this.contacts = [];
				return _this.contacts;
			});
		},
		retrieve: () => {
			var _this = ContactsService;
			return $http.get('/api/contacts').then(function (results) {
				ContactsService.contacts = angular.copy(results.data);
				return ContactsService.contacts;
			});
		}
	};

	return ContactsService;
};
