goog.module('org.pepstock.charba.client.colors.Gradient');

goog.require('java.lang.Double');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Math');
goog.require('java.util.Collections');
goog.require('java.util.Comparator');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.CanvasObject');
goog.require('org.pepstock.charba.client.colors.Color');
goog.require('org.pepstock.charba.client.colors.Gradient.Property');
goog.require('org.pepstock.charba.client.colors.GradientColor');
goog.require('org.pepstock.charba.client.colors.GradientOrientation');
goog.require('org.pepstock.charba.client.colors.GradientScope');
goog.require('org.pepstock.charba.client.colors.GradientType');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayObjectContainerList');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');
goog.require('vmbootstrap.Primitives');

const Gradient = goog.require('org.pepstock.charba.client.colors.Gradient$impl');
exports = Gradient;

