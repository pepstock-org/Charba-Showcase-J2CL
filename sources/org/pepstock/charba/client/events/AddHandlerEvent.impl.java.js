goog.module('org.pepstock.charba.client.events.AddHandlerEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractHandlerEvent = goog.require('org.pepstock.charba.client.events.AbstractHandlerEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let AddHandlerEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AddHandlerEvent extends AbstractHandlerEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AddHandlerEvent} */
 static $create__org_pepstock_charba_client_events_EventType(/** EventType */ handlerType) {
  AddHandlerEvent.$clinit();
  let $instance = new AddHandlerEvent();
  $instance.$ctor__org_pepstock_charba_client_events_AddHandlerEvent__org_pepstock_charba_client_events_EventType(handlerType);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_AddHandlerEvent__org_pepstock_charba_client_events_EventType(/** EventType */ handlerType) {
  this.$ctor__org_pepstock_charba_client_events_AbstractHandlerEvent__org_pepstock_charba_client_events_EventType(handlerType);
 }
 /** @override @return {EventType} */
 m_getType__() {
  return AddHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_AddHandlerEvent;
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (AddHandlerEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {AddHandlerEventHandler}*/ ($Casts.$to(handler, AddHandlerEventHandler));
   myHandler.m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_AddHandlerEvent() {
  return (AddHandlerEvent.$clinit(), AddHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_AddHandlerEvent);
 }
 
 static $clinit() {
  AddHandlerEvent.$clinit = () =>{};
  AddHandlerEvent.$loadModules();
  AbstractHandlerEvent.$clinit();
  AddHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_AddHandlerEvent = EventType.m_create__java_lang_Class(Class.$get(AddHandlerEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AddHandlerEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  AddHandlerEventHandler = goog.module.get('org.pepstock.charba.client.events.AddHandlerEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AddHandlerEvent.$static_TYPE__org_pepstock_charba_client_events_AddHandlerEvent;
$Util.$setClassMetadata(AddHandlerEvent, "org.pepstock.charba.client.events.AddHandlerEvent");

exports = AddHandlerEvent;

//# sourceMappingURL=AddHandlerEvent.js.map
