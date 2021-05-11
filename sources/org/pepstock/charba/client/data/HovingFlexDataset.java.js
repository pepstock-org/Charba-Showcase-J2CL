goog.module('org.pepstock.charba.client.data.HovingFlexDataset');

goog.require('java.lang.Integer');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty');
goog.require('org.pepstock.charba.client.data.Dataset.CommonProperty');
goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions');

const HovingFlexDataset = goog.require('org.pepstock.charba.client.data.HovingFlexDataset$impl');
exports = HovingFlexDataset;

