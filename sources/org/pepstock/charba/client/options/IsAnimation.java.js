goog.module('org.pepstock.charba.client.options.IsAnimation');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.DelayCallback');
goog.require('org.pepstock.charba.client.callbacks.DurationCallback');
goog.require('org.pepstock.charba.client.callbacks.EasingCallback');
goog.require('org.pepstock.charba.client.callbacks.LoopCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimation');
goog.require('org.pepstock.charba.client.enums.Easing');

const IsAnimation = goog.require('org.pepstock.charba.client.options.IsAnimation$impl');
exports = IsAnimation;

