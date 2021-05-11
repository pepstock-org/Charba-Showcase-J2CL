goog.module('org.pepstock.charba.client.data.LiningDatasetFillHandler');

goog.require('java.lang.Boolean');
goog.require('java.lang.Integer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.CallbackFunctionContext.$Overlay');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.FillCallback');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.data.DataEnvelop');
goog.require('org.pepstock.charba.client.enums.Fill');
goog.require('org.pepstock.charba.client.enums.FillingMode');
goog.require('org.pepstock.charba.client.enums.IsFill');
goog.require('org.pepstock.charba.client.options.FillHandler');
goog.require('org.pepstock.charba.client.options.FillHandler.Property');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const LiningDatasetFillHandler = goog.require('org.pepstock.charba.client.data.LiningDatasetFillHandler$impl');
exports = LiningDatasetFillHandler;

