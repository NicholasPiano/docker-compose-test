import angular from 'angular';
import App from './app.module';

angular.element(document).ready(() => {
	angular.bootstrap(document, [App.name]);
});
