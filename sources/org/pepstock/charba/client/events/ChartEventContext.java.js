goog.module('org.pepstock.charba.client.events.ChartEventContext');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.events.ChartEventContext.Property');
goog.require('org.pepstock.charba.client.items.ItemsEnvelop');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const ChartEventContext = goog.require('org.pepstock.charba.client.events.ChartEventContext$impl');
exports = ChartEventContext;

