goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemes');

goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartType');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.colors.Color');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.data.BarDataset');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.HasDataPoints');
goog.require('org.pepstock.charba.client.data.HovingDataset');
goog.require('org.pepstock.charba.client.data.HovingFlexDataset');
goog.require('org.pepstock.charba.client.data.LiningDataset');
goog.require('org.pepstock.charba.client.enums.DataType');
goog.require('org.pepstock.charba.client.impl.charts.GaugeChart');
goog.require('org.pepstock.charba.client.impl.charts.MeterChart');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemeLegendLabelsCallback');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory.ColorSchemesDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil');
goog.require('org.pepstock.charba.client.impl.plugins.enums.SchemeScope');
goog.require('org.pepstock.charba.client.items.PluginUpdateArgument');
goog.require('org.pepstock.charba.client.plugins.AbstractPlugin');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');
goog.require('vmbootstrap.Primitives');

const ColorSchemes = goog.require('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
exports = ColorSchemes;

