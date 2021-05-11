goog.module('org.pepstock.charba.client.colors.GradientColor');

goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.GradientColor.GradientColorFactory');
goog.require('org.pepstock.charba.client.colors.GradientColor.Property');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');

const GradientColor = goog.require('org.pepstock.charba.client.colors.GradientColor$impl');
exports = GradientColor;

