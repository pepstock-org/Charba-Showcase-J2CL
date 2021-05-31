goog.module('org.pepstock.charba.client.annotation.LineAnnotation');

goog.require('java.util.Date');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AbstractXYAnnotation');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.AnnotationHelper');
goog.require('org.pepstock.charba.client.annotation.AnnotationId');
goog.require('org.pepstock.charba.client.annotation.AnnotationPlugin');
goog.require('org.pepstock.charba.client.annotation.AnnotationType');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineAnnotation');
goog.require('org.pepstock.charba.client.annotation.LineAnnotation.Property');
goog.require('org.pepstock.charba.client.annotation.LineLabel');
goog.require('org.pepstock.charba.client.annotation.callbacks.ValueCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');

const LineAnnotation = goog.require('org.pepstock.charba.client.annotation.LineAnnotation$impl');
exports = LineAnnotation;

