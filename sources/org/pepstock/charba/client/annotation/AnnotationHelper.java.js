goog.module('org.pepstock.charba.client.annotation.AnnotationHelper');

goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AnnotationId');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptions');
goog.require('org.pepstock.charba.client.annotation.AnnotationPlugin');
goog.require('org.pepstock.charba.client.annotation.AnnotationType');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const AnnotationHelper = goog.require('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
exports = AnnotationHelper;

