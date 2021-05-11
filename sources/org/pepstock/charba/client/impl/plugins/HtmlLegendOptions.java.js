goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback');
goog.require('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegend');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions.Property');
goog.require('org.pepstock.charba.client.impl.plugins.IsHtmlLegendDefaultOptions');
goog.require('vmbootstrap.Casts');

const HtmlLegendOptions = goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
exports = HtmlLegendOptions;

