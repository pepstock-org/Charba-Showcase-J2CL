goog.module('org.pepstock.charba.client.BarChart');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.configuration.BarOptions');
goog.require('org.pepstock.charba.client.data.BarDataset');
goog.require('vmbootstrap.Casts');

const BarChart = goog.require('org.pepstock.charba.client.BarChart$impl');
exports = BarChart;

