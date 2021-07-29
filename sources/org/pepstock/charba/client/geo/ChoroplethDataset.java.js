goog.module('org.pepstock.charba.client.geo.ChoroplethDataset');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.data.BarDataset');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.geo.ChoroplethChart');
goog.require('org.pepstock.charba.client.geo.ChoroplethDataPoint');
goog.require('org.pepstock.charba.client.geo.ChoroplethDataset.ChoroplethDataPointFactory');
goog.require('org.pepstock.charba.client.geo.ChoroplethOptionsMapper');
goog.require('org.pepstock.charba.client.geo.Feature');
goog.require('org.pepstock.charba.client.geo.GeoDatasetHandler');
goog.require('org.pepstock.charba.client.geo.Graticule');
goog.require('org.pepstock.charba.client.geo.HasCommonOptions');
goog.require('org.pepstock.charba.client.geo.IsGeoDataset');
goog.require('org.pepstock.charba.client.geo.enums.ClipMap');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');

const ChoroplethDataset = goog.require('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
exports = ChoroplethDataset;

