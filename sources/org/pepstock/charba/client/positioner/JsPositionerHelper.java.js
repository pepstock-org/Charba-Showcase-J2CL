goog.module('org.pepstock.charba.client.positioner.JsPositionerHelper');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.enums.IsTooltipPosition');
goog.require('org.pepstock.charba.client.positioner.Point');
goog.require('org.pepstock.charba.client.positioner.PositionerContext');
goog.require('org.pepstock.charba.client.resources.ResourcesType');

const JsPositionerHelper = goog.require('org.pepstock.charba.client.positioner.JsPositionerHelper$impl');
exports = JsPositionerHelper;

