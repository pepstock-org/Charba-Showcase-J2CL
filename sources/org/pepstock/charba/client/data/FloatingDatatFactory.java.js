goog.module('org.pepstock.charba.client.data.FloatingDatatFactory');

goog.require('java.lang.Double');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.NativeArrayContainerFactory');
goog.require('org.pepstock.charba.client.data.FloatingData');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.primitives.$double');

const FloatingDatatFactory = goog.require('org.pepstock.charba.client.data.FloatingDatatFactory$impl');
exports = FloatingDatatFactory;

