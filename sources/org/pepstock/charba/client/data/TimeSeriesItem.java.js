goog.module('org.pepstock.charba.client.data.TimeSeriesItem');

goog.require('java.util.Date');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.DataPoint.Property');
goog.require('vmbootstrap.Casts');

const TimeSeriesItem = goog.require('org.pepstock.charba.client.data.TimeSeriesItem$impl');
exports = TimeSeriesItem;

