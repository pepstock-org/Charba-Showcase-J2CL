goog.module('org.pepstock.charba.client.annotation.HasBackgroundColor');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.BackgroundColorHandler');
goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');

const HasBackgroundColor = goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor$impl');
exports = HasBackgroundColor;

