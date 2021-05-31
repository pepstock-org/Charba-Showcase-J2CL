goog.module('org.pepstock.charba.client.configuration.Font');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.defaults.IsDefaultFont');
goog.require('org.pepstock.charba.client.enums.FontStyle');
goog.require('org.pepstock.charba.client.enums.Weight');
goog.require('org.pepstock.charba.client.items.FontItem');
goog.require('org.pepstock.charba.client.options.IsFont');
goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider');
goog.require('vmbootstrap.Casts');

const Font = goog.require('org.pepstock.charba.client.configuration.Font$impl');
exports = Font;

