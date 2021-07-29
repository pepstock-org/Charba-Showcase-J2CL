goog.module('org.pepstock.charba.client.geo.SizeLogarithmicAxis');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.configuration.AxisType');
goog.require('org.pepstock.charba.client.configuration.CartesianLogarithmicAxis');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.ScaleDataType');
goog.require('org.pepstock.charba.client.geo.BubbleMapChart');
goog.require('org.pepstock.charba.client.geo.IsLegendAxis');
goog.require('org.pepstock.charba.client.geo.IsSizeAxis');
goog.require('org.pepstock.charba.client.geo.Legend');
goog.require('org.pepstock.charba.client.geo.SizeAxis');
goog.require('org.pepstock.charba.client.geo.SizeAxis.SizeAxisRemappedOptionsFactory');
goog.require('org.pepstock.charba.client.geo.SizeAxisMapper');
goog.require('org.pepstock.charba.client.geo.enums.Mode');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('vmbootstrap.Casts');

const SizeLogarithmicAxis = goog.require('org.pepstock.charba.client.geo.SizeLogarithmicAxis$impl');
exports = SizeLogarithmicAxis;

