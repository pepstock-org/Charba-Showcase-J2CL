goog.module('org.pepstock.charba.client.colors.GradientBuilder');

goog.require('java.lang.Object');
goog.require('java.lang.StringBuilder');
goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.CanvasObject');
goog.require('org.pepstock.charba.client.colors.CanvasObject.Property');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.GradientColor');
goog.require('org.pepstock.charba.client.colors.GradientOrientation');
goog.require('org.pepstock.charba.client.colors.GradientScope');
goog.require('org.pepstock.charba.client.colors.GradientType');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.Id');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.dom.IsCastable.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const GradientBuilder = goog.require('org.pepstock.charba.client.colors.GradientBuilder$impl');
exports = GradientBuilder;

