goog.module('org.pepstock.charba.client.options.AbstractAnimation');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation');
goog.require('org.pepstock.charba.client.enums.Easing');
goog.require('org.pepstock.charba.client.options.AbstractAnimation.Property');
goog.require('vmbootstrap.Casts');

const AbstractAnimation = goog.require('org.pepstock.charba.client.options.AbstractAnimation$impl');
exports = AbstractAnimation;

