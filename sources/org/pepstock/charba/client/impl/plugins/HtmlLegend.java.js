goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegend');

goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.tiles.TilesFactory');
goog.require('org.pepstock.charba.client.dom.BaseElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseNode.$Overlay');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Div.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.TableCell.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.Unit');
goog.require('org.pepstock.charba.client.enums.DefaultPluginId');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendCallbackProxy');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendGenerator');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendItem');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory.HtmlLegendBuilderDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.items.LegendLabelItem');
goog.require('org.pepstock.charba.client.plugins.AbstractPlugin');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const HtmlLegend = goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
exports = HtmlLegend;

