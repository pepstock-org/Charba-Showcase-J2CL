goog.module('org.pepstock.charba.client.configuration.LegendLabels');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.callbacks.LegendFilterCallback');
goog.require('org.pepstock.charba.client.callbacks.LegendItemSortCallback');
goog.require('org.pepstock.charba.client.callbacks.LegendLabelsCallback');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer');
goog.require('org.pepstock.charba.client.configuration.Font');
goog.require('org.pepstock.charba.client.configuration.LegendLabels.Property');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.enums.PointStyle');
goog.require('org.pepstock.charba.client.enums.PointStyleType');
goog.require('org.pepstock.charba.client.enums.TextAlign');
goog.require('org.pepstock.charba.client.items.LegendLabelItem');
goog.require('vmbootstrap.Arrays');

const LegendLabels = goog.require('org.pepstock.charba.client.configuration.LegendLabels$impl');
exports = LegendLabels;

