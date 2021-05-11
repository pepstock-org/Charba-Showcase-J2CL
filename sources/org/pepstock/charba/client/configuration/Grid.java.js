goog.module('org.pepstock.charba.client.configuration.Grid');

goog.require('java.lang.Double');
goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.ScaleContext');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractScaleLines');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.Grid.Property');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('vmbootstrap.Casts');

const Grid = goog.require('org.pepstock.charba.client.configuration.Grid$impl');
exports = Grid;

