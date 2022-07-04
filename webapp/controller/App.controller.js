sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {
    onShowHello: function () {
      //show native vanilla js alert
      alert("hello There! SAPUI5");
    },
  });
});
