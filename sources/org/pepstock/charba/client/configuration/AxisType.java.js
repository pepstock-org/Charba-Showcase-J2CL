goog.module('org.pepstock.charba.client.configuration.AxisType');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.PropertyKey');
goog.require('org.pepstock.charba.client.configuration.AxisTypesManager');
goog.require('org.pepstock.charba.client.configuration.StandardAxisType');
goog.require('org.pepstock.charba.client.enums.ChartAxisType');
goog.require('org.pepstock.charba.client.enums.ScaleDataType');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('vmbootstrap.Exceptions');

const AxisType = goog.require('org.pepstock.charba.client.configuration.AxisType$impl');
exports = AxisType;

