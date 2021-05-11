goog.module('org.pepstock.charba.client.GlobalOptions');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.GlobalOptions.GlobalPlugins');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.defaults.chart.DefaultGlobalOptions');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultOptions');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultsBuilder');
goog.require('org.pepstock.charba.client.intl.CLocale');
goog.require('org.pepstock.charba.client.options.Options');
goog.require('org.pepstock.charba.client.options.Options.CommonProperty');
goog.require('org.pepstock.charba.client.options.Plugins');

const GlobalOptions = goog.require('org.pepstock.charba.client.GlobalOptions$impl');
exports = GlobalOptions;

