goog.module('org.pepstock.charba.client.events.IsLegendEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsCommonChartEvent = goog.require('org.pepstock.charba.client.events.IsCommonChartEvent$impl');

let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');

/**
 * @interface
 * @extends {IsCommonChartEvent}
 */
class IsLegendEvent {
 /** @abstract @return {LegendItem} */
 m_getItem__() {}
 
 static $clinit() {
  IsLegendEvent.$clinit = () =>{};
  IsLegendEvent.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsCommonChartEvent.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_IsLegendEvent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_IsLegendEvent;
 }
 
 static $loadModules() {}
}
IsLegendEvent.$markImplementor(/**@type {Function}*/ (IsLegendEvent));
$Util.$setClassMetadataForInterface(IsLegendEvent, "org.pepstock.charba.client.events.IsLegendEvent");

exports = IsLegendEvent;

//# sourceMappingURL=IsLegendEvent.js.map
