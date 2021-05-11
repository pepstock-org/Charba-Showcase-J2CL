goog.module('org.pepstock.charba.client.annotation.AnnotationContext');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.enums.ContextType');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const AnnotationContext = goog.require('org.pepstock.charba.client.annotation.AnnotationContext$impl');
exports = AnnotationContext;

