goog.module('org.pepstock.charba.client.events.TitleLeaveEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTitleEvent = goog.require('org.pepstock.charba.client.events.AbstractTitleEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let TitleLeaveEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.TitleLeaveEventHandler$impl');
let Title = goog.forwardDeclare('org.pepstock.charba.client.options.Title$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TitleLeaveEvent extends AbstractTitleEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TitleLeaveEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(/** Object */ nativeEvent, /** Title */ item) {
  TitleLeaveEvent.$clinit();
  let $instance = new TitleLeaveEvent();
  $instance.$ctor__org_pepstock_charba_client_events_TitleLeaveEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(nativeEvent, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_TitleLeaveEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(/** Object */ nativeEvent, /** Title */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractTitleEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_options_Title(nativeEvent, TitleLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_TitleLeaveEvent, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (TitleLeaveEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {TitleLeaveEventHandler}*/ ($Casts.$to(handler, TitleLeaveEventHandler));
   myHandler.m_onLeave__org_pepstock_charba_client_events_TitleLeaveEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_TitleLeaveEvent() {
  return (TitleLeaveEvent.$clinit(), TitleLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_TitleLeaveEvent);
 }
 
 static $clinit() {
  TitleLeaveEvent.$clinit = () =>{};
  TitleLeaveEvent.$loadModules();
  AbstractTitleEvent.$clinit();
  TitleLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_TitleLeaveEvent = EventType.m_create__java_lang_Class(Class.$get(TitleLeaveEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleLeaveEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  TitleLeaveEventHandler = goog.module.get('org.pepstock.charba.client.events.TitleLeaveEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
TitleLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_TitleLeaveEvent;
$Util.$setClassMetadata(TitleLeaveEvent, "org.pepstock.charba.client.events.TitleLeaveEvent");

exports = TitleLeaveEvent;

//# sourceMappingURL=TitleLeaveEvent.js.map
