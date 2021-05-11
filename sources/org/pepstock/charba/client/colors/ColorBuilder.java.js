goog.module('org.pepstock.charba.client.colors.ColorBuilder');

goog.require('java.lang.Double');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.Math');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.Color');
goog.require('org.pepstock.charba.client.colors.ColorUtil');
goog.require('org.pepstock.charba.client.colors.GwtMaterialColor');
goog.require('org.pepstock.charba.client.colors.HtmlColor');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.utils.RegExp.$Overlay');
goog.require('org.pepstock.charba.client.utils.RegExpResult.$Overlay');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');

const ColorBuilder = goog.require('org.pepstock.charba.client.colors.ColorBuilder$impl');
exports = ColorBuilder;

