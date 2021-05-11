goog.module('org.pepstock.charba.client.ScatterChart');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.configuration.ScatterOptions');
goog.require('org.pepstock.charba.client.data.ScatterDataset');
goog.require('vmbootstrap.Casts');

const ScatterChart = goog.require('org.pepstock.charba.client.ScatterChart$impl');
exports = ScatterChart;

