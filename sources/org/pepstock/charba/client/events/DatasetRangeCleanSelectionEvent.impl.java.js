goog.module('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let DatasetRangeCleanSelectionEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetRangeCleanSelectionEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetRangeCleanSelectionEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ nativeEvent) {
  DatasetRangeCleanSelectionEvent.$clinit();
  let $instance = new DatasetRangeCleanSelectionEvent();
  $instance.$ctor__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent(nativeEvent);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ nativeEvent) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, DatasetRangeCleanSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent);
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (DatasetRangeCleanSelectionEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {DatasetRangeCleanSelectionEventHandler}*/ ($Casts.$to(handler, DatasetRangeCleanSelectionEventHandler));
   myHandler.m_onClean__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent() {
  return (DatasetRangeCleanSelectionEvent.$clinit(), DatasetRangeCleanSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent);
 }
 
 static $clinit() {
  DatasetRangeCleanSelectionEvent.$clinit = () =>{};
  DatasetRangeCleanSelectionEvent.$loadModules();
  AbstractEvent.$clinit();
  DatasetRangeCleanSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent = EventType.m_create__java_lang_Class(Class.$get(DatasetRangeCleanSelectionEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetRangeCleanSelectionEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  DatasetRangeCleanSelectionEventHandler = goog.module.get('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
DatasetRangeCleanSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent;
$Util.$setClassMetadata(DatasetRangeCleanSelectionEvent, "org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent");

exports = DatasetRangeCleanSelectionEvent;

//# sourceMappingURL=DatasetRangeCleanSelectionEvent.js.map
