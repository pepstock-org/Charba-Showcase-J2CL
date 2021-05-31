goog.module('org.pepstock.charba.client.options.AnimationTransition');

goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Envelop');
goog.require('org.pepstock.charba.client.commons.HasCallbackScope');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition');
goog.require('org.pepstock.charba.client.options.Animation');
goog.require('org.pepstock.charba.client.options.AnimationTransition.Property');
goog.require('org.pepstock.charba.client.options.Animations');
goog.require('vmbootstrap.Casts');

const AnimationTransition = goog.require('org.pepstock.charba.client.options.AnimationTransition$impl');
exports = AnimationTransition;

