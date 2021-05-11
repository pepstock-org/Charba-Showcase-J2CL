goog.module('org.pepstock.charba.client.options.ScaleTitle');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleTitle');
goog.require('org.pepstock.charba.client.enums.ScaleTitleAlign');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.AbstractScale');
goog.require('org.pepstock.charba.client.options.Font');
goog.require('org.pepstock.charba.client.options.FontContainer');
goog.require('org.pepstock.charba.client.options.HasFont');
goog.require('org.pepstock.charba.client.options.Padding');
goog.require('org.pepstock.charba.client.options.ScaleTitle.Property');
goog.require('vmbootstrap.Casts');

const ScaleTitle = goog.require('org.pepstock.charba.client.options.ScaleTitle$impl');
exports = ScaleTitle;

