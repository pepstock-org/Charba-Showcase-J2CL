goog.module('org.pepstock.charba.client.annotation.AnnotationCachedMap');

goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AnnotationMap');
goog.require('org.pepstock.charba.client.annotation.IsAnnotationId');
goog.require('org.pepstock.charba.client.annotation.enums.DrawTime');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('vmbootstrap.Casts');

const AnnotationCachedMap = goog.require('org.pepstock.charba.client.annotation.AnnotationCachedMap$impl');
exports = AnnotationCachedMap;

