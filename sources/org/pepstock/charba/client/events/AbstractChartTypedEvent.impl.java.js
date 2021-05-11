goog.module('org.pepstock.charba.client.events.AbstractChartTypedEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChartEvent = goog.require('org.pepstock.charba.client.events.AbstractChartEvent$impl');
const IsChartEvent = goog.require('org.pepstock.charba.client.events.IsChartEvent$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsChartEvent}
 */
class AbstractChartTypedEvent extends AbstractChartEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {List<DatasetReference>}*/
  this.f_items__org_pepstock_charba_client_events_AbstractChartTypedEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractChartTypedEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key__java_util_List(/** ChartEventContext */ eventContext, /** EventType */ type, /** Key */ key, /** List<DatasetReference> */ items) {
  this.$ctor__org_pepstock_charba_client_events_AbstractChartEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key(eventContext, type, key);
  this.f_items__org_pepstock_charba_client_events_AbstractChartTypedEvent_ = /**@type {List<DatasetReference>}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(items, "Dataset references items list argument"), List));
 }
 /** @override @return {List<DatasetReference>} */
 m_getItems__() {
  return this.f_items__org_pepstock_charba_client_events_AbstractChartTypedEvent_;
 }
 
 static $clinit() {
  AbstractChartTypedEvent.$clinit = () =>{};
  AbstractChartTypedEvent.$loadModules();
  AbstractChartEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractChartTypedEvent;
 }
 
 static $loadModules() {
  List = goog.module.get('java.util.List$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsChartEvent.$markImplementor(AbstractChartTypedEvent);
$Util.$setClassMetadata(AbstractChartTypedEvent, "org.pepstock.charba.client.events.AbstractChartTypedEvent");

exports = AbstractChartTypedEvent;

//# sourceMappingURL=AbstractChartTypedEvent.js.map
