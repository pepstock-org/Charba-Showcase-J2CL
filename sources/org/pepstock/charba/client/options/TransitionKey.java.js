goog.module('org.pepstock.charba.client.options.TransitionKey');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.enums.DefaultTransitionKey');
goog.require('org.pepstock.charba.client.options.StandardAnimationTransition');
goog.require('org.pepstock.charba.client.options.TransitionKey.$LambdaAdaptor');
goog.require('vmbootstrap.Exceptions');

const TransitionKey = goog.require('org.pepstock.charba.client.options.TransitionKey$impl');
exports = TransitionKey;

