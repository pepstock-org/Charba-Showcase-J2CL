goog.module('org.pepstock.charba.client.data.HasTimeSeriesItems');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.HasDataPoints');
goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.data.TimeSeriesItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const HasTimeSeriesItems = goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems$impl');
exports = HasTimeSeriesItems;

