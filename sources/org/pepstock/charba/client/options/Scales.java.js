goog.module('org.pepstock.charba.client.options.Scales');

goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScale');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScales');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultsBuilder');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Options');
goog.require('org.pepstock.charba.client.options.Scale');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('vmbootstrap.Casts');

const Scales = goog.require('org.pepstock.charba.client.options.Scales$impl');
exports = Scales;

