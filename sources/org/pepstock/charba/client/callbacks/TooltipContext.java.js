goog.module('org.pepstock.charba.client.callbacks.TooltipContext');

goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbacksEnvelop');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.TooltipContext.Property');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.items.TooltipItem');
goog.require('org.pepstock.charba.client.items.TooltipModel');
goog.require('vmbootstrap.Casts');

const TooltipContext = goog.require('org.pepstock.charba.client.callbacks.TooltipContext$impl');
exports = TooltipContext;

