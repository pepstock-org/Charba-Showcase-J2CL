goog.module('org.pepstock.charba.client.options.LegendTitle');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendTitle');
goog.require('org.pepstock.charba.client.dom.safehtml.SafeHtml');
goog.require('org.pepstock.charba.client.items.HasLegendText');
goog.require('org.pepstock.charba.client.items.LegendTextHandler');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Font');
goog.require('org.pepstock.charba.client.options.FontContainer');
goog.require('org.pepstock.charba.client.options.HasFont');
goog.require('org.pepstock.charba.client.options.Legend');
goog.require('org.pepstock.charba.client.options.LegendTitle.Property');
goog.require('org.pepstock.charba.client.options.OptionsEnvelop');
goog.require('org.pepstock.charba.client.options.Padding');
goog.require('vmbootstrap.Casts');

const LegendTitle = goog.require('org.pepstock.charba.client.options.LegendTitle$impl');
exports = LegendTitle;

