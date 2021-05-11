goog.module('org.pepstock.charba.client.configuration.Line');

goog.require('java.lang.Integer');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.defaults.IsDefaultLine');
goog.require('org.pepstock.charba.client.enums.CapStyle');
goog.require('org.pepstock.charba.client.enums.CubicInterpolationMode');
goog.require('org.pepstock.charba.client.enums.IsFill');
goog.require('org.pepstock.charba.client.enums.JoinStyle');
goog.require('org.pepstock.charba.client.options.AbstractElement');

const Line = goog.require('org.pepstock.charba.client.configuration.Line$impl');
exports = Line;

