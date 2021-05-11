goog.module('org.pepstock.charba.client.intl.BaseFormatOptions');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseFormatOptions');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultBaseFormatOptions');
goog.require('org.pepstock.charba.client.intl.BaseFormatOptions.Property');
goog.require('org.pepstock.charba.client.intl.enums.LocaleMatcher');
goog.require('org.pepstock.charba.client.intl.enums.NumberingSystem');
goog.require('vmbootstrap.Casts');

const BaseFormatOptions = goog.require('org.pepstock.charba.client.intl.BaseFormatOptions$impl');
exports = BaseFormatOptions;

