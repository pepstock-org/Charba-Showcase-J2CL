goog.module('org.pepstock.charba.client.events.AbstractTitleEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let Title = goog.forwardDeclare('org.pepstock.charba.client.options.Title$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractTitleEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {Title}*/
  this.f_item__org_pepstock_charba_client_events_AbstractTitleEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractTitleEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_options_Title(/** Object */ nativeEvent, /** EventType */ type, /** Title */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, type);
  this.f_item__org_pepstock_charba_client_events_AbstractTitleEvent_ = /**@type {Title}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(item, "Title item argument"), Title));
 }
 /** @return {Title} */
 m_getItem__() {
  return this.f_item__org_pepstock_charba_client_events_AbstractTitleEvent_;
 }
 
 static $clinit() {
  AbstractTitleEvent.$clinit = () =>{};
  AbstractTitleEvent.$loadModules();
  AbstractEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTitleEvent;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Title = goog.module.get('org.pepstock.charba.client.options.Title$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractTitleEvent, "org.pepstock.charba.client.events.AbstractTitleEvent");

exports = AbstractTitleEvent;

//# sourceMappingURL=AbstractTitleEvent.js.map
