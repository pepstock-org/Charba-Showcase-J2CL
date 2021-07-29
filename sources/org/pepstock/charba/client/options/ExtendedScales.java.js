goog.module('org.pepstock.charba.client.options.ExtendedScales');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScales');
goog.require('org.pepstock.charba.client.enums.ChartAxisType');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.options.Options');
goog.require('org.pepstock.charba.client.options.Scale');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('org.pepstock.charba.client.options.Scales');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const ExtendedScales = goog.require('org.pepstock.charba.client.options.ExtendedScales$impl');
exports = ExtendedScales;

