goog.module('org.pepstock.charba.client.configuration.CartesianTimeAxis');

goog.require('java.util.Date');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.configuration.Adapters');
goog.require('org.pepstock.charba.client.configuration.CartesianAxis');
goog.require('org.pepstock.charba.client.configuration.CartesianTimeTick');
goog.require('org.pepstock.charba.client.configuration.Time');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.AxisType');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.options.ScaleId');

const CartesianTimeAxis = goog.require('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
exports = CartesianTimeAxis;

