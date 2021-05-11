goog.module('org.pepstock.charba.client.DoughnutChart');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.configuration.DoughnutOptions');
goog.require('org.pepstock.charba.client.data.DoughnutDataset');
goog.require('vmbootstrap.Casts');

const DoughnutChart = goog.require('org.pepstock.charba.client.DoughnutChart$impl');
exports = DoughnutChart;

