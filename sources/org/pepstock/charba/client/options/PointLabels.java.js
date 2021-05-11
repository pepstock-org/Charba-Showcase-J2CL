goog.module('org.pepstock.charba.client.options.PointLabels');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPointLabels');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.AbstractScale');
goog.require('org.pepstock.charba.client.options.Font');
goog.require('org.pepstock.charba.client.options.FontContainer');
goog.require('org.pepstock.charba.client.options.HasFont');
goog.require('org.pepstock.charba.client.options.Padding');
goog.require('org.pepstock.charba.client.options.PointLabels.Property');
goog.require('vmbootstrap.Casts');

const PointLabels = goog.require('org.pepstock.charba.client.options.PointLabels$impl');
exports = PointLabels;

