goog.module('org.pepstock.charba.client.ChartNode');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultsBuilder');
goog.require('org.pepstock.charba.client.items.ChartAreaNode');
goog.require('org.pepstock.charba.client.items.LegendNode');
goog.require('org.pepstock.charba.client.items.OptionsNode');
goog.require('org.pepstock.charba.client.items.ScalesNode');
goog.require('org.pepstock.charba.client.items.TitleNode');
goog.require('org.pepstock.charba.client.items.TooltipNode');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.utils.JSON.$Overlay');

const ChartNode = goog.require('org.pepstock.charba.client.ChartNode$impl');
exports = ChartNode;

