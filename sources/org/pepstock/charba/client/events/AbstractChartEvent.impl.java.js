goog.module('org.pepstock.charba.client.events.AbstractChartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEvent = goog.require('org.pepstock.charba.client.events.AbstractEvent$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractChartEvent extends AbstractEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartEventContext}*/
  this.f_eventContext__org_pepstock_charba_client_events_AbstractChartEvent_;
  /**@type {Key}*/
  this.f_key__org_pepstock_charba_client_events_AbstractChartEvent_;
 }
 
 $ctor__org_pepstock_charba_client_events_AbstractChartEvent__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_events_EventType__org_pepstock_charba_client_commons_Key(/** ChartEventContext */ eventContext, /** EventType */ type, /** Key */ key) {
  this.$ctor__org_pepstock_charba_client_events_AbstractEvent__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_events_EventType(!$Equality.$same(eventContext, null) ? eventContext.m_getNativeEvent__() : null, type);
  this.f_key__org_pepstock_charba_client_events_AbstractChartEvent_ = Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(key);
  this.f_eventContext__org_pepstock_charba_client_events_AbstractChartEvent_ = /**@type {ChartEventContext}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(eventContext, "Event context argument"), ChartEventContext));
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(this.f_eventContext__org_pepstock_charba_client_events_AbstractChartEvent_.m_getNativeChart__(), "Native chart in the context");
 }
 /** @return {ChartEventContext} */
 m_getContext__() {
  return this.f_eventContext__org_pepstock_charba_client_events_AbstractChartEvent_;
 }
 /** @return {Key} */
 m_getKey__() {
  return this.f_key__org_pepstock_charba_client_events_AbstractChartEvent_;
 }
 /** @override @return {IsChart} */
 m_getChart__() {
  return this.f_eventContext__org_pepstock_charba_client_events_AbstractChartEvent_.m_getChart__();
 }
 
 static $clinit() {
  AbstractChartEvent.$clinit = () =>{};
  AbstractChartEvent.$loadModules();
  AbstractEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractChartEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ChartEventContext = goog.module.get('org.pepstock.charba.client.events.ChartEventContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractChartEvent, "org.pepstock.charba.client.events.AbstractChartEvent");

exports = AbstractChartEvent;

//# sourceMappingURL=AbstractChartEvent.js.map
