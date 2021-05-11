goog.module('org.pepstock.charba.client.BubbleChart');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.configuration.BubbleOptions');
goog.require('org.pepstock.charba.client.data.BubbleDataset');
goog.require('vmbootstrap.Casts');

const BubbleChart = goog.require('org.pepstock.charba.client.BubbleChart$impl');
exports = BubbleChart;

