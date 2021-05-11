goog.module('org.pepstock.charba.client.data.TimeSeriesBarDataset');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.data.BarDataset');
goog.require('org.pepstock.charba.client.data.BarStackHandler');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.HasBarStackGroup');
goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems');
goog.require('org.pepstock.charba.client.data.TimeSeriesItem');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('vmbootstrap.Exceptions');

const TimeSeriesBarDataset = goog.require('org.pepstock.charba.client.data.TimeSeriesBarDataset$impl');
exports = TimeSeriesBarDataset;

