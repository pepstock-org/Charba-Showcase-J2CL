goog.module('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractHandlerEvent = goog.require('org.pepstock.charba.client.events.AbstractHandlerEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let RemoveHandlerEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEventHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RemoveHandlerEvent extends AbstractHandlerEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!RemoveHandlerEvent} */
 static $create__org_pepstock_charba_client_events_EventType(/** EventType */ handlerType) {
  RemoveHandlerEvent.$clinit();
  let $instance = new RemoveHandlerEvent();
  $instance.$ctor__org_pepstock_charba_client_events_RemoveHandlerEvent__org_pepstock_charba_client_events_EventType(handlerType);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_RemoveHandlerEvent__org_pepstock_charba_client_events_EventType(/** EventType */ handlerType) {
  this.$ctor__org_pepstock_charba_client_events_AbstractHandlerEvent__org_pepstock_charba_client_events_EventType(handlerType);
 }
 /** @override @return {EventType} */
 m_getType__() {
  return RemoveHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_RemoveHandlerEvent;
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (RemoveHandlerEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {RemoveHandlerEventHandler}*/ ($Casts.$to(handler, RemoveHandlerEventHandler));
   myHandler.m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_RemoveHandlerEvent() {
  return (RemoveHandlerEvent.$clinit(), RemoveHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_RemoveHandlerEvent);
 }
 
 static $clinit() {
  RemoveHandlerEvent.$clinit = () =>{};
  RemoveHandlerEvent.$loadModules();
  AbstractHandlerEvent.$clinit();
  RemoveHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_RemoveHandlerEvent = EventType.m_create__java_lang_Class(Class.$get(RemoveHandlerEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RemoveHandlerEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  RemoveHandlerEventHandler = goog.module.get('org.pepstock.charba.client.events.RemoveHandlerEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
RemoveHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_RemoveHandlerEvent;
$Util.$setClassMetadata(RemoveHandlerEvent, "org.pepstock.charba.client.events.RemoveHandlerEvent");

exports = RemoveHandlerEvent;

//# sourceMappingURL=RemoveHandlerEvent.js.map
