goog.module('org.pepstock.charba.client.options.Line');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayInteger.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultLine');
goog.require('org.pepstock.charba.client.enums.CapStyle');
goog.require('org.pepstock.charba.client.enums.CubicInterpolationMode');
goog.require('org.pepstock.charba.client.enums.IsFill');
goog.require('org.pepstock.charba.client.enums.JoinStyle');
goog.require('org.pepstock.charba.client.options.AbstractElement');
goog.require('org.pepstock.charba.client.options.Elements');
goog.require('org.pepstock.charba.client.options.FillHandler');
goog.require('org.pepstock.charba.client.options.HasFill');
goog.require('org.pepstock.charba.client.options.Line.Property');
goog.require('vmbootstrap.Casts');

const Line = goog.require('org.pepstock.charba.client.options.Line$impl');
exports = Line;

