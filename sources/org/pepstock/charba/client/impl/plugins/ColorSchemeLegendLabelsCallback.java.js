goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemeLegendLabelsCallback');

goog.require('java.lang.Object');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.LegendLabelsCallback');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.data.HovingFlexDataset');
goog.require('org.pepstock.charba.client.data.LiningDataset');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil');
goog.require('org.pepstock.charba.client.items.LegendLabelItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const ColorSchemeLegendLabelsCallback = goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemeLegendLabelsCallback$impl');
exports = ColorSchemeLegendLabelsCallback;

