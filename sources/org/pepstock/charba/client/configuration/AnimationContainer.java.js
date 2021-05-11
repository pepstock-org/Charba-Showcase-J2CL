goog.module('org.pepstock.charba.client.configuration.AnimationContainer');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.Animation');
goog.require('org.pepstock.charba.client.configuration.Animations');
goog.require('org.pepstock.charba.client.configuration.Transitions');
goog.require('org.pepstock.charba.client.options.HasAnimationOptions');
goog.require('vmbootstrap.Casts');

const AnimationContainer = goog.require('org.pepstock.charba.client.configuration.AnimationContainer$impl');
exports = AnimationContainer;

