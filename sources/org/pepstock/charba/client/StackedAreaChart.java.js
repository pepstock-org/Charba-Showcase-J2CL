goog.module('org.pepstock.charba.client.StackedAreaChart');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.configuration.StackedOptions');
goog.require('org.pepstock.charba.client.data.StackedAreaDataset');
goog.require('vmbootstrap.Casts');

const StackedAreaChart = goog.require('org.pepstock.charba.client.StackedAreaChart$impl');
exports = StackedAreaChart;

