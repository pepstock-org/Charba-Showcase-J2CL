goog.module('org.pepstock.charba.client.configuration.ScaleDateAdapter');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.adapters.DateAdapter');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.AxisContainer');
goog.require('org.pepstock.charba.client.intl.CLocale');
goog.require('org.pepstock.charba.client.intl.enums.Calendar');
goog.require('org.pepstock.charba.client.intl.enums.NumberingSystem');
goog.require('org.pepstock.charba.client.intl.enums.TimeZone');

const ScaleDateAdapter = goog.require('org.pepstock.charba.client.configuration.ScaleDateAdapter$impl');
exports = ScaleDateAdapter;

