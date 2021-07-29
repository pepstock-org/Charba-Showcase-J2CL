goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethLogarithmicCase');

goog.require('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay');
goog.require('elemental2.dom.CSSProperties.WidthUnionType.$Overlay');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('elemental2.dom.HTMLTableCellElement.$Overlay');
goog.require('elemental2.dom.HTMLTableElement.$Overlay');
goog.require('elemental2.dom.HTMLTableRowElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.geo.ChoroplethChart');
goog.require('org.pepstock.charba.client.geo.ChoroplethDataPoint');
goog.require('org.pepstock.charba.client.geo.ChoroplethDataset');
goog.require('org.pepstock.charba.client.geo.ColorLogarithmicAxis');
goog.require('org.pepstock.charba.client.geo.Feature');
goog.require('org.pepstock.charba.client.geo.GeoUtils');
goog.require('org.pepstock.charba.client.geo.ProjectionAxis');
goog.require('org.pepstock.charba.client.geo.enums.Interpolate');
goog.require('org.pepstock.charba.client.geo.enums.Projection');
goog.require('org.pepstock.charba.showcase.j2cl.App');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const GeoChoroplethLogarithmicCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethLogarithmicCase$impl');
exports = GeoChoroplethLogarithmicCase;

