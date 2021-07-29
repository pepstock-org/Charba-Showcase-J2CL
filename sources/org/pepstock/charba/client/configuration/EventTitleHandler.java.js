goog.module('org.pepstock.charba.client.configuration.EventTitleHandler');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.configuration.AbstractEventElementHandler');
goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AddHandlerEvent');
goog.require('org.pepstock.charba.client.events.RemoveHandlerEvent');
goog.require('org.pepstock.charba.client.events.TitleClickEvent');
goog.require('org.pepstock.charba.client.events.TitleEnterEvent');
goog.require('org.pepstock.charba.client.events.TitleLeaveEvent');

const EventTitleHandler = goog.require('org.pepstock.charba.client.configuration.EventTitleHandler$impl');
exports = EventTitleHandler;

