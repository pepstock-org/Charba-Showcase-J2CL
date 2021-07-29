goog.module('org.pepstock.charba.client.geo.GeoDatasetHandler');

goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayObjectContainerList');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory');
goog.require('org.pepstock.charba.client.geo.CommonOptionsHandler');
goog.require('org.pepstock.charba.client.geo.GeoDataPoint');
goog.require('org.pepstock.charba.client.geo.GeoDatasetHandler.Property');
goog.require('org.pepstock.charba.client.geo.enums.ClipMap');
goog.require('vmbootstrap.Casts');

const GeoDatasetHandler = goog.require('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');
exports = GeoDatasetHandler;

