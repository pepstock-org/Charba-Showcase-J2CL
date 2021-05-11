goog.module('org.pepstock.charba.client.callbacks.TooltipExternalCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipExternalCallback.$LambdaAdaptor$impl');
let TooltipModel = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel$impl');

/**
 * @interface
 */
class TooltipExternalCallback {
 /** @abstract */
 m_onExternal__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipModel(/** IsChart */ chart, /** TooltipModel */ model) {}
 /** @return {TooltipExternalCallback} */
 static $adapt(/** ?function(IsChart, TooltipModel):void */ fn) {
  TooltipExternalCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TooltipExternalCallback.$clinit = () =>{};
  TooltipExternalCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TooltipExternalCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TooltipExternalCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.TooltipExternalCallback.$LambdaAdaptor$impl');
 }
}
TooltipExternalCallback.$markImplementor(/**@type {Function}*/ (TooltipExternalCallback));
$Util.$setClassMetadataForInterface(TooltipExternalCallback, "org.pepstock.charba.client.callbacks.TooltipExternalCallback");

exports = TooltipExternalCallback;

//# sourceMappingURL=TooltipExternalCallback.js.map
