goog.module('org.pepstock.charba.client.callbacks.ScaleContext');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbacksEnvelop');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.ScaleContext.Property');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.items.ScaleTickItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const ScaleContext = goog.require('org.pepstock.charba.client.callbacks.ScaleContext$impl');
exports = ScaleContext;

