goog.module('org.pepstock.charba.client.annotation.EllipseAnnotation');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AbstractXYAnnotation');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.AnnotationHelper');
goog.require('org.pepstock.charba.client.annotation.AnnotationId');
goog.require('org.pepstock.charba.client.annotation.AnnotationType');
goog.require('org.pepstock.charba.client.annotation.BackgroundColorHandler');
goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');

const EllipseAnnotation = goog.require('org.pepstock.charba.client.annotation.EllipseAnnotation$impl');
exports = EllipseAnnotation;

