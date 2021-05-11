goog.module('org.pepstock.charba.client.data.BorderItemsHandler');

goog.require('java.lang.Integer');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.Scriptable');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayObjectContainerList');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.data.AbstractBarBorderItem');
goog.require('org.pepstock.charba.client.enums.BorderItemType');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const BorderItemsHandler = goog.require('org.pepstock.charba.client.data.BorderItemsHandler$impl');
exports = BorderItemsHandler;

