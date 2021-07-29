goog.module('org.pepstock.charba.client.options.Scale');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AxisType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScale');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.ChartAxisType');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.AbstractScale');
goog.require('org.pepstock.charba.client.options.Scale.Property');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Scale = goog.require('org.pepstock.charba.client.options.Scale$impl');
exports = Scale;
