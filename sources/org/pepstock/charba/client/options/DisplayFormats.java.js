goog.module('org.pepstock.charba.client.options.DisplayFormats');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.adapters.DateAdapter');
goog.require('org.pepstock.charba.client.adapters.DateAdapterFormats');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.NoDefaults');
goog.require('org.pepstock.charba.client.enums.TimeUnit');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Time');

const DisplayFormats = goog.require('org.pepstock.charba.client.options.DisplayFormats$impl');
exports = DisplayFormats;

