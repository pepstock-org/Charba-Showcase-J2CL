goog.module('org.pepstock.charba.client.IsDatasetCreator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');

/**
 * @template D
 * @implements {IsDatasetCreator<D>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(boolean):D */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(boolean):D}*/
  this.f_fn__org_pepstock_charba_client_IsDatasetCreator_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_IsDatasetCreator_$LambdaAdaptor__org_pepstock_charba_client_IsDatasetCreator_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_IsDatasetCreator_$LambdaAdaptor__org_pepstock_charba_client_IsDatasetCreator_$JsFunction(/** ?function(boolean):D */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_IsDatasetCreator_$LambdaAdaptor = fn;
 }
 /** @override @return {D} */
 m_newDataset__boolean(/** boolean */ arg0) {
  let /** ?function(boolean):D */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_IsDatasetCreator_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @return {D} */
 m_newDataset__() {
  return IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
IsDatasetCreator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.IsDatasetCreator$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDatasetCreator$$LambdaAdaptor.js.map
