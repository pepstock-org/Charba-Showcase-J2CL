goog.module('org.pepstock.charba.client.events.ChartClickEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChartTypedEvent = goog.require('org.pepstock.charba.client.events.AbstractChartTypedEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ChartEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartEventProperty$impl');
let ChartClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.ChartClickEventHandler$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartClickEvent extends AbstractChartTypedEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartClickEvent} */
 static $create__org_pepstock_charba_client_events_ChartEventContext__java_util_List(/** ChartEventContext */ eventContext, /** List<DatasetReference> */ items) {
  ChartClickEvent.$clinit();
  let $instance = new ChartClickEvent();
  $instance.$ctor__org_pepstock_charba_client_events_ChartClickEvent__org_pepstock_charba_client_events_ChartEventContext__java_util_List(eventContext, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_ChartClickEvent__org_pepstock_charba_client_events_ChartEventContext__java_util_List(/** ChartEventContext */ eventContext, /** List<DatasetReference> */ items) {
  this.$ctor__org_pepstock_charba_client_events_AbstractChartTypedEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key__java_util_List(eventContext, ChartClickEvent.$static_TYPE__org_pepstock_charba_client_events_ChartClickEvent, ChartEventProperty.f_ON_CLICK__org_pepstock_charba_client_enums_ChartEventProperty, items);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (ChartClickEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {ChartClickEventHandler}*/ ($Casts.$to(handler, ChartClickEventHandler));
   myHandler.m_onClick__org_pepstock_charba_client_events_ChartClickEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_ChartClickEvent() {
  return (ChartClickEvent.$clinit(), ChartClickEvent.$static_TYPE__org_pepstock_charba_client_events_ChartClickEvent);
 }
 
 static $clinit() {
  ChartClickEvent.$clinit = () =>{};
  ChartClickEvent.$loadModules();
  AbstractChartTypedEvent.$clinit();
  ChartClickEvent.$static_TYPE__org_pepstock_charba_client_events_ChartClickEvent = EventType.m_create__java_lang_Class(Class.$get(ChartClickEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartClickEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  ChartEventProperty = goog.module.get('org.pepstock.charba.client.enums.ChartEventProperty$impl');
  ChartClickEventHandler = goog.module.get('org.pepstock.charba.client.events.ChartClickEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
ChartClickEvent.$static_TYPE__org_pepstock_charba_client_events_ChartClickEvent;
$Util.$setClassMetadata(ChartClickEvent, "org.pepstock.charba.client.events.ChartClickEvent");

exports = ChartClickEvent;

//# sourceMappingURL=ChartClickEvent.js.map
