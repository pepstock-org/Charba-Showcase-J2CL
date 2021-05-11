goog.module('org.pepstock.charba.client.events.AxisClickEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let ScaleValueItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleValueItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AxisClickEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleItem}*/
  this.f_item__org_pepstock_charba_client_events_AxisClickEvent_;
  /**@type {Axis}*/
  this.f_axis__org_pepstock_charba_client_events_AxisClickEvent_;
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
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, AxisClickEvent.$static_TYPE__org_pepstock_charba_client_events_AxisClickEvent);
  this.f_item__org_pepstock_charba_client_events_AxisClickEvent_ = /**@type {ScaleItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(item, "Scale item argument"), ScaleItem));
  this.f_axis__org_pepstock_charba_client_events_AxisClickEvent_ = axis;
  this.f_value__org_pepstock_charba_client_events_AxisClickEvent_ = value;
 }
 /** @return {ScaleItem} */
 m_getItem__() {
  return this.f_item__org_pepstock_charba_client_events_AxisClickEvent_;
 }
 /** @return {Axis} */
 m_getAxis__() {
  return this.f_axis__org_pepstock_charba_client_events_AxisClickEvent_;
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
  AbstractEvent.$clinit();
  AxisClickEvent.$static_TYPE__org_pepstock_charba_client_events_AxisClickEvent = EventType.m_create__java_lang_Class(Class.$get(AxisClickEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisClickEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AxisClickEventHandler = goog.module.get('org.pepstock.charba.client.events.AxisClickEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
AxisClickEvent.$static_TYPE__org_pepstock_charba_client_events_AxisClickEvent;
$Util.$setClassMetadata(AxisClickEvent, "org.pepstock.charba.client.events.AxisClickEvent");

exports = AxisClickEvent;

//# sourceMappingURL=AxisClickEvent.js.map
