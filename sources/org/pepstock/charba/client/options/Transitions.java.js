goog.module('org.pepstock.charba.client.options.Transitions');

goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.HasCallbackScope');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTransitions');
goog.require('org.pepstock.charba.client.options.AnimationTransition');
goog.require('org.pepstock.charba.client.options.IsTransitions');
goog.require('org.pepstock.charba.client.options.TransitionKey');
goog.require('vmbootstrap.Casts');

const Transitions = goog.require('org.pepstock.charba.client.options.Transitions$impl');
exports = Transitions;

