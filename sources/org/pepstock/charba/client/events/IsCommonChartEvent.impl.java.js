goog.module('org.pepstock.charba.client.events.IsCommonChartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');

/**
 * @interface
 */
class IsCommonChartEvent {
 /** @abstract @return {ChartEventContext} */
 m_getContext__() {}
 /** @abstract @return {Key} */
 m_getKey__() {}
 /** @abstract @return {IsChart} */
 m_getChart__() {}
 /** @abstract @return {Object} */
 m_getNativeEvent__() {}
 
 static $clinit() {
  IsCommonChartEvent.$clinit = () =>{};
  IsCommonChartEvent.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_events_IsCommonChartEvent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_IsCommonChartEvent;
 }
 
 static $loadModules() {}
}
IsCommonChartEvent.$markImplementor(/**@type {Function}*/ (IsCommonChartEvent));
$Util.$setClassMetadataForInterface(IsCommonChartEvent, "org.pepstock.charba.client.events.IsCommonChartEvent");

exports = IsCommonChartEvent;

//# sourceMappingURL=IsCommonChartEvent.js.map
