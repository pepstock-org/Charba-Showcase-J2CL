goog.module('org.pepstock.charba.client.colors.tiles.ShapeDrawer');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.tiles.TilesFactory');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.Repetition');
goog.require('org.pepstock.charba.client.enums.CapStyle');
goog.require('org.pepstock.charba.client.enums.JoinStyle');

const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
exports = ShapeDrawer;

