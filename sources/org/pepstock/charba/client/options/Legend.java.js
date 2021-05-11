goog.module('org.pepstock.charba.client.options.Legend');

goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayEnumList');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultLegend');
goog.require('org.pepstock.charba.client.enums.Event');
goog.require('org.pepstock.charba.client.enums.TextDirection');
goog.require('org.pepstock.charba.client.options.AbstractDefaultPluginElement');
goog.require('org.pepstock.charba.client.options.HasTextDirection');
goog.require('org.pepstock.charba.client.options.Legend.Property');
goog.require('org.pepstock.charba.client.options.LegendLabels');
goog.require('org.pepstock.charba.client.options.LegendTitle');
goog.require('org.pepstock.charba.client.options.Plugins');
goog.require('org.pepstock.charba.client.options.TextDirectionHandler');
goog.require('vmbootstrap.Casts');

const Legend = goog.require('org.pepstock.charba.client.options.Legend$impl');
exports = Legend;

