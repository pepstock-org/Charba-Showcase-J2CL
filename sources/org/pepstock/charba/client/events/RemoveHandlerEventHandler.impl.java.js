goog.module('org.pepstock.charba.client.events.RemoveHandlerEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.pepstock.charba.client.events.EventHandler$impl');

let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class RemoveHandlerEventHandler {
 /** @abstract */
 m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(/** RemoveHandlerEvent */ event) {}
 /** @return {RemoveHandlerEventHandler} */
 static $adapt(/** ?function(RemoveHandlerEvent):void */ fn) {
  RemoveHandlerEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  RemoveHandlerEventHandler.$clinit = () =>{};
  RemoveHandlerEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_RemoveHandlerEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_RemoveHandlerEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.RemoveHandlerEventHandler.$LambdaAdaptor$impl');
 }
}
RemoveHandlerEventHandler.$markImplementor(/**@type {Function}*/ (RemoveHandlerEventHandler));
$Util.$setClassMetadataForInterface(RemoveHandlerEventHandler, "org.pepstock.charba.client.events.RemoveHandlerEventHandler");

exports = RemoveHandlerEventHandler;

//# sourceMappingURL=RemoveHandlerEventHandler.js.map
