goog.module('org.pepstock.charba.client.callbacks.TooltipExternalCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipExternalCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipExternalCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipModel = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel$impl');

/**
 * @implements {TooltipExternalCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, TooltipModel):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, TooltipModel):void}*/
  this.f_fn__org_pepstock_charba_client_callbacks_TooltipExternalCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_TooltipExternalCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TooltipExternalCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TooltipExternalCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TooltipExternalCallback_$JsFunction(/** ?function(IsChart, TooltipModel):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_TooltipExternalCallback_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onExternal__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipModel(/** IsChart */ arg0, /** TooltipModel */ arg1) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_callbacks_TooltipExternalCallback_$LambdaAdaptor;
   $function(arg0, arg1);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
TooltipExternalCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.TooltipExternalCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TooltipExternalCallback$$LambdaAdaptor.js.map
