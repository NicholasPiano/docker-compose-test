export default {
	template:
`
<form>
	<label for="fname">First name</label>
	<input type="text" name="fname" id="fname" ng-model="$ctrl.model.fname"><br>
	<button type="submit" ng-click="onClickedSubmit()">Add</button>
	<button type="submit" ng-click="onClickedRemoveAll()">Remove all</button>
</form>
`,
	controller: ($scope, $window, ContactsService) => {
		$scope.ngModel = $scope.ngModel || {};
		$scope.onClickedSubmit = () => {
			let model = angular.copy($scope.$ctrl.model);
			$scope.$ctrl.model = {};
			ContactsService.create(model);
		};
		$scope.onClickedRemoveAll = () => {
			$scope.$ctrl.model = {};
			ContactsService.removeAll();
		}
	},
	bindings: {
		model: '='
	}
};
