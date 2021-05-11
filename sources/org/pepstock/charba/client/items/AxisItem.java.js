goog.module('org.pepstock.charba.client.items.AxisItem');

goog.require('java.util.Date');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.ConfigurationEnvelop');
goog.require('org.pepstock.charba.client.enums.Position');
goog.require('org.pepstock.charba.client.items.BaseBoxItem.Property');
goog.require('org.pepstock.charba.client.items.BaseBoxNodeItem.Property');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.items.ScaleItem.Property');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const AxisItem = goog.require('org.pepstock.charba.client.items.AxisItem$impl');
exports = AxisItem;

