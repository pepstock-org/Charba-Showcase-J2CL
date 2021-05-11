goog.module('org.pepstock.charba.client.AbstractChart.ChartRunnableWrapper');

goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartTimerTask');
goog.require('org.pepstock.charba.client.IsChart');

const ChartRunnableWrapper = goog.require('org.pepstock.charba.client.AbstractChart.ChartRunnableWrapper$impl');
exports = ChartRunnableWrapper;

