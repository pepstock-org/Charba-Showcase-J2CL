goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase');

goog.require('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay');
goog.require('elemental2.dom.CSSProperties.WidthUnionType.$Overlay');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('elemental2.dom.HTMLTableCellElement.$Overlay');
goog.require('elemental2.dom.HTMLTableElement.$Overlay');
goog.require('elemental2.dom.HTMLTableRowElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Double');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.FontStyle');
goog.require('org.pepstock.charba.client.enums.Render');
goog.require('org.pepstock.charba.client.impl.charts.DefaultThreshold');
goog.require('org.pepstock.charba.client.impl.charts.GaugeChart');
goog.require('org.pepstock.charba.client.impl.charts.GaugeDataset');
goog.require('org.pepstock.charba.client.impl.charts.Threshold');
goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$1');
goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$2');
goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$3');
goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$4');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const GaugeCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase$impl');
exports = GaugeCase;

