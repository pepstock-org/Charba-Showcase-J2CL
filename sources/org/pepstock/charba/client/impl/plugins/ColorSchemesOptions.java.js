goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.ColorUtil');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.impl.plugins.ColorScheme');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemes');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions.Property');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil');
goog.require('org.pepstock.charba.client.impl.plugins.IsColorSchemesDefaultOptions');
goog.require('org.pepstock.charba.client.impl.plugins.enums.BrewerScheme');
goog.require('org.pepstock.charba.client.impl.plugins.enums.SchemeScope');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions');
goog.require('vmbootstrap.Casts');

const ColorSchemesOptions = goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
exports = ColorSchemesOptions;

