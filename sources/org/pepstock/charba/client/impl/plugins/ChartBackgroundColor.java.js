goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor');

goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.HtmlColor');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay');
goog.require('org.pepstock.charba.client.enums.ColorType');
goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions');
goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions');
goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory');
goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory.ChartBackgroundColorDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundGradientFactory');
goog.require('org.pepstock.charba.client.items.PluginResizeArgument');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.plugins.AbstractPlugin');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const ChartBackgroundColor = goog.require('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
exports = ChartBackgroundColor;

