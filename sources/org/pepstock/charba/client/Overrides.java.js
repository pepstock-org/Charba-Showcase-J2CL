goog.module('org.pepstock.charba.client.Overrides');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.ChartOptions');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.ScaleType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.Merger');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultsBuilder');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Overrides = goog.require('org.pepstock.charba.client.Overrides$impl');
exports = Overrides;

