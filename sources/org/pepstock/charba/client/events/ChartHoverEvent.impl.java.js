goog.module('org.pepstock.charba.client.events.ChartHoverEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChartTypedEvent = goog.require('org.pepstock.charba.client.events.AbstractChartTypedEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ChartEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartEventProperty$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let ChartHoverEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartHoverEvent extends AbstractChartTypedEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartHoverEvent} */
 static $create__org_pepstock_charba_client_events_ChartEventContext__java_util_List(/** ChartEventContext */ eventContext, /** List<DatasetReference> */ items) {
  ChartHoverEvent.$clinit();
  let $instance = new ChartHoverEvent();
  $instance.$ctor__org_pepstock_charba_client_events_ChartHoverEvent__org_pepstock_charba_client_events_ChartEventContext__java_util_List(eventContext, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_ChartHoverEvent__org_pepstock_charba_client_events_ChartEventContext__java_util_List(/** ChartEventContext */ eventContext, /** List<DatasetReference> */ items) {
  this.$ctor__org_pepstock_charba_client_events_AbstractChartTypedEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key__java_util_List(eventContext, ChartHoverEvent.$static_TYPE__org_pepstock_charba_client_events_ChartHoverEvent, ChartEventProperty.f_ON_HOVER__org_pepstock_charba_client_enums_ChartEventProperty, items);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (ChartHoverEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {ChartHoverEventHandler}*/ ($Casts.$to(handler, ChartHoverEventHandler));
   myHandler.m_onHover__org_pepstock_charba_client_events_ChartHoverEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_ChartHoverEvent() {
  return (ChartHoverEvent.$clinit(), ChartHoverEvent.$static_TYPE__org_pepstock_charba_client_events_ChartHoverEvent);
 }
 
 static $clinit() {
  ChartHoverEvent.$clinit = () =>{};
  ChartHoverEvent.$loadModules();
  AbstractChartTypedEvent.$clinit();
  ChartHoverEvent.$static_TYPE__org_pepstock_charba_client_events_ChartHoverEvent = EventType.m_create__java_lang_Class(Class.$get(ChartHoverEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartHoverEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  ChartEventProperty = goog.module.get('org.pepstock.charba.client.enums.ChartEventProperty$impl');
  ChartHoverEventHandler = goog.module.get('org.pepstock.charba.client.events.ChartHoverEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
ChartHoverEvent.$static_TYPE__org_pepstock_charba_client_events_ChartHoverEvent;
$Util.$setClassMetadata(ChartHoverEvent, "org.pepstock.charba.client.events.ChartHoverEvent");

exports = ChartHoverEvent;

//# sourceMappingURL=ChartHoverEvent.js.map
