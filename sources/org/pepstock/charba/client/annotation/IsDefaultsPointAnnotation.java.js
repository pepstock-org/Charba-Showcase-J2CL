goog.module('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation');

goog.require('java.util.Date');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.AnnotationType');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.annotation.PointAnnotation');
goog.require('org.pepstock.charba.client.annotation.callbacks.ValueCallback');
goog.require('org.pepstock.charba.client.callbacks.RadiusCallback');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.IsScaleId');

const IsDefaultsPointAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation$impl');
exports = IsDefaultsPointAnnotation;

