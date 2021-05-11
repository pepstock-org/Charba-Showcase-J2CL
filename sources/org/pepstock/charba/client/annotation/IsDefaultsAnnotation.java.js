goog.module('org.pepstock.charba.client.annotation.IsDefaultsAnnotation');

goog.require('java.lang.Integer');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptions');
goog.require('org.pepstock.charba.client.annotation.AnnotationType');
goog.require('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback');
goog.require('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback');
goog.require('org.pepstock.charba.client.annotation.enums.DrawTime');
goog.require('org.pepstock.charba.client.annotation.listeners.ClickCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.EnterCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.LeaveCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderDashCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.DisplayCallback');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');

const IsDefaultsAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
exports = IsDefaultsAnnotation;

