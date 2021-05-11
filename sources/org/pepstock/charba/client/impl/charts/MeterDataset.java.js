goog.module('org.pepstock.charba.client.impl.charts.MeterDataset');

goog.require('java.lang.String');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.colors.Color');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty');
goog.require('org.pepstock.charba.client.data.Dataset.CommonProperty');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.enums.DefaultTransitionKey');
goog.require('org.pepstock.charba.client.impl.charts.MeterChart');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.primitives.$double');
goog.require('vmbootstrap.primitives.$int');

const MeterDataset = goog.require('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
exports = MeterDataset;

