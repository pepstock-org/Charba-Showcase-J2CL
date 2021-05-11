goog.module('org.pepstock.charba.client.events.ChartResizeEventHandler');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.events.ChartEventHandler');
goog.require('org.pepstock.charba.client.events.ChartResizeEvent');
goog.require('org.pepstock.charba.client.events.ChartResizeEventHandler.$LambdaAdaptor');

const ChartResizeEventHandler = goog.require('org.pepstock.charba.client.events.ChartResizeEventHandler$impl');
exports = ChartResizeEventHandler;

