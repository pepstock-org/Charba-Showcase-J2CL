goog.module('org.pepstock.charba.client.items.DatasetElement');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.callbacks.CallbacksEnvelop');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.controllers.ControllersEnvelop');
goog.require('org.pepstock.charba.client.items.DatasetElement.DatasetItemFactory');
goog.require('org.pepstock.charba.client.items.DatasetElement.Property');
goog.require('org.pepstock.charba.client.items.DatasetElementOptions');
goog.require('org.pepstock.charba.client.items.Parsed');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');

const DatasetElement = goog.require('org.pepstock.charba.client.items.DatasetElement$impl');
exports = DatasetElement;

