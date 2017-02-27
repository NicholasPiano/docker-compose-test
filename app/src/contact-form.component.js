export default {
	template:
`
<form>
	<label for="fname">First name</label>
	<input type="text" name="fname" id="fname" ng-model="$ctrl.model.fname"><br>
	<button type="submit" ng-click="onClickedSubmit($ctrl.model)">
		Add
	</button>
</form>
`,
	controller: ($scope, $window, ContactsService) => {
		$scope.ngModel = $scope.ngModel || {};
		$scope.onClickedSubmit = (model) => {
			console.debug(model);
			ContactsService.create(model);
		};
	},
	bindings: {
		model: '='
	}
};
