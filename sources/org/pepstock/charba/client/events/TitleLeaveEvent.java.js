goog.module('org.pepstock.charba.client.events.TitleLeaveEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractTitleEvent');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.events.TitleLeaveEventHandler');
goog.require('org.pepstock.charba.client.options.Title');
goog.require('vmbootstrap.Casts');

const TitleLeaveEvent = goog.require('org.pepstock.charba.client.events.TitleLeaveEvent$impl');
exports = TitleLeaveEvent;

