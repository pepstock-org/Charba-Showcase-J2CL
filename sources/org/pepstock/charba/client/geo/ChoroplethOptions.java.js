goog.module('org.pepstock.charba.client.geo.ChoroplethOptions');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.geo.BaseGeoOptions');
goog.require('org.pepstock.charba.client.geo.ChoroplethElements');
goog.require('org.pepstock.charba.client.geo.ChoroplethOptions.ChoroplethRemappedOptionsFactory');
goog.require('org.pepstock.charba.client.geo.ChoroplethOptionsMapper');
goog.require('org.pepstock.charba.client.geo.ChoroplethScales');
goog.require('org.pepstock.charba.client.geo.ColorAxis');
goog.require('org.pepstock.charba.client.geo.CommonOptionsHandler');
goog.require('org.pepstock.charba.client.geo.ProjectionAxis');
goog.require('org.pepstock.charba.client.options.ExtendedOptions');
goog.require('vmbootstrap.Casts');

const ChoroplethOptions = goog.require('org.pepstock.charba.client.geo.ChoroplethOptions$impl');
exports = ChoroplethOptions;

