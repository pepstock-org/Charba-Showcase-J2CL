goog.module('org.pepstock.charba.client.options.AnimationCollectionKey');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.enums.AnimationType');
goog.require('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey');
goog.require('org.pepstock.charba.client.options.AnimationPropertyKey');
goog.require('org.pepstock.charba.client.options.IsTypedAnimationKey');
goog.require('org.pepstock.charba.client.options.StandardAnimationCollection');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const AnimationCollectionKey = goog.require('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
exports = AnimationCollectionKey;

