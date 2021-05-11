goog.module('org.pepstock.charba.client.events.AnimationProgressEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAnimationEvent = goog.require('org.pepstock.charba.client.events.AbstractAnimationEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let AnimationProgressEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationProgressEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let AnimationItem = goog.forwardDeclare('org.pepstock.charba.client.items.AnimationItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AnimationProgressEvent extends AbstractAnimationEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnimationProgressEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(/** Object */ nativeEvent, /** AnimationItem */ item) {
  AnimationProgressEvent.$clinit();
  let $instance = new AnimationProgressEvent();
  $instance.$ctor__org_pepstock_charba_client_events_AnimationProgressEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(nativeEvent, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_AnimationProgressEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(/** Object */ nativeEvent, /** AnimationItem */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractAnimationEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_AnimationItem(nativeEvent, AnimationProgressEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationProgressEvent, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (AnimationProgressEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {AnimationProgressEventHandler}*/ ($Casts.$to(handler, AnimationProgressEventHandler));
   myHandler.m_onProgress__org_pepstock_charba_client_events_AnimationProgressEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_AnimationProgressEvent() {
  return (AnimationProgressEvent.$clinit(), AnimationProgressEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationProgressEvent);
 }
 
 static $clinit() {
  AnimationProgressEvent.$clinit = () =>{};
  AnimationProgressEvent.$loadModules();
  AbstractAnimationEvent.$clinit();
  AnimationProgressEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationProgressEvent = EventType.m_create__java_lang_Class(Class.$get(AnimationProgressEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationProgressEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  AnimationProgressEventHandler = goog.module.get('org.pepstock.charba.client.events.AnimationProgressEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AnimationProgressEvent.$static_TYPE__org_pepstock_charba_client_events_AnimationProgressEvent;
$Util.$setClassMetadata(AnimationProgressEvent, "org.pepstock.charba.client.events.AnimationProgressEvent");

exports = AnimationProgressEvent;

//# sourceMappingURL=AnimationProgressEvent.js.map
