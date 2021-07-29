goog.module('org.pepstock.charba.client.configuration.Arc');

goog.require('java.lang.Double');
goog.require('java.lang.Integer');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.AngleCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderAlignCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderRadiusCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.OffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement');
goog.require('org.pepstock.charba.client.configuration.Arc.Property');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.defaults.IsDefaultArc');
goog.require('org.pepstock.charba.client.enums.BorderAlign');
goog.require('org.pepstock.charba.client.options.AbstractElement');
goog.require('vmbootstrap.Casts');

const Arc = goog.require('org.pepstock.charba.client.configuration.Arc$impl');
exports = Arc;

