goog.module('org.pepstock.charba.client.events.AbstractAnimationEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let AnimationItem = goog.forwardDeclare('org.pepstock.charba.client.items.AnimationItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractAnimationEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationItem}*/
  this.f_item__org_pepstock_charba_client_events_AbstractAnimationEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractAnimationEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_items_AnimationItem(/** Object */ nativeEvent, /** EventType */ type, /** AnimationItem */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, type);
  this.f_item__org_pepstock_charba_client_events_AbstractAnimationEvent_ = /**@type {AnimationItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(item, "Animation item argument"), AnimationItem));
 }
 /** @return {AnimationItem} */
 m_getItem__() {
  return this.f_item__org_pepstock_charba_client_events_AbstractAnimationEvent_;
 }
 
 static $clinit() {
  AbstractAnimationEvent.$clinit = () =>{};
  AbstractAnimationEvent.$loadModules();
  AbstractEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractAnimationEvent;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AnimationItem = goog.module.get('org.pepstock.charba.client.items.AnimationItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractAnimationEvent, "org.pepstock.charba.client.events.AbstractAnimationEvent");

exports = AbstractAnimationEvent;

//# sourceMappingURL=AbstractAnimationEvent.js.map
