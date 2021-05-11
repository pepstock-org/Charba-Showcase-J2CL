goog.module('org.pepstock.charba.client.zoom.JsZoomHelper');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.IsScaleId');
goog.require('org.pepstock.charba.client.options.IsTransitionKey');
goog.require('org.pepstock.charba.client.resources.ResourcesType');
goog.require('org.pepstock.charba.client.zoom.Amount');
goog.require('org.pepstock.charba.client.zoom.ScaleRange');

const JsZoomHelper = goog.require('org.pepstock.charba.client.zoom.JsZoomHelper$impl');
exports = JsZoomHelper;

