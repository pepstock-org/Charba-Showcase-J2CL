goog.module('org.pepstock.charba.client.configuration.Legend');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer');
goog.require('org.pepstock.charba.client.configuration.IsEventProvider');
goog.require('org.pepstock.charba.client.configuration.LegendLabels');
goog.require('org.pepstock.charba.client.configuration.LegendTitle');
goog.require('org.pepstock.charba.client.enums.ElementAlign');
goog.require('org.pepstock.charba.client.enums.Event');
goog.require('org.pepstock.charba.client.enums.LegendEventProperty');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.client.enums.TextDirection');
goog.require('org.pepstock.charba.client.events.AddHandlerEvent');
goog.require('org.pepstock.charba.client.events.ChartEventContext');
goog.require('org.pepstock.charba.client.events.LegendClickEvent');
goog.require('org.pepstock.charba.client.events.LegendHoverEvent');
goog.require('org.pepstock.charba.client.events.LegendLeaveEvent');
goog.require('org.pepstock.charba.client.events.RemoveHandlerEvent');
goog.require('org.pepstock.charba.client.items.LegendItem');

const Legend = goog.require('org.pepstock.charba.client.configuration.Legend$impl');
exports = Legend;

