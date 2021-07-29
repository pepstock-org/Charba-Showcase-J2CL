goog.module('org.pepstock.charba.client.options.LegendLabels');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendLabels');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.enums.PointStyleType');
goog.require('org.pepstock.charba.client.enums.TextAlign');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.BoxHandler');
goog.require('org.pepstock.charba.client.options.Font');
goog.require('org.pepstock.charba.client.options.FontContainer');
goog.require('org.pepstock.charba.client.options.HasBox');
goog.require('org.pepstock.charba.client.options.HasFont');
goog.require('org.pepstock.charba.client.options.HasPointStyle');
goog.require('org.pepstock.charba.client.options.Legend');
goog.require('org.pepstock.charba.client.options.LegendLabels.Property');
goog.require('org.pepstock.charba.client.options.PointStyleHandler');
goog.require('vmbootstrap.Casts');

const LegendLabels = goog.require('org.pepstock.charba.client.options.LegendLabels$impl');
exports = LegendLabels;

