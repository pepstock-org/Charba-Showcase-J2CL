goog.module('org.pepstock.charba.client.events.AnimationProgressEvent');

goog.require('java.lang.Class');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.events.AbstractAnimationEvent');
goog.require('org.pepstock.charba.client.events.AnimationProgressEventHandler');
goog.require('org.pepstock.charba.client.events.EventHandler');
goog.require('org.pepstock.charba.client.events.EventType');
goog.require('org.pepstock.charba.client.items.AnimationItem');
goog.require('vmbootstrap.Casts');

const AnimationProgressEvent = goog.require('org.pepstock.charba.client.events.AnimationProgressEvent$impl');
exports = AnimationProgressEvent;

