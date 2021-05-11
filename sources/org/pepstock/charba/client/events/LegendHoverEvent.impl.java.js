goog.module('org.pepstock.charba.client.events.LegendHoverEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractLegendEvent = goog.require('org.pepstock.charba.client.events.AbstractLegendEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let LegendEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.LegendEventProperty$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let LegendHoverEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEventHandler$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LegendHoverEvent extends AbstractLegendEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendHoverEvent} */
 static $create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(/** ChartEventContext */ eventContext, /** LegendItem */ item) {
  LegendHoverEvent.$clinit();
  let $instance = new LegendHoverEvent();
  $instance.$ctor__org_pepstock_charba_client_events_LegendHoverEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(eventContext, item);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_LegendHoverEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(/** ChartEventContext */ eventContext, /** LegendItem */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractLegendEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_items_LegendItem(eventContext, LegendHoverEvent.$static_TYPE__org_pepstock_charba_client_events_LegendHoverEvent, LegendEventProperty.f_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty, item);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (LegendHoverEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {LegendHoverEventHandler}*/ ($Casts.$to(handler, LegendHoverEventHandler));
   myHandler.m_onHover__org_pepstock_charba_client_events_LegendHoverEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_LegendHoverEvent() {
  return (LegendHoverEvent.$clinit(), LegendHoverEvent.$static_TYPE__org_pepstock_charba_client_events_LegendHoverEvent);
 }
 
 static $clinit() {
  LegendHoverEvent.$clinit = () =>{};
  LegendHoverEvent.$loadModules();
  AbstractLegendEvent.$clinit();
  LegendHoverEvent.$static_TYPE__org_pepstock_charba_client_events_LegendHoverEvent = EventType.m_create__java_lang_Class(Class.$get(LegendHoverEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendHoverEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  LegendEventProperty = goog.module.get('org.pepstock.charba.client.enums.LegendEventProperty$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  LegendHoverEventHandler = goog.module.get('org.pepstock.charba.client.events.LegendHoverEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
LegendHoverEvent.$static_TYPE__org_pepstock_charba_client_events_LegendHoverEvent;
$Util.$setClassMetadata(LegendHoverEvent, "org.pepstock.charba.client.events.LegendHoverEvent");

exports = LegendHoverEvent;

//# sourceMappingURL=LegendHoverEvent.js.map
