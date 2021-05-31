goog.module('org.pepstock.charba.client.items.TooltipModel');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbacksEnvelop');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Envelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.enums.TooltipAlign');
goog.require('org.pepstock.charba.client.items.TooltipBodyItem');
goog.require('org.pepstock.charba.client.items.TooltipItem');
goog.require('org.pepstock.charba.client.items.TooltipLabelColor');
goog.require('org.pepstock.charba.client.items.TooltipLabelPointStyle');
goog.require('org.pepstock.charba.client.items.TooltipModel.Property');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const TooltipModel = goog.require('org.pepstock.charba.client.items.TooltipModel$impl');
exports = TooltipModel;

