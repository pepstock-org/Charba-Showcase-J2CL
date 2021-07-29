goog.module('org.pepstock.charba.client.geo.GeoUtils');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.data.Labels');
goog.require('org.pepstock.charba.client.geo.Feature');
goog.require('org.pepstock.charba.client.geo.JsGeoHelper');
goog.require('org.pepstock.charba.client.geo.TopoJson');
goog.require('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback');
goog.require('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback');
goog.require('org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback');
goog.require('org.pepstock.charba.client.resources.AbstractInjectableResource');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const GeoUtils = goog.require('org.pepstock.charba.client.geo.GeoUtils$impl');
exports = GeoUtils;

