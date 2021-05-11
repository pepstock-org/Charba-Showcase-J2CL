goog.module('org.pepstock.charba.client.events.ChartResizeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChartEvent = goog.require('org.pepstock.charba.client.events.AbstractChartEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ChartEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartEventProperty$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let ChartResizeEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.ChartResizeEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let SizeItem = goog.forwardDeclare('org.pepstock.charba.client.items.SizeItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartResizeEvent extends AbstractChartEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {SizeItem}*/
  this.f_size__org_pepstock_charba_client_events_ChartResizeEvent_;
 }
 /** @return {!ChartResizeEvent} */
 static $create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_SizeItem(/** ChartEventContext */ eventContext, /** SizeItem */ size) {
  ChartResizeEvent.$clinit();
  let $instance = new ChartResizeEvent();
  $instance.$ctor__org_pepstock_charba_client_events_ChartResizeEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_SizeItem(eventContext, size);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_ChartResizeEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_SizeItem(/** ChartEventContext */ eventContext, /** SizeItem */ size) {
  this.$ctor__org_pepstock_charba_client_events_AbstractChartEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key(eventContext, ChartResizeEvent.$static_TYPE__org_pepstock_charba_client_events_ChartResizeEvent, ChartEventProperty.f_ON_RESIZE__org_pepstock_charba_client_enums_ChartEventProperty);
  this.f_size__org_pepstock_charba_client_events_ChartResizeEvent_ = /**@type {SizeItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(size, "Size argument"), SizeItem));
 }
 /** @return {SizeItem} */
 m_getSize__() {
  return this.f_size__org_pepstock_charba_client_events_ChartResizeEvent_;
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (ChartResizeEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {ChartResizeEventHandler}*/ ($Casts.$to(handler, ChartResizeEventHandler));
   myHandler.m_onResize__org_pepstock_charba_client_events_ChartResizeEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_ChartResizeEvent() {
  return (ChartResizeEvent.$clinit(), ChartResizeEvent.$static_TYPE__org_pepstock_charba_client_events_ChartResizeEvent);
 }
 
 static $clinit() {
  ChartResizeEvent.$clinit = () =>{};
  ChartResizeEvent.$loadModules();
  AbstractChartEvent.$clinit();
  ChartResizeEvent.$static_TYPE__org_pepstock_charba_client_events_ChartResizeEvent = EventType.m_create__java_lang_Class(Class.$get(ChartResizeEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartResizeEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ChartEventProperty = goog.module.get('org.pepstock.charba.client.enums.ChartEventProperty$impl');
  ChartResizeEventHandler = goog.module.get('org.pepstock.charba.client.events.ChartResizeEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  SizeItem = goog.module.get('org.pepstock.charba.client.items.SizeItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
ChartResizeEvent.$static_TYPE__org_pepstock_charba_client_events_ChartResizeEvent;
$Util.$setClassMetadata(ChartResizeEvent, "org.pepstock.charba.client.events.ChartResizeEvent");

exports = ChartResizeEvent;

//# sourceMappingURL=ChartResizeEvent.js.map
