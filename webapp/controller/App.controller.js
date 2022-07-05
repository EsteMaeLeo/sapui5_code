sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onShowHello: function () {
        //show native vanilla js alert
        //alert("hello There! SAPUI5");
        MessageToast.show("Hello there messagetoast!");
      },
    });
  }
);
