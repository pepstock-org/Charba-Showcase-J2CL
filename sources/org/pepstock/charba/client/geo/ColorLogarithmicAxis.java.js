goog.module('org.pepstock.charba.client.geo.ColorLogarithmicAxis');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.configuration.AxisType');
goog.require('org.pepstock.charba.client.configuration.CartesianLogarithmicAxis');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.ScaleDataType');
goog.require('org.pepstock.charba.client.geo.ChoroplethChart');
goog.require('org.pepstock.charba.client.geo.ColorAxis');
goog.require('org.pepstock.charba.client.geo.ColorAxis.ColorAxisRemappedOptionsFactory');
goog.require('org.pepstock.charba.client.geo.ColorAxisMapper');
goog.require('org.pepstock.charba.client.geo.IsColorAxis');
goog.require('org.pepstock.charba.client.geo.IsLegendAxis');
goog.require('org.pepstock.charba.client.geo.Legend');
goog.require('org.pepstock.charba.client.geo.callbacks.InterpolateCallback');
goog.require('org.pepstock.charba.client.geo.enums.Interpolate');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('vmbootstrap.Casts');

const ColorLogarithmicAxis = goog.require('org.pepstock.charba.client.geo.ColorLogarithmicAxis$impl');
exports = ColorLogarithmicAxis;

