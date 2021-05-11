goog.module('org.pepstock.charba.client.colors.tiles.TilesFactory');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.HashMap');
goog.require('java.util.Locale');
goog.require('java.util.Map');
goog.require('java.util.function.Predicate');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.colors.PatternBuilder');
goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer');
goog.require('org.pepstock.charba.client.colors.tiles.IsShape');
goog.require('org.pepstock.charba.client.colors.tiles.PointStyleShape');
goog.require('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.impl.plugins.HtmlLegendItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const TilesFactory = goog.require('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
exports = TilesFactory;

