goog.module('org.pepstock.charba.client.events.ChartClickEventHandler');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.events.ChartClickEvent');
goog.require('org.pepstock.charba.client.events.ChartClickEventHandler.$LambdaAdaptor');
goog.require('org.pepstock.charba.client.events.ChartEventHandler');

const ChartClickEventHandler = goog.require('org.pepstock.charba.client.events.ChartClickEventHandler$impl');
exports = ChartClickEventHandler;

