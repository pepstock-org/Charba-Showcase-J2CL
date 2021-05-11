goog.module('org.pepstock.charba.client.intl.NumberFormatOptions');

goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.Collections');
goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions');
goog.require('org.pepstock.charba.client.intl.BaseFormatOptions');
goog.require('org.pepstock.charba.client.intl.NumberFormatOptions.NumberFormatOptionsFactory');
goog.require('org.pepstock.charba.client.intl.NumberFormatOptions.Property');
goog.require('org.pepstock.charba.client.intl.enums.CompactDisplay');
goog.require('org.pepstock.charba.client.intl.enums.Currency');
goog.require('org.pepstock.charba.client.intl.enums.CurrencyDisplay');
goog.require('org.pepstock.charba.client.intl.enums.CurrencySign');
goog.require('org.pepstock.charba.client.intl.enums.MeasureUnit');
goog.require('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay');
goog.require('org.pepstock.charba.client.intl.enums.Notation');
goog.require('org.pepstock.charba.client.intl.enums.SignDisplay');
goog.require('org.pepstock.charba.client.intl.enums.Style');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const NumberFormatOptions = goog.require('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
exports = NumberFormatOptions;

