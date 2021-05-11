goog.module('org.pepstock.charba.client.options.Transitions');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTransitions');
goog.require('org.pepstock.charba.client.options.AnimationTransition');
goog.require('org.pepstock.charba.client.options.IsTransitionKey');
goog.require('org.pepstock.charba.client.options.IsTransitions');

const Transitions = goog.require('org.pepstock.charba.client.options.Transitions$impl');
exports = Transitions;

