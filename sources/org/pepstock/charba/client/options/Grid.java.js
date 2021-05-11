goog.module('org.pepstock.charba.client.options.Grid');

goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Array.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultGrid');
goog.require('org.pepstock.charba.client.options.AbstractScale');
goog.require('org.pepstock.charba.client.options.AbstractScaleLines');
goog.require('org.pepstock.charba.client.options.Grid.Property');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');
goog.require('vmbootstrap.primitives.$int');

const Grid = goog.require('org.pepstock.charba.client.options.Grid$impl');
exports = Grid;

