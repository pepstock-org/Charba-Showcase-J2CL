goog.module('org.pepstock.charba.client.configuration.StackedScales');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianAxis');
goog.require('org.pepstock.charba.client.configuration.CartesianTick');
goog.require('org.pepstock.charba.client.configuration.Scales');
goog.require('org.pepstock.charba.client.configuration.ScalesOptions');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const StackedScales = goog.require('org.pepstock.charba.client.configuration.StackedScales$impl');
exports = StackedScales;

