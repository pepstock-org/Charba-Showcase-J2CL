goog.module('org.pepstock.charba.client.configuration.CartesianScaleTitle');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.AxisContainer');
goog.require('org.pepstock.charba.client.configuration.Font');
goog.require('org.pepstock.charba.client.configuration.Padding');
goog.require('org.pepstock.charba.client.enums.ScaleTitleAlign');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('vmbootstrap.Casts');

const CartesianScaleTitle = goog.require('org.pepstock.charba.client.configuration.CartesianScaleTitle$impl');
exports = CartesianScaleTitle;

