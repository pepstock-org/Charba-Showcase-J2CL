goog.module('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DatasetSelectionEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetSelectionEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetReference}*/
  this.f_item__org_pepstock_charba_client_events_DatasetSelectionEvent_;
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_events_DatasetSelectionEvent_;
 }
 //Factory method corresponding to constructor 'DatasetSelectionEvent(BaseNativeEvent, DatasetReference)'.
 /** @return {!DatasetSelectionEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_DatasetReference(/** Object */ nativeEvent, /** DatasetReference */ item) {
  DatasetSelectionEvent.$clinit();
  let $instance = new DatasetSelectionEvent();
  $instance.$ctor__org_pepstock_charba_client_events_DatasetSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_DatasetReference(nativeEvent, item);
  return $instance;
 }
 //Initialization from constructor 'DatasetSelectionEvent(BaseNativeEvent, DatasetReference)'.
 
 $ctor__org_pepstock_charba_client_events_DatasetSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_DatasetReference(/** Object */ nativeEvent, /** DatasetReference */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, DatasetSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent);
  this.f_item__org_pepstock_charba_client_events_DatasetSelectionEvent_ = item;
  this.f_chart__org_pepstock_charba_client_events_DatasetSelectionEvent_ = null;
 }
 //Factory method corresponding to constructor 'DatasetSelectionEvent(BaseNativeEvent, IsChart, DatasetReference)'.
 /** @return {!DatasetSelectionEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetReference(/** Object */ nativeEvent, /** IsChart */ chart, /** DatasetReference */ item) {
  DatasetSelectionEvent.$clinit();
  let $instance = new DatasetSelectionEvent();
  $instance.$ctor__org_pepstock_charba_client_events_DatasetSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetReference(nativeEvent, chart, item);
  return $instance;
 }
 //Initialization from constructor 'DatasetSelectionEvent(BaseNativeEvent, IsChart, DatasetReference)'.
 
 $ctor__org_pepstock_charba_client_events_DatasetSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetReference(/** Object */ nativeEvent, /** IsChart */ chart, /** DatasetReference */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, DatasetSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent);
  this.f_item__org_pepstock_charba_client_events_DatasetSelectionEvent_ = item;
  this.f_chart__org_pepstock_charba_client_events_DatasetSelectionEvent_ = chart;
 }
 /** @return {DatasetReference} */
 m_getItem__() {
  return this.f_item__org_pepstock_charba_client_events_DatasetSelectionEvent_;
 }
 /** @override @return {IsChart} */
 m_getChart__() {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_client_events_DatasetSelectionEvent_)) {
   return this.f_chart__org_pepstock_charba_client_events_DatasetSelectionEvent_;
  }
  return super.m_getChart__();
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (DatasetSelectionEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {DatasetSelectionEventHandler}*/ ($Casts.$to(handler, DatasetSelectionEventHandler));
   myHandler.m_onSelect__org_pepstock_charba_client_events_DatasetSelectionEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent() {
  return (DatasetSelectionEvent.$clinit(), DatasetSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent);
 }
 
 static $clinit() {
  DatasetSelectionEvent.$clinit = () =>{};
  DatasetSelectionEvent.$loadModules();
  AbstractEvent.$clinit();
  DatasetSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent = EventType.m_create__java_lang_Class(Class.$get(DatasetSelectionEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetSelectionEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  DatasetSelectionEventHandler = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
DatasetSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent;
$Util.$setClassMetadata(DatasetSelectionEvent, "org.pepstock.charba.client.events.DatasetSelectionEvent");

exports = DatasetSelectionEvent;

//# sourceMappingURL=DatasetSelectionEvent.js.map
