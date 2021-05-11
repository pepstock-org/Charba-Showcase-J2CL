goog.module('org.pepstock.charba.client.configuration.Padding');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPadding');
goog.require('org.pepstock.charba.client.items.PaddingItem');
goog.require('org.pepstock.charba.client.options.IsPadding');
goog.require('org.pepstock.charba.client.options.IsScriptablePaddingProvider');
goog.require('vmbootstrap.Casts');

const Padding = goog.require('org.pepstock.charba.client.configuration.Padding$impl');
exports = Padding;

