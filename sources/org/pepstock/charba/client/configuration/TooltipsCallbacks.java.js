goog.module('org.pepstock.charba.client.configuration.TooltipsCallbacks');

goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.TooltipBodyCallback');
goog.require('org.pepstock.charba.client.callbacks.TooltipFooterCallback');
goog.require('org.pepstock.charba.client.callbacks.TooltipLabelCallback');
goog.require('org.pepstock.charba.client.callbacks.TooltipTitleCallback');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer');
goog.require('org.pepstock.charba.client.configuration.TooltipsCallbacks.Property');
goog.require('org.pepstock.charba.client.items.TooltipItem');
goog.require('org.pepstock.charba.client.items.TooltipLabelColor');
goog.require('org.pepstock.charba.client.items.TooltipLabelPointStyle');

const TooltipsCallbacks = goog.require('org.pepstock.charba.client.configuration.TooltipsCallbacks$impl');
exports = TooltipsCallbacks;

