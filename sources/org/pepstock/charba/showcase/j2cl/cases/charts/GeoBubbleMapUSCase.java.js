goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.GeoBubbleMapUSCase');

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
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.GwtMaterialColor');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Labels');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.geo.BubbleMapChart');
goog.require('org.pepstock.charba.client.geo.BubbleMapDataPoint');
goog.require('org.pepstock.charba.client.geo.BubbleMapDataset');
goog.require('org.pepstock.charba.client.geo.Feature');
goog.require('org.pepstock.charba.client.geo.GeoUtils');
goog.require('org.pepstock.charba.client.geo.ProjectionAxis');
goog.require('org.pepstock.charba.client.geo.SizeAxis');
goog.require('org.pepstock.charba.client.geo.enums.Align');
goog.require('org.pepstock.charba.client.geo.enums.Position');
goog.require('org.pepstock.charba.client.geo.enums.Projection');
goog.require('org.pepstock.charba.showcase.j2cl.App');
goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.GeoBubbleMapUSCase.Capital');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('org.pepstock.charba.showcase.j2cl.topojson.UScapitals');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const GeoBubbleMapUSCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.GeoBubbleMapUSCase$impl');
exports = GeoBubbleMapUSCase;

