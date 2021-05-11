goog.module('org.pepstock.charba.client.data.DataPoint');

goog.require('java.util.Date');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.DataPoint.Property');
goog.require('org.pepstock.charba.client.data.FloatingData');
goog.require('org.pepstock.charba.client.items.ItemsEnvelop');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DataPoint = goog.require('org.pepstock.charba.client.data.DataPoint$impl');
exports = DataPoint;

