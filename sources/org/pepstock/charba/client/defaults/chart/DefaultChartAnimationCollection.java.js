goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartAnimationCollection');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.FromCallback');
goog.require('org.pepstock.charba.client.callbacks.ToCallback');
goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection');
goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartAnimation');
goog.require('org.pepstock.charba.client.enums.AnimationType');
goog.require('org.pepstock.charba.client.options.AnimationPropertyKey');
goog.require('vmbootstrap.Casts');

const DefaultChartAnimationCollection = goog.require('org.pepstock.charba.client.defaults.chart.DefaultChartAnimationCollection$impl');
exports = DefaultChartAnimationCollection;

