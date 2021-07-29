goog.module('org.pepstock.charba.client.geo.BubbleMapDataset');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.data.BubbleDataset');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.geo.BubbleMapChart');
goog.require('org.pepstock.charba.client.geo.BubbleMapDataPoint');
goog.require('org.pepstock.charba.client.geo.BubbleMapDataset.BubbleMapDataPointFactory');
goog.require('org.pepstock.charba.client.geo.BubbleMapOptionsMapper');
goog.require('org.pepstock.charba.client.geo.Feature');
goog.require('org.pepstock.charba.client.geo.GeoDatasetHandler');
goog.require('org.pepstock.charba.client.geo.Graticule');
goog.require('org.pepstock.charba.client.geo.HasCommonOptions');
goog.require('org.pepstock.charba.client.geo.IsGeoDataset');
goog.require('org.pepstock.charba.client.geo.enums.ClipMap');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');

const BubbleMapDataset = goog.require('org.pepstock.charba.client.geo.BubbleMapDataset$impl');
exports = BubbleMapDataset;

