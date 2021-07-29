goog.module('org.pepstock.charba.client.events.TitleClickEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTitleEvent = goog.require('org.pepstock.charba.client.events.AbstractTitleEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let TitleClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEventHandler$impl');
let Title = goog.forwardDeclare('org.pepstock.charba.client.options.Title$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TitleClickEvent extends AbstractTitleEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TitleClickEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(/** Object */ nativeEvent, /** Title */ item) {
  TitleClickEvent.$clinit();
  let $instance = new TitleClickEvent();
  $instance.$ctor__org_pepstock_charba_client_events_TitleClickEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(nativeEvent, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_TitleClickEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(/** Object */ nativeEvent, /** Title */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractTitleEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_options_Title(nativeEvent, TitleClickEvent.$static_TYPE__org_pepstock_charba_client_events_TitleClickEvent, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (TitleClickEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {TitleClickEventHandler}*/ ($Casts.$to(handler, TitleClickEventHandler));
   myHandler.m_onClick__org_pepstock_charba_client_events_TitleClickEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_TitleClickEvent() {
  return (TitleClickEvent.$clinit(), TitleClickEvent.$static_TYPE__org_pepstock_charba_client_events_TitleClickEvent);
 }
 
 static $clinit() {
  TitleClickEvent.$clinit = () =>{};
  TitleClickEvent.$loadModules();
  AbstractTitleEvent.$clinit();
  TitleClickEvent.$static_TYPE__org_pepstock_charba_client_events_TitleClickEvent = EventType.m_create__java_lang_Class(Class.$get(TitleClickEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleClickEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  TitleClickEventHandler = goog.module.get('org.pepstock.charba.client.events.TitleClickEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
TitleClickEvent.$static_TYPE__org_pepstock_charba_client_events_TitleClickEvent;
$Util.$setClassMetadata(TitleClickEvent, "org.pepstock.charba.client.events.TitleClickEvent");

exports = TitleClickEvent;

//# sourceMappingURL=TitleClickEvent.js.map
