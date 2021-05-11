goog.module('org.pepstock.charba.client.events.EventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class EventHandler {
 
 static $clinit() {
  EventHandler.$clinit = () =>{};
  EventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_events_EventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_EventHandler;
 }
 
 static $loadModules() {}
}
EventHandler.$markImplementor(/**@type {Function}*/ (EventHandler));
$Util.$setClassMetadataForInterface(EventHandler, "org.pepstock.charba.client.events.EventHandler");

exports = EventHandler;

//# sourceMappingURL=EventHandler.js.map
