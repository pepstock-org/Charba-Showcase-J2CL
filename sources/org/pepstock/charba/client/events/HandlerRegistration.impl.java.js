goog.module('org.pepstock.charba.client.events.HandlerRegistration$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let HandlerManager = goog.forwardDeclare('org.pepstock.charba.client.events.HandlerManager$impl');

class HandlerRegistration extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HandlerManager}*/
  this.f_manager__org_pepstock_charba_client_events_HandlerRegistration_;
  /**@type {EventHandler}*/
  this.f_handler__org_pepstock_charba_client_events_HandlerRegistration_;
  /**@type {EventType}*/
  this.f_type__org_pepstock_charba_client_events_HandlerRegistration_;
 }
 /** @return {!HandlerRegistration} */
 static $create__org_pepstock_charba_client_events_HandlerManager__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(/** HandlerManager */ manager, /** EventHandler */ handler, /** EventType */ type) {
  HandlerRegistration.$clinit();
  let $instance = new HandlerRegistration();
  $instance.$ctor__org_pepstock_charba_client_events_HandlerRegistration__org_pepstock_charba_client_events_HandlerManager__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(manager, handler, type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_HandlerRegistration__org_pepstock_charba_client_events_HandlerManager__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(/** HandlerManager */ manager, /** EventHandler */ handler, /** EventType */ type) {
  this.$ctor__java_lang_Object__();
  this.f_manager__org_pepstock_charba_client_events_HandlerRegistration_ = manager;
  this.f_handler__org_pepstock_charba_client_events_HandlerRegistration_ = handler;
  this.f_type__org_pepstock_charba_client_events_HandlerRegistration_ = type;
 }
 
 m_removeHandler__() {
  this.f_manager__org_pepstock_charba_client_events_HandlerRegistration_.m_removeHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(this.f_handler__org_pepstock_charba_client_events_HandlerRegistration_, this.f_type__org_pepstock_charba_client_events_HandlerRegistration_);
 }
 
 static $clinit() {
  HandlerRegistration.$clinit = () =>{};
  HandlerRegistration.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlerRegistration;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(HandlerRegistration, "org.pepstock.charba.client.events.HandlerRegistration");

exports = HandlerRegistration;

//# sourceMappingURL=HandlerRegistration.js.map
