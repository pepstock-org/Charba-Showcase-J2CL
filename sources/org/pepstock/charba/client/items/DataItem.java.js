goog.module('org.pepstock.charba.client.items.DataItem');

goog.require('java.lang.Double');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.BarDataset');
goog.require('org.pepstock.charba.client.data.DataPoint');
goog.require('org.pepstock.charba.client.data.FloatingData');
goog.require('org.pepstock.charba.client.enums.DataType');
goog.require('org.pepstock.charba.client.items.ItemsEnvelop');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.utils.JSON.$Overlay');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const DataItem = goog.require('org.pepstock.charba.client.items.DataItem$impl');
exports = DataItem;

