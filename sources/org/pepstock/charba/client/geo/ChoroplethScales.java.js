goog.module('org.pepstock.charba.client.geo.ChoroplethScales');

goog.require('java.lang.IllegalArgumentException');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.Scales');
goog.require('org.pepstock.charba.client.geo.BaseGeoOptions');
goog.require('org.pepstock.charba.client.geo.IsColorAxis');
goog.require('org.pepstock.charba.client.geo.ProjectionAxis');
goog.require('vmbootstrap.Exceptions');

const ChoroplethScales = goog.require('org.pepstock.charba.client.geo.ChoroplethScales$impl');
exports = ChoroplethScales;

