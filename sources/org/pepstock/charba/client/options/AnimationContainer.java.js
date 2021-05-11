goog.module('org.pepstock.charba.client.options.AnimationContainer');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.DataEnvelop');
goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationContainer');
goog.require('org.pepstock.charba.client.options.AnimationContainer.Property');
goog.require('org.pepstock.charba.client.options.AnimationTransition');
goog.require('org.pepstock.charba.client.options.AnimationTransition.Property');
goog.require('org.pepstock.charba.client.options.Transitions');
goog.require('vmbootstrap.Casts');

const AnimationContainer = goog.require('org.pepstock.charba.client.options.AnimationContainer$impl');
exports = AnimationContainer;

