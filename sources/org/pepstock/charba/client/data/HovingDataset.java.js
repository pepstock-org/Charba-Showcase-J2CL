goog.module('org.pepstock.charba.client.data.HovingDataset');

goog.require('java.lang.Integer');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.WidthCallback');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.data.HovingFlexDataset');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');
goog.require('vmbootstrap.Casts');

const HovingDataset = goog.require('org.pepstock.charba.client.data.HovingDataset$impl');
exports = HovingDataset;

