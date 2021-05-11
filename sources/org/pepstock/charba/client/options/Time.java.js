goog.module('org.pepstock.charba.client.options.Time');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTime');
goog.require('org.pepstock.charba.client.enums.IsoWeekDay');
goog.require('org.pepstock.charba.client.enums.TimeUnit');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.AbstractScale');
goog.require('org.pepstock.charba.client.options.DisplayFormats');
goog.require('org.pepstock.charba.client.options.Time.Property');
goog.require('vmbootstrap.Casts');

const Time = goog.require('org.pepstock.charba.client.options.Time$impl');
exports = Time;

