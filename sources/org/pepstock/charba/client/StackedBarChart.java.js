goog.module('org.pepstock.charba.client.StackedBarChart');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.configuration.StackedOptions');
goog.require('org.pepstock.charba.client.data.StackedBarDataset');
goog.require('vmbootstrap.Casts');

const StackedBarChart = goog.require('org.pepstock.charba.client.StackedBarChart$impl');
exports = StackedBarChart;

