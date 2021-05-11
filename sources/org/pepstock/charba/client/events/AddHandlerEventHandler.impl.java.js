goog.module('org.pepstock.charba.client.events.AddHandlerEventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.pepstock.charba.client.events.EventHandler$impl');

let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEventHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class AddHandlerEventHandler {
 /** @abstract */
 m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(/** AddHandlerEvent */ event) {}
 /** @return {AddHandlerEventHandler} */
 static $adapt(/** ?function(AddHandlerEvent):void */ fn) {
  AddHandlerEventHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AddHandlerEventHandler.$clinit = () =>{};
  AddHandlerEventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_events_AddHandlerEventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_events_AddHandlerEventHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.events.AddHandlerEventHandler.$LambdaAdaptor$impl');
 }
}
AddHandlerEventHandler.$markImplementor(/**@type {Function}*/ (AddHandlerEventHandler));
$Util.$setClassMetadataForInterface(AddHandlerEventHandler, "org.pepstock.charba.client.events.AddHandlerEventHandler");

exports = AddHandlerEventHandler;

//# sourceMappingURL=AddHandlerEventHandler.js.map
