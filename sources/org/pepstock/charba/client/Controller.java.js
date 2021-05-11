goog.module('org.pepstock.charba.client.Controller');

goog.require('java.lang.IllegalArgumentException');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.controllers.ControllerContext.$Overlay');
goog.require('org.pepstock.charba.client.controllers.ControllerDatasetElement');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.options.IsTransitionKey');
goog.require('vmbootstrap.Exceptions');

const Controller = goog.require('org.pepstock.charba.client.Controller$impl');
exports = Controller;

