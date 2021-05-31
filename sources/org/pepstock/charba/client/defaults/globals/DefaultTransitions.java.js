goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions');

goog.require('java.lang.Object');
goog.require('java.util.Arrays');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTransitions');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition');
goog.require('org.pepstock.charba.client.enums.DefaultTransitionKey');
goog.require('org.pepstock.charba.client.options.TransitionKey');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DefaultTransitions = goog.require('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');
exports = DefaultTransitions;

