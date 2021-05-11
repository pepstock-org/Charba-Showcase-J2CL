goog.module('org.pepstock.charba.client.colors.Pattern');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.CanvasObject');
goog.require('org.pepstock.charba.client.colors.Pattern.Property');
goog.require('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.Repetition');
goog.require('vmbootstrap.Casts');

const Pattern = goog.require('org.pepstock.charba.client.colors.Pattern$impl');
exports = Pattern;

