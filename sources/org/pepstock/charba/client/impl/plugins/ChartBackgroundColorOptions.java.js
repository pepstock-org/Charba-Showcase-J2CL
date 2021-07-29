goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.colors.PatternBuilder');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.GlobalCompositeOperation');
goog.require('org.pepstock.charba.client.enums.ColorType');
goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor');
goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions.Property');
goog.require('org.pepstock.charba.client.impl.plugins.IsChartBackgroundColorDefaultOptions');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const ChartBackgroundColorOptions = goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
exports = ChartBackgroundColorOptions;

