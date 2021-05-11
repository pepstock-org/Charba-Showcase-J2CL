goog.module('org.pepstock.charba.client.options.AbstractNumberFormat');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions');
goog.require('org.pepstock.charba.client.intl.NumberFormatOptions');
goog.require('org.pepstock.charba.client.intl.enums.CompactDisplay');
goog.require('org.pepstock.charba.client.intl.enums.Currency');
goog.require('org.pepstock.charba.client.intl.enums.CurrencyDisplay');
goog.require('org.pepstock.charba.client.intl.enums.CurrencySign');
goog.require('org.pepstock.charba.client.intl.enums.LocaleMatcher');
goog.require('org.pepstock.charba.client.intl.enums.MeasureUnit');
goog.require('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay');
goog.require('org.pepstock.charba.client.intl.enums.Notation');
goog.require('org.pepstock.charba.client.intl.enums.NumberingSystem');
goog.require('org.pepstock.charba.client.intl.enums.SignDisplay');
goog.require('org.pepstock.charba.client.intl.enums.Style');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.IsNumberFormat');
goog.require('vmbootstrap.Casts');

const AbstractNumberFormat = goog.require('org.pepstock.charba.client.options.AbstractNumberFormat$impl');
exports = AbstractNumberFormat;

