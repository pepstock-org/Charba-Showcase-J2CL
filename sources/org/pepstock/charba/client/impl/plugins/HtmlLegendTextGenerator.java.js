goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendTextGenerator');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.HtmlLegendCallback');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.dom.elements.Div.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.Display');
goog.require('org.pepstock.charba.client.items.HasLegendText');

const HtmlLegendTextGenerator = goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendTextGenerator$impl');
exports = HtmlLegendTextGenerator;

