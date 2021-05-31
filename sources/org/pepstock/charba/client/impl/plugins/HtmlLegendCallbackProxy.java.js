goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendCallbackProxy');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.dom.BaseElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseEventTypes');
goog.require('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Div.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.TableCell.$Overlay');
goog.require('org.pepstock.charba.client.events.ChartEventContext');
goog.require('org.pepstock.charba.client.events.LegendClickEvent');
goog.require('org.pepstock.charba.client.events.LegendHoverEvent');
goog.require('org.pepstock.charba.client.events.LegendLeaveEvent');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegend');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendId');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions');
goog.require('org.pepstock.charba.client.items.LegendItem');
goog.require('org.pepstock.charba.client.items.LegendLabelItem');
goog.require('vmbootstrap.Casts');

const HtmlLegendCallbackProxy = goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendCallbackProxy$impl');
exports = HtmlLegendCallbackProxy;

