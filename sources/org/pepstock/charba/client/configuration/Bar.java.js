goog.module('org.pepstock.charba.client.configuration.Bar');

goog.require('java.lang.Boolean');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.BorderRadiusCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderSkippedCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.EnableBorderRadiusCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.PointStyleCallback');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement');
goog.require('org.pepstock.charba.client.configuration.Bar.Property');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.defaults.IsDefaultBar');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.BorderSkipped');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.enums.PointStyleType');
goog.require('org.pepstock.charba.client.options.AbstractElement');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Bar = goog.require('org.pepstock.charba.client.configuration.Bar$impl');
exports = Bar;

