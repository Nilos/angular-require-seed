define(["angular"], function (angular) {
	"use strict";

	function exampleDirective($compile, resultService) {
		return {
			restrict: "E",
			link: function postLink(scope, iElement, iAttrs) {
				//do something here
			}
		};
	}

	exampleDirective.$inject = ["$compile", "mhd.result"];

	return exampleDirective;
});