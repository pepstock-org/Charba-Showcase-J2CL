goog.module('org.pepstock.charba.client.colors.CanvasObjectFactory');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.Area');
goog.require('org.pepstock.charba.client.colors.Center');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientColor');
goog.require('org.pepstock.charba.client.colors.GradientOrientation');
goog.require('org.pepstock.charba.client.colors.GradientType');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.colors.Radius');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const CanvasObjectFactory = goog.require('org.pepstock.charba.client.colors.CanvasObjectFactory$impl');
exports = CanvasObjectFactory;

