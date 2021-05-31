goog.module('org.pepstock.charba.client.items.DatasetItem');

goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.Envelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.enums.DefaultScaleId');
goog.require('org.pepstock.charba.client.enums.IndexAxis');
goog.require('org.pepstock.charba.client.items.DatasetElement');
goog.require('org.pepstock.charba.client.items.DatasetItem.Property');
goog.require('org.pepstock.charba.client.items.DatasetItemController');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('vmbootstrap.Casts');

const DatasetItem = goog.require('org.pepstock.charba.client.items.DatasetItem$impl');
exports = DatasetItem;

