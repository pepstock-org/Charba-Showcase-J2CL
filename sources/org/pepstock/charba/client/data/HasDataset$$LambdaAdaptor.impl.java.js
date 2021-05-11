goog.module('org.pepstock.charba.client.data.HasDataset.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataset = goog.require('org.pepstock.charba.client.data.HasDataset$impl');

let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');

/**
 * @implements {HasDataset}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Dataset */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Dataset}*/
  this.f_fn__org_pepstock_charba_client_data_HasDataset_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasDataset_$LambdaAdaptor__org_pepstock_charba_client_data_HasDataset_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasDataset_$LambdaAdaptor__org_pepstock_charba_client_data_HasDataset_$JsFunction(/** ?function():Dataset */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasDataset_$LambdaAdaptor = fn;
 }
 /** @override @return {Dataset} */
 m_getDataset__() {
  let /** ?function():Dataset */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasDataset_$LambdaAdaptor, $function());
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
HasDataset.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasDataset$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasDataset$$LambdaAdaptor.js.map
