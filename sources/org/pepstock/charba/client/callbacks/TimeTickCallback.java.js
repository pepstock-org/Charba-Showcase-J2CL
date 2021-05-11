goog.module('org.pepstock.charba.client.callbacks.TimeTickCallback');

goog.require('java.util.Date');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.callbacks.TimeTickCallback.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.items.ScaleTickItem');

const TimeTickCallback = goog.require('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');
exports = TimeTickCallback;

