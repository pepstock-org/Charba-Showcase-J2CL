goog.module('org.pepstock.charba.client.IsChart');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.AbstractChart');
goog.require('org.pepstock.charba.client.ChartNode');
goog.require('org.pepstock.charba.client.ChartTimerTask');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.UpdateConfiguration');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.data.Data');
goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Div.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.CursorType');
goog.require('org.pepstock.charba.client.enums.ImageMimeType');
goog.require('org.pepstock.charba.client.events.Event');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.events.HandlerRegistration');
goog.require('org.pepstock.charba.client.items.DatasetItem');
goog.require('org.pepstock.charba.client.items.DatasetReference');
goog.require('org.pepstock.charba.client.options.TransitionKey');
goog.require('org.pepstock.charba.client.plugins.Plugins');
goog.require('org.pepstock.charba.client.utils.CTimer');
goog.require('vmbootstrap.Exceptions');

const IsChart = goog.require('org.pepstock.charba.client.IsChart$impl');
exports = IsChart;

