goog.module('org.pepstock.charba.client.events.AxisHoverEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAxisEvent = goog.require('org.pepstock.charba.client.events.AbstractAxisEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisHoverEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AxisHoverEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AxisHoverEvent extends AbstractAxisEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AxisHoverEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis) {
  AxisHoverEvent.$clinit();
  let $instance = new AxisHoverEvent();
  $instance.$ctor__org_pepstock_charba_client_events_AxisHoverEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(nativeEvent, item, axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_AxisHoverEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_events_AbstractAxisEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(nativeEvent, AxisHoverEvent.$static_TYPE__org_pepstock_charba_client_events_AxisHoverEvent, item, axis);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (AxisHoverEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {AxisHoverEventHandler}*/ ($Casts.$to(handler, AxisHoverEventHandler));
   myHandler.m_onHover__org_pepstock_charba_client_events_AxisHoverEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_AxisHoverEvent() {
  return (AxisHoverEvent.$clinit(), AxisHoverEvent.$static_TYPE__org_pepstock_charba_client_events_AxisHoverEvent);
 }
 
 static $clinit() {
  AxisHoverEvent.$clinit = () =>{};
  AxisHoverEvent.$loadModules();
  AbstractAxisEvent.$clinit();
  AxisHoverEvent.$static_TYPE__org_pepstock_charba_client_events_AxisHoverEvent = EventType.m_create__java_lang_Class(Class.$get(AxisHoverEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisHoverEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  AxisHoverEventHandler = goog.module.get('org.pepstock.charba.client.events.AxisHoverEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AxisHoverEvent.$static_TYPE__org_pepstock_charba_client_events_AxisHoverEvent;
$Util.$setClassMetadata(AxisHoverEvent, "org.pepstock.charba.client.events.AxisHoverEvent");

exports = AxisHoverEvent;

//# sourceMappingURL=AxisHoverEvent.js.map
