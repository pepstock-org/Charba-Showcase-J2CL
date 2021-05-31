goog.module('org.pepstock.charba.client.annotation.AbstractAnnotation');

goog.require('java.lang.Boolean');
goog.require('java.lang.Double');
goog.require('java.lang.Integer');
goog.require('java.lang.Number');
goog.require('java.lang.String');
goog.require('java.util.Date');
goog.require('java.util.List');
goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation.Property');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.AnnotationHelper');
goog.require('org.pepstock.charba.client.annotation.AnnotationId');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptions.Property');
goog.require('org.pepstock.charba.client.annotation.AnnotationPlugin');
goog.require('org.pepstock.charba.client.annotation.AnnotationType');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation');
goog.require('org.pepstock.charba.client.annotation.LineAnnotation');
goog.require('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback');
goog.require('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback');
goog.require('org.pepstock.charba.client.annotation.callbacks.ValueCallback');
goog.require('org.pepstock.charba.client.annotation.enums.DrawTime');
goog.require('org.pepstock.charba.client.annotation.listeners.ClickCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.EnterCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.LeaveCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderDashCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.DisplayCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Array.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Numbers');
goog.require('vmbootstrap.Primitives');

const AbstractAnnotation = goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
exports = AbstractAnnotation;

