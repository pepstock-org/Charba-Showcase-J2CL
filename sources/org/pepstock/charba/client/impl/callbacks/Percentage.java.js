goog.module('org.pepstock.charba.client.impl.callbacks.Percentage');

goog.require('java.lang.Double');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext');
goog.require('org.pepstock.charba.client.data.BarDataset');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.FloatingData');
goog.require('org.pepstock.charba.client.data.HasDataPoints');
goog.require('org.pepstock.charba.client.enums.DataType');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Percentage = goog.require('org.pepstock.charba.client.impl.callbacks.Percentage$impl');
exports = Percentage;

