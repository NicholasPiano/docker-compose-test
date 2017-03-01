import './contacts-list.style.scss';

export default {
	template:
`
<div class="contacts-list">
	<h4>Contacts</h4>
	<p ng-if="!ContactsService.contacts.length">You have no contacts.</p>
	<ul ng-if="ContactsService.contacts.length">
		<li class="contact-item" ng-repeat="contact in ContactsService.contacts">
			<span ng-bind="contact.fname"></span>
			<button ng-click="deleteContact($index)">delete</button>
		</li>
	<ul>
</div>
`,
	controller: ($scope, ContactsService) => {
		$scope.ContactsService = ContactsService;
		ContactsService.retrieve();

		// methods
		$scope.deleteContact = (index) => { // that was easy
			ContactsService.remove(index);
		}
	}
};
