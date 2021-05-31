goog.module('org.pepstock.charba.client.options.AbstractScriptablePadding');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.PaddingCallback');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPadding');
goog.require('org.pepstock.charba.client.options.AbstractPadding');
goog.require('org.pepstock.charba.client.options.IsScriptablePaddingProvider');
goog.require('vmbootstrap.Casts');

const AbstractScriptablePadding = goog.require('org.pepstock.charba.client.options.AbstractScriptablePadding$impl');
exports = AbstractScriptablePadding;

