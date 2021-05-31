goog.module('org.pepstock.charba.client.annotation.AnnotationOptions');

goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AnnotationCachedMap');
goog.require('org.pepstock.charba.client.annotation.AnnotationId');
goog.require('org.pepstock.charba.client.annotation.AnnotationMap');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptions.Property');
goog.require('org.pepstock.charba.client.annotation.AnnotationPlugin');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotationOptions');
goog.require('org.pepstock.charba.client.annotation.enums.DrawTime');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions');
goog.require('vmbootstrap.Casts');

const AnnotationOptions = goog.require('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
exports = AnnotationOptions;

