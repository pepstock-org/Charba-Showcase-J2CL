goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.LinearGradientLineCase');

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
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.LineChart');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientColor');
goog.require('org.pepstock.charba.client.colors.GradientOrientation');
goog.require('org.pepstock.charba.client.colors.GradientScope');
goog.require('org.pepstock.charba.client.colors.GradientType');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.UiGradient');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianCategoryAxis');
goog.require('org.pepstock.charba.client.configuration.CartesianLinearAxis');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.LineDataset');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.Fill');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.primitives.$double');

const LinearGradientLineCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.coloring.LinearGradientLineCase$impl');
exports = LinearGradientLineCase;

