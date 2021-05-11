goog.module('org.pepstock.charba.client.data.TimeSeriesLineDataset');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems');
goog.require('org.pepstock.charba.client.data.LineDataset');
goog.require('org.pepstock.charba.client.data.TimeSeriesItem');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('vmbootstrap.Exceptions');

const TimeSeriesLineDataset = goog.require('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
exports = TimeSeriesLineDataset;

