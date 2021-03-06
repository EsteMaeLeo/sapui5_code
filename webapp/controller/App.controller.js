sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      //show native vanilla js alert
      //alert("hello There! SAPUI5");

      // onInit: function () {
      //   //set data model in the view
      //   var oData = {
      //     recipient: {
      //       name: "UI5",
      //     },
      //   };
      //   var oModel = new JSONModel(oData);
      //   this.getView().setModel(oModel);
      //   //set i18n model view
      //   var i18nModel = new ResourceModel({
      //     bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
      //     supportedLocales: [""],
      //     fallbackLocale: "",
      //   });
      //   this.getView().setModel(i18nModel, "i18n");
      // },

      onShowHello: function () {
        //read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");

        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        //show msn
        MessageToast.show(sMsg);
        //MessageToast.show("Hello there MessageToast!");
      },
    });
  }
);
