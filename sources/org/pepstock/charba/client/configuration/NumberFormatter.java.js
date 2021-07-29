goog.module('org.pepstock.charba.client.configuration.NumberFormatter');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration');
goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider');
goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions');
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
goog.require('org.pepstock.charba.client.items.NumberFormatItem');
goog.require('org.pepstock.charba.client.options.IsNumberFormat');
goog.require('vmbootstrap.Casts');

const NumberFormatter = goog.require('org.pepstock.charba.client.configuration.NumberFormatter$impl');
exports = NumberFormatter;
