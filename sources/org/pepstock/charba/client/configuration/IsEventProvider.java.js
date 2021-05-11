goog.module('org.pepstock.charba.client.configuration.IsEventProvider');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.events.AddHandlerEvent');
goog.require('org.pepstock.charba.client.events.AddHandlerEventHandler');
goog.require('org.pepstock.charba.client.events.RemoveHandlerEvent');
goog.require('org.pepstock.charba.client.events.RemoveHandlerEventHandler');

const IsEventProvider = goog.require('org.pepstock.charba.client.configuration.IsEventProvider$impl');
exports = IsEventProvider;

