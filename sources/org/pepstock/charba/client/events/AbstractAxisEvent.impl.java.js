goog.module('org.pepstock.charba.client.events.AbstractAxisEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractAxisEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleItem}*/
  this.f_item__org_pepstock_charba_client_events_AbstractAxisEvent_;
  /**@type {Axis}*/
  this.f_axis__org_pepstock_charba_client_events_AbstractAxisEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractAxisEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(/** Object */ nativeEvent, /** EventType */ type, /** ScaleItem */ item, /** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, type);
  this.f_item__org_pepstock_charba_client_events_AbstractAxisEvent_ = /**@type {ScaleItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(item, "Scale item argument"), ScaleItem));
  this.f_axis__org_pepstock_charba_client_events_AbstractAxisEvent_ = axis;
 }
 /** @return {ScaleItem} */
 m_getItem__() {
  return this.f_item__org_pepstock_charba_client_events_AbstractAxisEvent_;
 }
 /** @return {Axis} */
 m_getAxis__() {
  return this.f_axis__org_pepstock_charba_client_events_AbstractAxisEvent_;
 }
 
 static $clinit() {
  AbstractAxisEvent.$clinit = () =>{};
  AbstractAxisEvent.$loadModules();
  AbstractEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractAxisEvent;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractAxisEvent, "org.pepstock.charba.client.events.AbstractAxisEvent");

exports = AbstractAxisEvent;

//# sourceMappingURL=AbstractAxisEvent.js.map
