goog.module('org.pepstock.charba.client.UpdateConfiguration');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultTransitions');
goog.require('org.pepstock.charba.client.enums.Easing');
goog.require('org.pepstock.charba.client.options.AnimationCollection');
goog.require('org.pepstock.charba.client.options.AnimationTransition');
goog.require('org.pepstock.charba.client.options.IsAnimation');
goog.require('org.pepstock.charba.client.options.IsAnimationCollectionKey');
goog.require('org.pepstock.charba.client.options.IsAnimations');
goog.require('org.pepstock.charba.client.options.IsTransitionKey');

const UpdateConfiguration = goog.require('org.pepstock.charba.client.UpdateConfiguration$impl');
exports = UpdateConfiguration;

