goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomBasicCase');

goog.require('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay');
goog.require('elemental2.dom.CSSProperties.WidthUnionType.$Overlay');
goog.require('elemental2.dom.Document.$Overlay');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('elemental2.dom.HTMLLabelElement.$Overlay');
goog.require('elemental2.dom.HTMLTableCellElement.$Overlay');
goog.require('elemental2.dom.HTMLTableElement.$Overlay');
goog.require('elemental2.dom.HTMLTableRowElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ScatterChart');
goog.require('org.pepstock.charba.client.colors.GoogleChartColor');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.ScatterDataset');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.InteractionAxis');
goog.require('org.pepstock.charba.client.zoom.ZoomOptions');
goog.require('org.pepstock.charba.client.zoom.ZoomPlugin');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const ZoomBasicCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomBasicCase$impl');
exports = ZoomBasicCase;

