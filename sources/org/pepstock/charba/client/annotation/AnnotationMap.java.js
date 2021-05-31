goog.module('org.pepstock.charba.client.annotation.AnnotationMap');

goog.require('java.util.ArrayList');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation.Property');
goog.require('org.pepstock.charba.client.annotation.AnnotationHelper');
goog.require('org.pepstock.charba.client.annotation.AnnotationId');
goog.require('org.pepstock.charba.client.annotation.AnnotationType');
goog.require('org.pepstock.charba.client.annotation.BoxAnnotation');
goog.require('org.pepstock.charba.client.annotation.EllipseAnnotation');
goog.require('org.pepstock.charba.client.annotation.LineAnnotation');
goog.require('org.pepstock.charba.client.annotation.PointAnnotation');
goog.require('org.pepstock.charba.client.annotation.enums.DrawTime');
goog.require('org.pepstock.charba.client.commons.Id');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const AnnotationMap = goog.require('org.pepstock.charba.client.annotation.AnnotationMap$impl');
exports = AnnotationMap;

