goog.module('org.pepstock.charba.client.configuration.Animation');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.DelayCallback');
goog.require('org.pepstock.charba.client.callbacks.DurationCallback');
goog.require('org.pepstock.charba.client.callbacks.EasingCallback');
goog.require('org.pepstock.charba.client.callbacks.LoopCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Animation.Property');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.IsEventProvider');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.enums.Easing');
goog.require('org.pepstock.charba.client.events.AddHandlerEvent');
goog.require('org.pepstock.charba.client.events.AnimationCompleteEvent');
goog.require('org.pepstock.charba.client.events.AnimationProgressEvent');
goog.require('org.pepstock.charba.client.events.RemoveHandlerEvent');
goog.require('org.pepstock.charba.client.items.AnimationItem');
goog.require('org.pepstock.charba.client.options.ExtendedOptions');
goog.require('org.pepstock.charba.client.options.HasAnimationOptions');
goog.require('org.pepstock.charba.client.options.IsAnimation');
goog.require('vmbootstrap.Casts');

const Animation = goog.require('org.pepstock.charba.client.configuration.Animation$impl');
exports = Animation;

