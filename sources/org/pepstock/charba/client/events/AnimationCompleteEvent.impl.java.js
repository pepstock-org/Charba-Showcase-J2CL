goog.module('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAnimationEvent = goog.require('org.pepstock.charba.client.events.AbstractAnimationEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let AnimationCompleteEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationCompleteEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let AnimationItem = goog.forwardDeclare('org.pepstock.charba.client.items.AnimationItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AnimationCompleteEvent extends AbstractAnimationEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnimationCompleteEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(/** Object */ nativeEvent, /** AnimationItem */ item) {
  AnimationCompleteEvent.$clinit();
  let $instance = new AnimationCompleteEvent();
  $instance.$ctor__org_pepstock_charba_client_events_AnimationCompleteEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(nativeEvent, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_AnimationCompleteEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(/** Object */ nativeEvent, /** AnimationItem */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractAnimationEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_AnimationItem(nativeEvent, AnimationCompleteEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationCompleteEvent, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (AnimationCompleteEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {AnimationCompleteEventHandler}*/ ($Casts.$to(handler, AnimationCompleteEventHandler));
   myHandler.m_onComplete__org_pepstock_charba_client_events_AnimationCompleteEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_AnimationCompleteEvent() {
  return (AnimationCompleteEvent.$clinit(), AnimationCompleteEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationCompleteEvent);
 }
 
 static $clinit() {
  AnimationCompleteEvent.$clinit = () =>{};
  AnimationCompleteEvent.$loadModules();
  AbstractAnimationEvent.$clinit();
  AnimationCompleteEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationCompleteEvent = EventType.m_create__java_lang_Class(Class.$get(AnimationCompleteEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationCompleteEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  AnimationCompleteEventHandler = goog.module.get('org.pepstock.charba.client.events.AnimationCompleteEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AnimationCompleteEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationCompleteEvent;
$Util.$setClassMetadata(AnimationCompleteEvent, "org.pepstock.charba.client.events.AnimationCompleteEvent");

exports = AnimationCompleteEvent;

//# sourceMappingURL=AnimationCompleteEvent.js.map
