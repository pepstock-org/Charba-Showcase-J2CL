goog.module('org.pepstock.charba.client.configuration.AbstractScaleLines');

goog.require('java.lang.Double');
goog.require('java.lang.Integer');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ScaleContext');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractScaleLines.Property');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.AxisContainer');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleLines');
goog.require('vmbootstrap.Casts');

const AbstractScaleLines = goog.require('org.pepstock.charba.client.configuration.AbstractScaleLines$impl');
exports = AbstractScaleLines;

