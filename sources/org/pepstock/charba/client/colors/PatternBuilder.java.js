goog.module('org.pepstock.charba.client.colors.PatternBuilder');

goog.require('java.lang.Class');
goog.require('java.lang.Object');
goog.require('java.lang.StringBuilder');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.CanvasObject');
goog.require('org.pepstock.charba.client.colors.CanvasObject.Property');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.Id');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.Repetition');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.JavaScriptObject');
goog.require('vmbootstrap.Objects');

const PatternBuilder = goog.require('org.pepstock.charba.client.colors.PatternBuilder$impl');
exports = PatternBuilder;

