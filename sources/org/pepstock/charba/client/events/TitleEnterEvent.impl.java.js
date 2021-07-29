goog.module('org.pepstock.charba.client.events.TitleEnterEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTitleEvent = goog.require('org.pepstock.charba.client.events.AbstractTitleEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let TitleEnterEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.TitleEnterEventHandler$impl');
let Title = goog.forwardDeclare('org.pepstock.charba.client.options.Title$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TitleEnterEvent extends AbstractTitleEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TitleEnterEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(/** Object */ nativeEvent, /** Title */ item) {
  TitleEnterEvent.$clinit();
  let $instance = new TitleEnterEvent();
  $instance.$ctor__org_pepstock_charba_client_events_TitleEnterEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(nativeEvent, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_TitleEnterEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(/** Object */ nativeEvent, /** Title */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractTitleEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_options_Title(nativeEvent, TitleEnterEvent.$static_TYPE__org_pepstock_charba_client_events_TitleEnterEvent, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (TitleEnterEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {TitleEnterEventHandler}*/ ($Casts.$to(handler, TitleEnterEventHandler));
   myHandler.m_onEnter__org_pepstock_charba_client_events_TitleEnterEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_TitleEnterEvent() {
  return (TitleEnterEvent.$clinit(), TitleEnterEvent.$static_TYPE__org_pepstock_charba_client_events_TitleEnterEvent);
 }
 
 static $clinit() {
  TitleEnterEvent.$clinit = () =>{};
  TitleEnterEvent.$loadModules();
  AbstractTitleEvent.$clinit();
  TitleEnterEvent.$static_TYPE__org_pepstock_charba_client_events_TitleEnterEvent = EventType.m_create__java_lang_Class(Class.$get(TitleEnterEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleEnterEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  TitleEnterEventHandler = goog.module.get('org.pepstock.charba.client.events.TitleEnterEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
TitleEnterEvent.$static_TYPE__org_pepstock_charba_client_events_TitleEnterEvent;
$Util.$setClassMetadata(TitleEnterEvent, "org.pepstock.charba.client.events.TitleEnterEvent");

exports = TitleEnterEvent;

//# sourceMappingURL=TitleEnterEvent.js.map
