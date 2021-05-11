goog.module('org.pepstock.charba.client.events.AbstractLegendEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChartEvent = goog.require('org.pepstock.charba.client.events.AbstractChartEvent$impl');
const IsLegendEvent = goog.require('org.pepstock.charba.client.events.IsLegendEvent$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsLegendEvent}
 */
class AbstractLegendEvent extends AbstractChartEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {LegendItem}*/
  this.f_item__org_pepstock_charba_client_events_AbstractLegendEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractLegendEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_items_LegendItem(/** ChartEventContext */ eventContext, /** EventType */ type, /** Key */ key, /** LegendItem */ item) {
  this.$ctor__org_pepstock_charba_client_events_AbstractChartEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key(eventContext, type, key);
  this.f_item__org_pepstock_charba_client_events_AbstractLegendEvent_ = /**@type {LegendItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(item, "Legend item argument"), LegendItem));
 }
 /** @override @return {LegendItem} */
 m_getItem__() {
  return this.f_item__org_pepstock_charba_client_events_AbstractLegendEvent_;
 }
 
 static $clinit() {
  AbstractLegendEvent.$clinit = () =>{};
  AbstractLegendEvent.$loadModules();
  AbstractChartEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractLegendEvent;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsLegendEvent.$markImplementor(AbstractLegendEvent);
$Util.$setClassMetadata(AbstractLegendEvent, "org.pepstock.charba.client.events.AbstractLegendEvent");

exports = AbstractLegendEvent;

//# sourceMappingURL=AbstractLegendEvent.js.map
