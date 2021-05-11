goog.module('org.pepstock.charba.client.items.LegendTextHandler');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.PropertyHandler');
goog.require('org.pepstock.charba.client.dom.safehtml.SafeHtml');
goog.require('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder');
goog.require('org.pepstock.charba.client.items.LegendTextHandler.Property');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.OptionsEnvelop');
goog.require('vmbootstrap.Casts');

const LegendTextHandler = goog.require('org.pepstock.charba.client.items.LegendTextHandler$impl');
exports = LegendTextHandler;

