goog.module('org.pepstock.charba.client.events.AnimationCompleteEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractAnimationEvent');
goog.require('org.pepstock.charba.client.events.AnimationCompleteEventHandler');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.AnimationItem');
goog.require('vmbootstrap.Casts');

const AnimationCompleteEvent = goog.require('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');
exports = AnimationCompleteEvent;

