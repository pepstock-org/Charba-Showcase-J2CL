goog.module('org.pepstock.charba.client.annotation.AnnotationType');

goog.require('java.lang.Enum');
goog.require('java.lang.StringBuilder');
goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AnnotationId');
goog.require('org.pepstock.charba.client.annotation.DefaultBox');
goog.require('org.pepstock.charba.client.annotation.DefaultEllipse');
goog.require('org.pepstock.charba.client.annotation.DefaultLine');
goog.require('org.pepstock.charba.client.annotation.DefaultPoint');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Enums');

const AnnotationType = goog.require('org.pepstock.charba.client.annotation.AnnotationType$impl');
exports = AnnotationType;

