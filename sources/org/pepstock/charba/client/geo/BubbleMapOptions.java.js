goog.module('org.pepstock.charba.client.geo.BubbleMapOptions');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.geo.BaseGeoOptions');
goog.require('org.pepstock.charba.client.geo.BubbleMapElements');
goog.require('org.pepstock.charba.client.geo.BubbleMapOptions.BubbleMapRemappedOptionsFactory');
goog.require('org.pepstock.charba.client.geo.BubbleMapOptionsMapper');
goog.require('org.pepstock.charba.client.geo.BubbleMapScales');
goog.require('org.pepstock.charba.client.geo.CommonOptionsHandler');
goog.require('org.pepstock.charba.client.geo.ProjectionAxis');
goog.require('org.pepstock.charba.client.geo.SizeAxis');
goog.require('org.pepstock.charba.client.options.ExtendedOptions');
goog.require('vmbootstrap.Casts');

const BubbleMapOptions = goog.require('org.pepstock.charba.client.geo.BubbleMapOptions$impl');
exports = BubbleMapOptions;

