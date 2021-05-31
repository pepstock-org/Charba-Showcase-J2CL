goog.module('org.pepstock.charba.client.controllers.WrapperController');

goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.Controller');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.controllers.ControllerContext.$Overlay');
goog.require('org.pepstock.charba.client.controllers.JsControllerHelper');
goog.require('org.pepstock.charba.client.controllers.WrapperController.Property');
goog.require('org.pepstock.charba.client.options.TransitionKey');

const WrapperController = goog.require('org.pepstock.charba.client.controllers.WrapperController$impl');
exports = WrapperController;

