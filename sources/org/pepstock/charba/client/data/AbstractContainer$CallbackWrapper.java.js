goog.module('org.pepstock.charba.client.data.AbstractContainer.CallbackWrapper');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.callbacks.Scriptable');
goog.require('org.pepstock.charba.client.commons.CallbackProxy.$Overlay');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey');

const CallbackWrapper = goog.require('org.pepstock.charba.client.data.AbstractContainer.CallbackWrapper$impl');
exports = CallbackWrapper;

