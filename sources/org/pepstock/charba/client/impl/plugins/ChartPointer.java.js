goog.module('org.pepstock.charba.client.impl.plugins.ChartPointer');

goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.ScaleType');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay');
goog.require('org.pepstock.charba.client.enums.DefaultPluginId');
goog.require('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions');
goog.require('org.pepstock.charba.client.impl.plugins.ChartPointerOptions');
goog.require('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory');
goog.require('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory.ChartPointerDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.impl.plugins.enums.PointerElement');
goog.require('org.pepstock.charba.client.items.LegendHitBoxItem');
goog.require('org.pepstock.charba.client.items.PluginEventArgument');
goog.require('org.pepstock.charba.client.items.PluginUpdateArgument');
goog.require('org.pepstock.charba.client.plugins.AbstractPlugin');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const ChartPointer = goog.require('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
exports = ChartPointer;

