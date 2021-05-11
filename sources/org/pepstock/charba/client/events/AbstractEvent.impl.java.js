goog.module('org.pepstock.charba.client.events.AbstractEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.pepstock.charba.client.events.Event$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {EventType}*/
  this.f_type__org_pepstock_charba_client_events_AbstractEvent_;
  /**@type {Object}*/
  this.f_nativeEvent__org_pepstock_charba_client_events_AbstractEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(/** Object */ nativeEvent, /** EventType */ type) {
  this.$ctor__org_pepstock_charba_client_events_Event__();
  this.f_nativeEvent__org_pepstock_charba_client_events_AbstractEvent_ = /**@type {Object}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(nativeEvent, "Native event argument"), $Overlay));
  this.f_type__org_pepstock_charba_client_events_AbstractEvent_ = /**@type {EventType}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(type, "Event type argument"), EventType));
 }
 /** @override @return {EventType} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_events_AbstractEvent_;
 }
 /** @return {Object} */
 m_getNativeEvent__() {
  return this.f_nativeEvent__org_pepstock_charba_client_events_AbstractEvent_;
 }
 /** @return {IsChart} */
 m_getChart__() {
  return /**@type {IsChart}*/ ($Casts.$to(this.m_getSource__(), IsChart));
 }
 
 static $clinit() {
  AbstractEvent.$clinit = () =>{};
  AbstractEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractEvent;
 }
 
 static $loadModules() {
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractEvent, "org.pepstock.charba.client.events.AbstractEvent");

exports = AbstractEvent;

//# sourceMappingURL=AbstractEvent.js.map
