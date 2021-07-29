goog.module('org.pepstock.charba.client.geo.IsColorAxis');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.geo.ColorAxis');
goog.require('org.pepstock.charba.client.geo.ColorAxisMapper');
goog.require('org.pepstock.charba.client.geo.IsColorAxis.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.geo.IsLegendAxis');
goog.require('org.pepstock.charba.client.geo.callbacks.InterpolateCallback');
goog.require('org.pepstock.charba.client.geo.enums.Interpolate');

const IsColorAxis = goog.require('org.pepstock.charba.client.geo.IsColorAxis$impl');
exports = IsColorAxis;

