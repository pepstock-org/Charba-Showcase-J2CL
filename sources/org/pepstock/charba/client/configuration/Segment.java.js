goog.module('org.pepstock.charba.client.configuration.Segment');

goog.require('java.lang.Double');
goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.BorderDashCallback');
goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.CapStyleCallback');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.JoinStyleCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.SegmentContext');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.commons.Array.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer');
goog.require('org.pepstock.charba.client.configuration.Segment.BaseContext');
goog.require('org.pepstock.charba.client.configuration.Segment.Property');
goog.require('org.pepstock.charba.client.enums.CapStyle');
goog.require('org.pepstock.charba.client.enums.JoinStyle');
goog.require('vmbootstrap.Casts');

const Segment = goog.require('org.pepstock.charba.client.configuration.Segment$impl');
exports = Segment;

