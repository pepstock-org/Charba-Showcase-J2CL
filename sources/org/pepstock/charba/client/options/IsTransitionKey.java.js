goog.module('org.pepstock.charba.client.options.IsTransitionKey');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.enums.DefaultTransitionKey');
goog.require('org.pepstock.charba.client.options.IsTransitionKey.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.options.StandardAnimationTransition');
goog.require('vmbootstrap.Exceptions');

const IsTransitionKey = goog.require('org.pepstock.charba.client.options.IsTransitionKey$impl');
exports = IsTransitionKey;

