goog.module('org.pepstock.charba.client.impl.charts.MeterOptions');

goog.require('java.lang.Double');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.MeterFormatCallback');
goog.require('org.pepstock.charba.client.colors.Color');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.configuration.AbstractPieOptions');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.enums.Render');
goog.require('org.pepstock.charba.client.impl.charts.BaseContext');
goog.require('org.pepstock.charba.client.impl.charts.MeterContext');
goog.require('org.pepstock.charba.client.items.FontItem');

const MeterOptions = goog.require('org.pepstock.charba.client.impl.charts.MeterOptions$impl');
exports = MeterOptions;

