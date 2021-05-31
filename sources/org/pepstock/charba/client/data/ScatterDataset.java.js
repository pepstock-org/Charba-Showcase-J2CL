goog.module('org.pepstock.charba.client.data.ScatterDataset');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.FillCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.LineDataset');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.enums.Fill');
goog.require('org.pepstock.charba.client.enums.IsFill');
goog.require('org.pepstock.charba.client.options.HasFill');

const ScatterDataset = goog.require('org.pepstock.charba.client.data.ScatterDataset$impl');
exports = ScatterDataset;

