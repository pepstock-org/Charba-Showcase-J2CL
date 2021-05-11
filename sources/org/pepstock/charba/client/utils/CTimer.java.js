goog.module('org.pepstock.charba.client.utils.CTimer');

goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.utils.CTimer.Status');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const CTimer = goog.require('org.pepstock.charba.client.utils.CTimer$impl');
exports = CTimer;

