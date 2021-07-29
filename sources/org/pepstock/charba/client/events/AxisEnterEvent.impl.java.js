goog.module('org.pepstock.charba.client.events.AxisEnterEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAxisEvent = goog.require('org.pepstock.charba.client.events.AbstractAxisEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisEnterEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AxisEnterEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AxisEnterEvent extends AbstractAxisEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AxisEnterEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis) {
  AxisEnterEvent.$clinit();
  let $instance = new AxisEnterEvent();
  $instance.$ctor__org_pepstock_charba_client_events_AxisEnterEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(nativeEvent, item, axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_AxisEnterEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_events_AbstractAxisEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(nativeEvent, AxisEnterEvent.$static_TYPE__org_pepstock_charba_client_events_AxisEnterEvent, item, axis);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (AxisEnterEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {AxisEnterEventHandler}*/ ($Casts.$to(handler, AxisEnterEventHandler));
   myHandler.m_onEnter__org_pepstock_charba_client_events_AxisEnterEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_AxisEnterEvent() {
  return (AxisEnterEvent.$clinit(), AxisEnterEvent.$static_TYPE__org_pepstock_charba_client_events_AxisEnterEvent);
 }
 
 static $clinit() {
  AxisEnterEvent.$clinit = () =>{};
  AxisEnterEvent.$loadModules();
  AbstractAxisEvent.$clinit();
  AxisEnterEvent.$static_TYPE__org_pepstock_charba_client_events_AxisEnterEvent = EventType.m_create__java_lang_Class(Class.$get(AxisEnterEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisEnterEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  AxisEnterEventHandler = goog.module.get('org.pepstock.charba.client.events.AxisEnterEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AxisEnterEvent.$static_TYPE__org_pepstock_charba_client_events_AxisEnterEvent;
$Util.$setClassMetadata(AxisEnterEvent, "org.pepstock.charba.client.events.AxisEnterEvent");

exports = AxisEnterEvent;

//# sourceMappingURL=AxisEnterEvent.js.map
