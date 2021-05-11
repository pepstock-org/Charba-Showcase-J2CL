goog.module('org.pepstock.charba.client.configuration.LegendTitle');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer');
goog.require('org.pepstock.charba.client.configuration.Font');
goog.require('org.pepstock.charba.client.configuration.Padding');
goog.require('org.pepstock.charba.client.dom.safehtml.SafeHtml');
goog.require('org.pepstock.charba.client.items.HasLegendText');
goog.require('org.pepstock.charba.client.items.LegendTextHandler');

const LegendTitle = goog.require('org.pepstock.charba.client.configuration.LegendTitle$impl');
exports = LegendTitle;

