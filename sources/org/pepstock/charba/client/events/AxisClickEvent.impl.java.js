goog.module('org.pepstock.charba.client.events.AxisClickEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAxisEvent = goog.require('org.pepstock.charba.client.events.AbstractAxisEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let ScaleValueItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleValueItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AxisClickEvent extends AbstractAxisEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleValueItem}*/
  this.f_value__org_pepstock_charba_client_events_AxisClickEvent_;
 }
 /** @return {!AxisClickEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_ScaleValueItem(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis, /** ScaleValueItem */ value) {
  AxisClickEvent.$clinit();
  let $instance = new AxisClickEvent();
  $instance.$ctor__org_pepstock_charba_client_events_AxisClickEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_ScaleValueItem(nativeEvent, item, axis, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_AxisClickEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_ScaleValueItem(/** Object */ nativeEvent, /** ScaleItem */ item, /** Axis */ axis, /** ScaleValueItem */ value) {
  this.$ctor__org_pepstock_charba_client_events_AbstractAxisEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(nativeEvent, AxisClickEvent.$static_TYPE__org_pepstock_charba_client_events_AxisClickEvent, item, axis);
  this.f_value__org_pepstock_charba_client_events_AxisClickEvent_ = value;
 }
 /** @return {ScaleValueItem} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_client_events_AxisClickEvent_;
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (AxisClickEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {AxisClickEventHandler}*/ ($Casts.$to(handler, AxisClickEventHandler));
   myHandler.m_onClick__org_pepstock_charba_client_events_AxisClickEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_AxisClickEvent() {
  return (AxisClickEvent.$clinit(), AxisClickEvent.$static_TYPE__org_pepstock_charba_client_events_AxisClickEvent);
 }
 
 static $clinit() {
  AxisClickEvent.$clinit = () =>{};
  AxisClickEvent.$loadModules();
  AbstractAxisEvent.$clinit();
  AxisClickEvent.$static_TYPE__org_pepstock_charba_client_events_AxisClickEvent = EventType.m_create__java_lang_Class(Class.$get(AxisClickEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisClickEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  AxisClickEventHandler = goog.module.get('org.pepstock.charba.client.events.AxisClickEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AxisClickEvent.$static_TYPE__org_pepstock_charba_client_events_AxisClickEvent;
$Util.$setClassMetadata(AxisClickEvent, "org.pepstock.charba.client.events.AxisClickEvent");

exports = AxisClickEvent;

//# sourceMappingURL=AxisClickEvent.js.map
