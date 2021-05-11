goog.module('org.pepstock.charba.client.callbacks.ScriptableUtils');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext');
goog.require('org.pepstock.charba.client.callbacks.ChartContext');
goog.require('org.pepstock.charba.client.callbacks.Scriptable');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.data.DatasetCanvasObjectFactory');
goog.require('org.pepstock.charba.client.defaults.IsDefaultFont');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPadding');
goog.require('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay');
goog.require('org.pepstock.charba.client.items.FontItem');
goog.require('org.pepstock.charba.client.items.PaddingItem');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const ScriptableUtils = goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
exports = ScriptableUtils;

