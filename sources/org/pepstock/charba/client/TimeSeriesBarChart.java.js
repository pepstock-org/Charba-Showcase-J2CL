goog.module('org.pepstock.charba.client.TimeSeriesBarChart');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.configuration.TimeSeriesBarOptions');
goog.require('org.pepstock.charba.client.data.TimeSeriesBarDataset');
goog.require('vmbootstrap.Casts');

const TimeSeriesBarChart = goog.require('org.pepstock.charba.client.TimeSeriesBarChart$impl');
exports = TimeSeriesBarChart;

