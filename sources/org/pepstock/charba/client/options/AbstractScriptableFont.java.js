goog.module('org.pepstock.charba.client.options.AbstractScriptableFont');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.FontCallback');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultFont');
goog.require('org.pepstock.charba.client.enums.FontStyle');
goog.require('org.pepstock.charba.client.enums.Weight');
goog.require('org.pepstock.charba.client.options.AbstractFont');
goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider');
goog.require('vmbootstrap.Casts');

const AbstractScriptableFont = goog.require('org.pepstock.charba.client.options.AbstractScriptableFont$impl');
exports = AbstractScriptableFont;

