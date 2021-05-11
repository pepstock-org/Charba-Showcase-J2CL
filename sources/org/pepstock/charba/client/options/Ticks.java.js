goog.module('org.pepstock.charba.client.options.Ticks');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultTicks');
goog.require('org.pepstock.charba.client.enums.CrossAlign');
goog.require('org.pepstock.charba.client.enums.ElementAlign');
goog.require('org.pepstock.charba.client.enums.TickSource');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.AbstractScale');
goog.require('org.pepstock.charba.client.options.Font');
goog.require('org.pepstock.charba.client.options.FontContainer');
goog.require('org.pepstock.charba.client.options.HasFont');
goog.require('org.pepstock.charba.client.options.Major');
goog.require('org.pepstock.charba.client.options.Padding');
goog.require('org.pepstock.charba.client.options.Ticks.Property');
goog.require('org.pepstock.charba.client.options.TicksNumberFormat');
goog.require('vmbootstrap.Casts');

const Ticks = goog.require('org.pepstock.charba.client.options.Ticks$impl');
exports = Ticks;

