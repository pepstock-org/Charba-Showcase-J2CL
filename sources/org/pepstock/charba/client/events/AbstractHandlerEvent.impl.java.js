goog.module('org.pepstock.charba.client.events.AbstractHandlerEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.pepstock.charba.client.events.Event$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractHandlerEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {EventType}*/
  this.f_handlerType__org_pepstock_charba_client_events_AbstractHandlerEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractHandlerEvent__org_pepstock_charba_client_events_EventType(/** EventType */ handlerType) {
  this.$ctor__org_pepstock_charba_client_events_Event__();
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(handlerType);
  this.f_handlerType__org_pepstock_charba_client_events_AbstractHandlerEvent_ = handlerType;
 }
 /** @return {boolean} */
 m_isRecognize__java_util_List(/** List<EventType> */ types) {
  if (!$Equality.$same(types, null) && !types.isEmpty()) {
   for (let $iterator = types.m_iterator__(); $iterator.m_hasNext__(); ) {
    let type = /**@type {EventType}*/ ($Casts.$to($iterator.m_next__(), EventType));
    {
     if (type.equals(this.f_handlerType__org_pepstock_charba_client_events_AbstractHandlerEvent_)) {
      return true;
     }
    }
   }
  }
  return false;
 }
 /** @return {boolean} */
 m_isRecognize__org_pepstock_charba_client_events_EventType(/** EventType */ type) {
  return this.f_handlerType__org_pepstock_charba_client_events_AbstractHandlerEvent_.equals(type);
 }
 
 static $clinit() {
  AbstractHandlerEvent.$clinit = () =>{};
  AbstractHandlerEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractHandlerEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractHandlerEvent, "org.pepstock.charba.client.events.AbstractHandlerEvent");

exports = AbstractHandlerEvent;

//# sourceMappingURL=AbstractHandlerEvent.js.map
