goog.module('org.pepstock.charba.client.geo.ColorAxisMapper');

goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.geo.ColorAxis');
goog.require('org.pepstock.charba.client.geo.ColorAxisMapper.Property');
goog.require('org.pepstock.charba.client.geo.LegendAxisMapper');
goog.require('org.pepstock.charba.client.geo.callbacks.InterpolateCallback');
goog.require('org.pepstock.charba.client.geo.enums.Interpolate');
goog.require('vmbootstrap.Casts');

const ColorAxisMapper = goog.require('org.pepstock.charba.client.geo.ColorAxisMapper$impl');
exports = ColorAxisMapper;

