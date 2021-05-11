goog.module('org.pepstock.charba.client.impl.charts.BaseMeterChart');

goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.IsDatasetCreator');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.enums.DefaultTransitionKey');
goog.require('org.pepstock.charba.client.impl.charts.BaseMeterController');
goog.require('org.pepstock.charba.client.impl.charts.MeterDataset');
goog.require('org.pepstock.charba.client.impl.charts.MeterOptions');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const BaseMeterChart = goog.require('org.pepstock.charba.client.impl.charts.BaseMeterChart$impl');
exports = BaseMeterChart;

