goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByLineCase');

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
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.LineChart');
goog.require('org.pepstock.charba.client.adapters.DateAdapter');
goog.require('org.pepstock.charba.client.colors.GoogleChartColor');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianLinearAxis');
goog.require('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.LineDataset');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.Fill');
goog.require('org.pepstock.charba.client.enums.TickSource');
goog.require('org.pepstock.charba.client.enums.TimeUnit');
goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByLineCase.$1');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const TimeSeriesByLineCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByLineCase$impl');
exports = TimeSeriesByLineCase;

