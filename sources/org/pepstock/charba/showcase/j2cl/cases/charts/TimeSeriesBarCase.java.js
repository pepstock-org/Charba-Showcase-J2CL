goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesBarCase');

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
goog.require('org.pepstock.charba.client.TimeSeriesBarChart');
goog.require('org.pepstock.charba.client.adapters.DateAdapter');
goog.require('org.pepstock.charba.client.colors.GoogleChartColor');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.TimeSeriesBarDataset');
goog.require('org.pepstock.charba.client.data.TimeSeriesItem');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.TickSource');
goog.require('org.pepstock.charba.client.enums.TimeUnit');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$int');

const TimeSeriesBarCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesBarCase$impl');
exports = TimeSeriesBarCase;

