goog.module('org.pepstock.charba.client.data.PolarAreaDataset');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.BorderAlignCallback');
goog.require('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay');
goog.require('org.pepstock.charba.client.data.BorderAlignHandler');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.HasBorderAlign');
goog.require('org.pepstock.charba.client.data.HovingDataset');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('org.pepstock.charba.client.enums.BorderAlign');

const PolarAreaDataset = goog.require('org.pepstock.charba.client.data.PolarAreaDataset$impl');
exports = PolarAreaDataset;

