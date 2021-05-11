goog.module('org.pepstock.charba.client.events.ChartEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.pepstock.charba.client.events.EventHandler$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ChartEventHandler {
 
 static $clinit() {
  ChartEventHandler.$clinit = () =>{};
  ChartEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_ChartEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_ChartEventHandler;
 }
 
 static $loadModules() {}
}
ChartEventHandler.$markImplementor(/**@type {Function}*/ (ChartEventHandler));
$Util.$setClassMetadataForInterface(ChartEventHandler, "org.pepstock.charba.client.events.ChartEventHandler");

exports = ChartEventHandler;

//# sourceMappingURL=ChartEventHandler.js.map
