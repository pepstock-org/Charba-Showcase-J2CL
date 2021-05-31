goog.module('org.pepstock.charba.client.annotation.BackgroundColorHandler');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.AnnotationContext');
goog.require('org.pepstock.charba.client.annotation.AnnotationPlugin');
goog.require('org.pepstock.charba.client.annotation.BackgroundColorHandler.Property');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.CallbackPropertyHandler');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.PropertyHandler');
goog.require('vmbootstrap.Casts');

const BackgroundColorHandler = goog.require('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
exports = BackgroundColorHandler;

