goog.module('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartAnimation');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.DelayCallback');
goog.require('org.pepstock.charba.client.callbacks.DurationCallback');
goog.require('org.pepstock.charba.client.callbacks.EasingCallback');
goog.require('org.pepstock.charba.client.callbacks.LoopCallback');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation');
goog.require('org.pepstock.charba.client.enums.Easing');
goog.require('vmbootstrap.Casts');

const AbstractDefaultChartAnimation = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartAnimation$impl');
exports = AbstractDefaultChartAnimation;

