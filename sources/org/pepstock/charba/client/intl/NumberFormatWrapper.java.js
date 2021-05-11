goog.module('org.pepstock.charba.client.intl.NumberFormatWrapper');

goog.require('java.lang.Double');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions');
goog.require('org.pepstock.charba.client.intl.AbtsractFormatWrapper');
goog.require('org.pepstock.charba.client.intl.CLocale');
goog.require('org.pepstock.charba.client.intl.NativeNumberFormat.$Overlay');
goog.require('org.pepstock.charba.client.intl.NumberFormatOptions');
goog.require('org.pepstock.charba.client.intl.NumberFormatWrapper.ResolvedOptions');
goog.require('vmbootstrap.Casts');

const NumberFormatWrapper = goog.require('org.pepstock.charba.client.intl.NumberFormatWrapper$impl');
exports = NumberFormatWrapper;

