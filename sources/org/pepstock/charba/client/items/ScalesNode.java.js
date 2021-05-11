goog.module('org.pepstock.charba.client.items.ScalesNode');

goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.commons.IsEnvelop');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.items.ScaleItem');
goog.require('org.pepstock.charba.client.options.IsScaleId');
goog.require('vmbootstrap.Casts');

const ScalesNode = goog.require('org.pepstock.charba.client.items.ScalesNode$impl');
exports = ScalesNode;

