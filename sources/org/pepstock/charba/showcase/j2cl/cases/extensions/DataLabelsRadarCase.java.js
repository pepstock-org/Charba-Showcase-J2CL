goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsRadarCase');

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
goog.require('org.pepstock.charba.client.RadarChart');
goog.require('org.pepstock.charba.client.colors.GoogleChartColor');
goog.require('org.pepstock.charba.client.colors.HtmlColor');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.RadialAxis');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.RadarDataset');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsOptions');
goog.require('org.pepstock.charba.client.datalabels.DataLabelsPlugin');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.enums.DefaultPluginId');
goog.require('org.pepstock.charba.client.enums.Fill');
goog.require('org.pepstock.charba.client.enums.Weight');
goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite');
goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsRadarCase.$1');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const DataLabelsRadarCase = goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsRadarCase$impl');
exports = DataLabelsRadarCase;

