import './contacts-list.style.scss';

export default {
  template:
`
<div class="contacts-list">
  <h4>Contacts</h4>
  <p ng-if="!contacts.length">You have no contacts.</p>
  <ul ng-if="contacts.length">
    <li class="contact-item" ng-repeat="contact in contacts" ng-bind="contact.fname"></li>
  <ul>
</div>
`,
  controller: ($scope, ContactsService) => {
    $scope.contacts = [];
    ContactsService.retrieve().then((response) => {
      $scope.contacts = response.data;
    });
  }
};
