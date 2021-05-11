goog.module('org.pepstock.charba.client.intl.NumberFormat');

goog.require('java.lang.String');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions');
goog.require('org.pepstock.charba.client.intl.AbstractFormat');
goog.require('org.pepstock.charba.client.intl.BaseFormatOptions');
goog.require('org.pepstock.charba.client.intl.CLocale');
goog.require('org.pepstock.charba.client.intl.FormatPart');
goog.require('org.pepstock.charba.client.intl.NumberFormatOptions');
goog.require('org.pepstock.charba.client.intl.NumberFormatWrapper');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const NumberFormat = goog.require('org.pepstock.charba.client.intl.NumberFormat$impl');
exports = NumberFormat;

