export default {
	template:
`
<form name="contactForm">
	<label for="fname">First name</label>
	<input type="text" name="fname" id="fname" ng-model="$ctrl.model.fname" required><br>
	<span style="color:red" ng-show="nameError()">
		<span ng-show="contactForm.fname.$error.required">First name is required.</span>
	</span><br>

	<button type="submit" ng-click="onClickedSubmit()" ng-disabled="cantSubmit()">Add</button>
	<button ng-click="onClickedRemoveAll()">Remove all</button>
</form>
`,
	controller: ($scope, $window, ContactsService) => {
		$scope.ngModel = $scope.ngModel || {};

		// actions
		$scope.onClickedSubmit = () => {
			let model = angular.copy($scope.$ctrl.model);
			$scope.$ctrl.model = {};
			ContactsService.create(model);
		};
		$scope.onClickedRemoveAll = () => {
			$scope.$ctrl.model = {};
			ContactsService.removeAll();
		}

		// tests
		$scope.cantSubmit = () => {
			if ($scope.contactForm) {
				return $scope.contactForm.fname.$dirty && $scope.contactForm.fname.$invalid || $scope.contactForm.fname.$pristine;
			} else {
				return true;
			}
		};
		$scope.nameError = () => {
			return $scope.contactForm.fname.$dirty && $scope.contactForm.fname.$invalid && $scope.contactForm.fname.$modelValue;
		}
	},
	bindings: {
		model: '='
	}
};
