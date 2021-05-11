goog.module('org.pepstock.charba.client.colors.tiles.CharacterShape');

goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.colors.tiles.AbstractShape');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.TextMetricsItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.TextBaseline');
goog.require('org.pepstock.charba.client.enums.FontStyle');
goog.require('org.pepstock.charba.client.enums.Weight');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const CharacterShape = goog.require('org.pepstock.charba.client.colors.tiles.CharacterShape$impl');
exports = CharacterShape;

