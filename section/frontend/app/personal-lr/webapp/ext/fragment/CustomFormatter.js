sap.ui.define([], function () {
	"use strict";
	return {
		formatNationality: function (nationCode) {
			switch (nationCode) {
				case "DEU":
					return "π©πͺ";
				case "USA":
					return "πΊπΈ";
				case "CHN":
					return "π¨π³";
				case "ZAF":
					return "πΏπ¦";
				case "GBR":
					return "π¬π§";
				case "FRA":
					return "π«π·";
			}
			return nationCode;
		}
	};
});
