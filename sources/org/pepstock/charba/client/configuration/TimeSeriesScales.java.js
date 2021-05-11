goog.module('org.pepstock.charba.client.configuration.TimeSeriesScales');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianLinearAxis');
goog.require('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis');
goog.require('org.pepstock.charba.client.configuration.Scales');
goog.require('org.pepstock.charba.client.configuration.ScalesOptions');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Objects');

const TimeSeriesScales = goog.require('org.pepstock.charba.client.configuration.TimeSeriesScales$impl');
exports = TimeSeriesScales;

