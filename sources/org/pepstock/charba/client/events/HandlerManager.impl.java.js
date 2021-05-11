goog.module('org.pepstock.charba.client.events.HandlerManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ChartEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventHandler$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.events.Event$impl');
let EventBus = goog.forwardDeclare('org.pepstock.charba.client.events.EventBus$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let HandlerRegistration = goog.forwardDeclare('org.pepstock.charba.client.events.HandlerRegistration$impl');
let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');

/**
 * @abstract
 */
class HandlerManager extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {EventBus}*/
  this.f_eventBus__org_pepstock_charba_client_events_HandlerManager_;
 }
 
 $ctor__org_pepstock_charba_client_events_HandlerManager__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_events_HandlerManager();
 }
 /** @abstract @return {IsChart} */
 m_getSource__() {}
 /** @return {HandlerRegistration} */
 m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(/** EventHandler */ handler, /** EventType */ type) {
  this.f_eventBus__org_pepstock_charba_client_events_HandlerManager_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(handler, type);
  return HandlerRegistration.$create__org_pepstock_charba_client_events_HandlerManager__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(this, handler, type);
 }
 
 m_fireEvent__org_pepstock_charba_client_events_Event(/** Event */ event) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(this.m_getSource__()) && !$Equality.$same(event, null)) {
   event.m_setSource__java_lang_Object(this.m_getSource__());
   this.f_eventBus__org_pepstock_charba_client_events_HandlerManager_.m_fireEvent__org_pepstock_charba_client_events_Event_$pp_org_pepstock_charba_client_events(event);
  }
 }
 /** @return {number} */
 m_getHandlerCount__org_pepstock_charba_client_events_EventType(/** EventType */ type) {
  return this.f_eventBus__org_pepstock_charba_client_events_HandlerManager_.m_getHandlerCount__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(type);
 }
 /** @return {boolean} */
 m_isEventHandled__org_pepstock_charba_client_events_EventType(/** EventType */ type) {
  return this.f_eventBus__org_pepstock_charba_client_events_HandlerManager_.m_isEventHandled__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(type);
 }
 
 m_removeHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(/** EventHandler */ handler, /** EventType */ type) {
  this.f_eventBus__org_pepstock_charba_client_events_HandlerManager_.m_removeHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(handler, type);
  if (ChartEventHandler.$isInstance(handler)) {
   this.m_fireEvent__org_pepstock_charba_client_events_Event(RemoveHandlerEvent.$create__org_pepstock_charba_client_events_EventType(type));
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_events_HandlerManager() {
  this.f_eventBus__org_pepstock_charba_client_events_HandlerManager_ = EventBus.$create__();
 }
 
 static $clinit() {
  HandlerManager.$clinit = () =>{};
  HandlerManager.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlerManager;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ChartEventHandler = goog.module.get('org.pepstock.charba.client.events.ChartEventHandler$impl');
  EventBus = goog.module.get('org.pepstock.charba.client.events.EventBus$impl');
  HandlerRegistration = goog.module.get('org.pepstock.charba.client.events.HandlerRegistration$impl');
  RemoveHandlerEvent = goog.module.get('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
 }
}
$Util.$setClassMetadata(HandlerManager, "org.pepstock.charba.client.events.HandlerManager");

exports = HandlerManager;

//# sourceMappingURL=HandlerManager.js.map
