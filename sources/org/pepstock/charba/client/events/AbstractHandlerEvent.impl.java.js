goog.module('org.pepstock.charba.client.events.AbstractHandlerEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.pepstock.charba.client.events.Event$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');

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
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
 }
}
$Util.$setClassMetadata(AbstractHandlerEvent, "org.pepstock.charba.client.events.AbstractHandlerEvent");

exports = AbstractHandlerEvent;

//# sourceMappingURL=AbstractHandlerEvent.js.map
