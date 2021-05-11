goog.module('org.pepstock.charba.client.events.Event$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');

/**
 * @abstract
 */
class Event extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {*}*/
  this.f_source__org_pepstock_charba_client_events_Event_;
 }
 
 $ctor__org_pepstock_charba_client_events_Event__() {
  this.$ctor__java_lang_Object__();
 }
 /** @abstract @return {EventType} */
 m_getType__() {}
 /** @return {*} */
 m_getSource__() {
  return this.f_source__org_pepstock_charba_client_events_Event_;
 }
 /** @abstract */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {}
 
 m_setSource__java_lang_Object(/** * */ source) {
  this.f_source__org_pepstock_charba_client_events_Event_ = source;
 }
 
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Event;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Event, "org.pepstock.charba.client.events.Event");

exports = Event;

//# sourceMappingURL=Event.js.map
