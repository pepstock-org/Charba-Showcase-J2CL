goog.module('org.pepstock.charba.client.events.AxisLeaveEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAxisEvent = goog.require('org.pepstock.charba.client.events.AbstractAxisEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisLeaveEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AxisLeaveEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AxisLeaveEvent extends AbstractAxisEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AxisLeaveEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis) {
  AxisLeaveEvent.$clinit();
  let $instance = new AxisLeaveEvent();
  $instance.$ctor__org_pepstock_charba_client_events_AxisLeaveEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(nativeEvent, item, axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_AxisLeaveEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_events_AbstractAxisEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(nativeEvent, AxisLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_AxisLeaveEvent, item, axis);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (AxisLeaveEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {AxisLeaveEventHandler}*/ ($Casts.$to(handler, AxisLeaveEventHandler));
   myHandler.m_onLeave__org_pepstock_charba_client_events_AxisLeaveEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_AxisLeaveEvent() {
  return (AxisLeaveEvent.$clinit(), AxisLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_AxisLeaveEvent);
 }
 
 static $clinit() {
  AxisLeaveEvent.$clinit = () =>{};
  AxisLeaveEvent.$loadModules();
  AbstractAxisEvent.$clinit();
  AxisLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_AxisLeaveEvent = EventType.m_create__java_lang_Class(Class.$get(AxisLeaveEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisLeaveEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  AxisLeaveEventHandler = goog.module.get('org.pepstock.charba.client.events.AxisLeaveEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AxisLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_AxisLeaveEvent;
$Util.$setClassMetadata(AxisLeaveEvent, "org.pepstock.charba.client.events.AxisLeaveEvent");

exports = AxisLeaveEvent;

//# sourceMappingURL=AxisLeaveEvent.js.map
