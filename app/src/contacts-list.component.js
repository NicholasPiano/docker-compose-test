import './contacts-list.style.scss';

export default {
	template:
`
<div class="contacts-list">
	<h4>Contacts</h4>
	<p ng-if="!contacts.length">You have no contacts.</p>
	<ul ng-if="contacts.length">
		<li class="contact-item" ng-repeat="contact in contacts">
			<span ng-bind="contact.fname"></span>
			<span ng-bind="contact.lname"></span>
		</li>
	<ul>
</div>
`,
	controller: ($scope, ContactsService) => {
		$scope.contacts = [];
		$scope.contacts = ContactsService.contacts;
		ContactsService.retrieve();
	}
};
