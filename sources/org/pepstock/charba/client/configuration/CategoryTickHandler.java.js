goog.module('org.pepstock.charba.client.configuration.CategoryTickHandler');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.CategoryTickCallback');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.configuration.AbstractTickHandler');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.CartesianCategoryTick');
goog.require('vmbootstrap.Casts');

const CategoryTickHandler = goog.require('org.pepstock.charba.client.configuration.CategoryTickHandler$impl');
exports = CategoryTickHandler;

