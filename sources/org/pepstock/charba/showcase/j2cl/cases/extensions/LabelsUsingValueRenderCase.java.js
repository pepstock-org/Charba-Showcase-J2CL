goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingValueRenderCase');

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
goog.require('org.pepstock.charba.client.PieChart');
goog.require('org.pepstock.charba.client.colors.HtmlColor');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.PieDataset');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.FontStyle');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.client.labels.Label');
goog.require('org.pepstock.charba.client.labels.LabelsOptions');
goog.require('org.pepstock.charba.client.labels.LabelsPlugin');
goog.require('org.pepstock.charba.client.labels.enums.Render');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingValueRenderCase.MyRenderer');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const LabelsUsingValueRenderCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingValueRenderCase$impl');
exports = LabelsUsingValueRenderCase;

