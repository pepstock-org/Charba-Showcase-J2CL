goog.module('org.pepstock.charba.client.configuration.RadialAngleLines');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.BorderDashCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ScaleContext');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.Array.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractScaleLines');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.RadialAngleLines.Property');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('vmbootstrap.Casts');

const RadialAngleLines = goog.require('org.pepstock.charba.client.configuration.RadialAngleLines$impl');
exports = RadialAngleLines;

