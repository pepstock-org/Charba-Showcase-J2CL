goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataTimeSeriesByBarCase');

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
goog.require('java.lang.System');
goog.require('java.util.LinkedList');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.BarChart');
goog.require('org.pepstock.charba.client.adapters.DateAdapter');
goog.require('org.pepstock.charba.client.colors.HtmlColor');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis');
goog.require('org.pepstock.charba.client.data.BarDataset');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.FloatingData');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.client.enums.TimeUnit');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const FloatingDataTimeSeriesByBarCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataTimeSeriesByBarCase$impl');
exports = FloatingDataTimeSeriesByBarCase;

