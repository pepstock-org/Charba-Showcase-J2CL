goog.module('org.pepstock.charba.client.events.AbstractAnimationEvent');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractEvent');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.AnimationItem');
goog.require('vmbootstrap.Casts');

const AbstractAnimationEvent = goog.require('org.pepstock.charba.client.events.AbstractAnimationEvent$impl');
exports = AbstractAnimationEvent;

