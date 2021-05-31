goog.module('org.pepstock.charba.client.configuration.CartesianAxis');

goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianScaleTitle');
goog.require('org.pepstock.charba.client.configuration.CartesianTick');
goog.require('org.pepstock.charba.client.configuration.Grid');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.AxisPosition');
goog.require('org.pepstock.charba.client.enums.AxisType');
goog.require('org.pepstock.charba.client.enums.Bounds');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('vmbootstrap.Objects');

const CartesianAxis = goog.require('org.pepstock.charba.client.configuration.CartesianAxis$impl');
exports = CartesianAxis;

