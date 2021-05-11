goog.module('org.pepstock.charba.client.options.ScaleDateAdapter');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.adapters.DateAdapter');
goog.require('org.pepstock.charba.client.adapters.DateAdapterOptions');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions');
goog.require('org.pepstock.charba.client.intl.CLocale');
goog.require('org.pepstock.charba.client.intl.enums.Calendar');
goog.require('org.pepstock.charba.client.intl.enums.NumberingSystem');
goog.require('org.pepstock.charba.client.intl.enums.TimeZone');
goog.require('org.pepstock.charba.client.options.AbstractModel');
goog.require('org.pepstock.charba.client.options.Adapters');
goog.require('vmbootstrap.Casts');

const ScaleDateAdapter = goog.require('org.pepstock.charba.client.options.ScaleDateAdapter$impl');
exports = ScaleDateAdapter;

