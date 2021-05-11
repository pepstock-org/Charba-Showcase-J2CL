goog.module('org.pepstock.charba.client.configuration.IsEventProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AddHandlerEventHandler = goog.require('org.pepstock.charba.client.events.AddHandlerEventHandler$impl');
const RemoveHandlerEventHandler = goog.require('org.pepstock.charba.client.events.RemoveHandlerEventHandler$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');

/**
 * @interface
 * @extends {AddHandlerEventHandler}
 * @extends {RemoveHandlerEventHandler}
 */
class IsEventProvider {
 
 static m_register__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_IsEventProvider(/** IsChart */ chart, /** IsEventProvider */ provider) {
  IsEventProvider.$clinit();
  chart.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(provider, AddHandlerEvent.f_TYPE__org_pepstock_charba_client_events_AddHandlerEvent);
  chart.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(provider, RemoveHandlerEvent.f_TYPE__org_pepstock_charba_client_events_RemoveHandlerEvent);
 }
 
 static $clinit() {
  IsEventProvider.$clinit = () =>{};
  IsEventProvider.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  AddHandlerEventHandler.$markImplementor(ctor);
  RemoveHandlerEventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_IsEventProvider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_IsEventProvider;
 }
 
 static $loadModules() {
  AddHandlerEvent = goog.module.get('org.pepstock.charba.client.events.AddHandlerEvent$impl');
  RemoveHandlerEvent = goog.module.get('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
 }
}
IsEventProvider.$markImplementor(/**@type {Function}*/ (IsEventProvider));
$Util.$setClassMetadataForInterface(IsEventProvider, "org.pepstock.charba.client.configuration.IsEventProvider");

exports = IsEventProvider;

//# sourceMappingURL=IsEventProvider.js.map
