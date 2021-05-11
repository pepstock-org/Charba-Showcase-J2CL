goog.module('org.pepstock.charba.client.events.HandlerManager');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.events.ChartEventHandler');
goog.require('org.pepstock.charba.client.events.Event');
goog.require('org.pepstock.charba.client.events.EventBus');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.events.HandlerRegistration');
goog.require('org.pepstock.charba.client.events.RemoveHandlerEvent');

const HandlerManager = goog.require('org.pepstock.charba.client.events.HandlerManager$impl');
exports = HandlerManager;

