goog.module('org.pepstock.charba.client.impl.charts.GaugeDataset');

goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.Comparator');
goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.impl.charts.DefaultThreshold');
goog.require('org.pepstock.charba.client.impl.charts.GaugeChart');
goog.require('org.pepstock.charba.client.impl.charts.MeterDataset');
goog.require('org.pepstock.charba.client.impl.charts.Threshold');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const GaugeDataset = goog.require('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');
exports = GaugeDataset;

