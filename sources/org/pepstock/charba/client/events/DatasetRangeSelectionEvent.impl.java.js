goog.module('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let DatasetRangeSelectionEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let ScaleValueItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleValueItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetRangeSelectionEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleValueItem}*/
  this.f_from__org_pepstock_charba_client_events_DatasetRangeSelectionEvent_;
  /**@type {ScaleValueItem}*/
  this.f_to__org_pepstock_charba_client_events_DatasetRangeSelectionEvent_;
 }
 /** @return {!DatasetRangeSelectionEvent} */
 static $create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleValueItem__org_pepstock_charba_client_items_ScaleValueItem(/** Object */ nativeEvent, /** ScaleValueItem */ from, /** ScaleValueItem */ to) {
  DatasetRangeSelectionEvent.$clinit();
  let $instance = new DatasetRangeSelectionEvent();
  $instance.$ctor__org_pepstock_charba_client_events_DatasetRangeSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleValueItem__org_pepstock_charba_client_items_ScaleValueItem(nativeEvent, from, to);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_DatasetRangeSelectionEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleValueItem__org_pepstock_charba_client_items_ScaleValueItem(/** Object */ nativeEvent, /** ScaleValueItem */ from, /** ScaleValueItem */ to) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(nativeEvent, DatasetRangeSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent);
  this.f_from__org_pepstock_charba_client_events_DatasetRangeSelectionEvent_ = /**@type {ScaleValueItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(from, "'From' scale value argument"), ScaleValueItem));
  this.f_to__org_pepstock_charba_client_events_DatasetRangeSelectionEvent_ = /**@type {ScaleValueItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(to, "'To' scale value argument"), ScaleValueItem));
 }
 /** @return {ScaleValueItem} */
 m_getFrom__() {
  return this.f_from__org_pepstock_charba_client_events_DatasetRangeSelectionEvent_;
 }
 /** @return {ScaleValueItem} */
 m_getTo__() {
  return this.f_to__org_pepstock_charba_client_events_DatasetRangeSelectionEvent_;
 }
 /** @override */
 m_dispatch__org_pepstock_charba_client_events_EventHandler(/** EventHandler */ handler) {
  if (DatasetRangeSelectionEventHandler.$isInstance(handler)) {
   let myHandler = /**@type {DatasetRangeSelectionEventHandler}*/ ($Casts.$to(handler, DatasetRangeSelectionEventHandler));
   myHandler.m_onSelect__org_pepstock_charba_client_events_DatasetRangeSelectionEvent(this);
  }
 }
 /** @return {EventType} */
 static get f_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent() {
  return (DatasetRangeSelectionEvent.$clinit(), DatasetRangeSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent);
 }
 
 static $clinit() {
  DatasetRangeSelectionEvent.$clinit = () =>{};
  DatasetRangeSelectionEvent.$loadModules();
  AbstractEvent.$clinit();
  DatasetRangeSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent = EventType.m_create__java_lang_Class(Class.$get(DatasetRangeSelectionEvent));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetRangeSelectionEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DatasetRangeSelectionEventHandler = goog.module.get('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  ScaleValueItem = goog.module.get('org.pepstock.charba.client.items.ScaleValueItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType}*/
DatasetRangeSelectionEvent.$static_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent;
$Util.$setClassMetadata(DatasetRangeSelectionEvent, "org.pepstock.charba.client.events.DatasetRangeSelectionEvent");

exports = DatasetRangeSelectionEvent;

//# sourceMappingURL=DatasetRangeSelectionEvent.js.map
