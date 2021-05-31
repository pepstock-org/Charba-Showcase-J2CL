goog.module('org.pepstock.charba.client.options.AbstractAnimation');

goog.require('java.lang.Boolean');
goog.require('java.lang.Integer');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.DelayCallback');
goog.require('org.pepstock.charba.client.callbacks.DurationCallback');
goog.require('org.pepstock.charba.client.callbacks.EasingCallback');
goog.require('org.pepstock.charba.client.callbacks.LoopCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.HasCallbackScope');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation');
goog.require('org.pepstock.charba.client.enums.Easing');
goog.require('org.pepstock.charba.client.options.AbstractAnimation.Property');
goog.require('vmbootstrap.Casts');

const AbstractAnimation = goog.require('org.pepstock.charba.client.options.AbstractAnimation$impl');
exports = AbstractAnimation;

