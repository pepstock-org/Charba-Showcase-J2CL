goog.module('org.pepstock.charba.client.geo.SizeAxisMapper');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.geo.LegendAxisMapper');
goog.require('org.pepstock.charba.client.geo.SizeAxis');
goog.require('org.pepstock.charba.client.geo.SizeAxisMapper.Property');
goog.require('org.pepstock.charba.client.geo.enums.Mode');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.primitives.$int');

const SizeAxisMapper = goog.require('org.pepstock.charba.client.geo.SizeAxisMapper$impl');
exports = SizeAxisMapper;

