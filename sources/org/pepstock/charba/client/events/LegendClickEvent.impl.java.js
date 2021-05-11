goog.module('org.pepstock.charba.client.events.LegendClickEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractLegendEvent = goog.require('org.pepstock.charba.client.events.AbstractLegendEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let LegendEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.LegendEventProperty$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let LegendClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEventHandler$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LegendClickEvent extends AbstractLegendEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendClickEvent} */
 static $create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(/** ChartEventContext */ eventContext, /** LegendItem */ item) {
  LegendClickEvent.$clinit();
  let $instance = new LegendClickEvent();
  $instance.$ctor__org_pepstock_charba_client_events_LegendClickEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(eventContext, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_LegendClickEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(/** ChartEventContext */ eventContext, /** LegendItem */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractLegendEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_items_LegendItem(eventContext, LegendClickEvent.$static_TYPE__org_pepstock_charba_client_events_LegendClickEvent, LegendEventProperty.f_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (LegendClickEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {LegendClickEventHandler}*/ ($Casts.$to(handler, LegendClickEventHandler));
   myHandler.m_onClick__org_pepstock_charba_client_events_LegendClickEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_LegendClickEvent() {
  return (LegendClickEvent.$clinit(), LegendClickEvent.$static_TYPE__org_pepstock_charba_client_events_LegendClickEvent);
 }
 
 static $clinit() {
  LegendClickEvent.$clinit = () =>{};
  LegendClickEvent.$loadModules();
  AbstractLegendEvent.$clinit();
  LegendClickEvent.$static_TYPE__org_pepstock_charba_client_events_LegendClickEvent = EventType.m_create__java_lang_Class(Class.$get(LegendClickEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendClickEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  LegendEventProperty = goog.module.get('org.pepstock.charba.client.enums.LegendEventProperty$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  LegendClickEventHandler = goog.module.get('org.pepstock.charba.client.events.LegendClickEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
LegendClickEvent.$static_TYPE__org_pepstock_charba_client_events_LegendClickEvent;
$Util.$setClassMetadata(LegendClickEvent, "org.pepstock.charba.client.events.LegendClickEvent");

exports = LegendClickEvent;

//# sourceMappingURL=LegendClickEvent.js.map
