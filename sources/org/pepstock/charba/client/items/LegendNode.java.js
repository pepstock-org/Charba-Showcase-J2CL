goog.module('org.pepstock.charba.client.items.LegendNode');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.Envelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.items.BaseBoxNodeItem');
goog.require('org.pepstock.charba.client.items.LegendHitBoxItem');
goog.require('org.pepstock.charba.client.items.LegendItem');
goog.require('org.pepstock.charba.client.items.LegendNode.Property');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const LegendNode = goog.require('org.pepstock.charba.client.items.LegendNode$impl');
exports = LegendNode;

