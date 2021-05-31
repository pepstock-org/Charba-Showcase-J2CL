goog.module('org.pepstock.charba.client.configuration.CartesianCategoryAxis');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.configuration.CartesianAxis');
goog.require('org.pepstock.charba.client.configuration.CartesianCategoryTick');
goog.require('org.pepstock.charba.client.data.Labels');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.AxisType');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('vmbootstrap.Casts');

const CartesianCategoryAxis = goog.require('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
exports = CartesianCategoryAxis;

