goog.module('org.pepstock.charba.client.events.LegendLeaveEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractLegendEvent = goog.require('org.pepstock.charba.client.events.AbstractLegendEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let LegendEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.LegendEventProperty$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let LegendLeaveEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEventHandler$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LegendLeaveEvent extends AbstractLegendEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendLeaveEvent} */
 static $create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(/** ChartEventContext */ eventContext, /** LegendItem */ item) {
  LegendLeaveEvent.$clinit();
  let $instance = new LegendLeaveEvent();
  $instance.$ctor__org_pepstock_charba_client_events_LegendLeaveEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(eventContext, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_LegendLeaveEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(/** ChartEventContext */ eventContext, /** LegendItem */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractLegendEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_items_LegendItem(eventContext, LegendLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_LegendLeaveEvent, LegendEventProperty.f_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (LegendLeaveEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {LegendLeaveEventHandler}*/ ($Casts.$to(handler, LegendLeaveEventHandler));
   myHandler.m_onLeave__org_pepstock_charba_client_events_LegendLeaveEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_LegendLeaveEvent() {
  return (LegendLeaveEvent.$clinit(), LegendLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_LegendLeaveEvent);
 }
 
 static $clinit() {
  LegendLeaveEvent.$clinit = () =>{};
  LegendLeaveEvent.$loadModules();
  AbstractLegendEvent.$clinit();
  LegendLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_LegendLeaveEvent = EventType.m_create__java_lang_Class(Class.$get(LegendLeaveEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendLeaveEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  LegendEventProperty = goog.module.get('org.pepstock.charba.client.enums.LegendEventProperty$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  LegendLeaveEventHandler = goog.module.get('org.pepstock.charba.client.events.LegendLeaveEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
LegendLeaveEvent.$static_TYPE__org_pepstock_charba_client_events_LegendLeaveEvent;
$Util.$setClassMetadata(LegendLeaveEvent, "org.pepstock.charba.client.events.LegendLeaveEvent");

exports = LegendLeaveEvent;

//# sourceMappingURL=LegendLeaveEvent.js.map
