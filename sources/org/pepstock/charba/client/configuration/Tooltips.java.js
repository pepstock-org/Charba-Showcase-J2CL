goog.module('org.pepstock.charba.client.configuration.Tooltips');

goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.TooltipExternalCallback');
goog.require('org.pepstock.charba.client.callbacks.TooltipFilterCallback');
goog.require('org.pepstock.charba.client.callbacks.TooltipItemSortCallback');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Animation');
goog.require('org.pepstock.charba.client.configuration.AnimationContainer');
goog.require('org.pepstock.charba.client.configuration.Animations');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer');
goog.require('org.pepstock.charba.client.configuration.Font');
goog.require('org.pepstock.charba.client.configuration.HasAnimation');
goog.require('org.pepstock.charba.client.configuration.Padding');
goog.require('org.pepstock.charba.client.configuration.Tooltips.Property');
goog.require('org.pepstock.charba.client.configuration.Tooltips.TooltipContext');
goog.require('org.pepstock.charba.client.configuration.TooltipsCallbacks');
goog.require('org.pepstock.charba.client.configuration.Transitions');
goog.require('org.pepstock.charba.client.enums.Event');
goog.require('org.pepstock.charba.client.enums.InteractionMode');
goog.require('org.pepstock.charba.client.enums.IsTooltipPosition');
goog.require('org.pepstock.charba.client.enums.TextAlign');
goog.require('org.pepstock.charba.client.enums.TextDirection');
goog.require('org.pepstock.charba.client.enums.TooltipAlign');
goog.require('org.pepstock.charba.client.items.TooltipItem');

const Tooltips = goog.require('org.pepstock.charba.client.configuration.Tooltips$impl');
exports = Tooltips;

