goog.module('org.pepstock.charba.client.events.IsChartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsCommonChartEvent = goog.require('org.pepstock.charba.client.events.IsCommonChartEvent$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');

/**
 * @interface
 * @extends {IsCommonChartEvent}
 */
class IsChartEvent {
 /** @abstract @return {List<DatasetReference>} */
 m_getItems__() {}
 
 static $clinit() {
  IsChartEvent.$clinit = () =>{};
  IsChartEvent.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsCommonChartEvent.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_IsChartEvent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_IsChartEvent;
 }
 
 static $loadModules() {}
}
IsChartEvent.$markImplementor(/**@type {Function}*/ (IsChartEvent));
$Util.$setClassMetadataForInterface(IsChartEvent, "org.pepstock.charba.client.events.IsChartEvent");

exports = IsChartEvent;

//# sourceMappingURL=IsChartEvent.js.map
