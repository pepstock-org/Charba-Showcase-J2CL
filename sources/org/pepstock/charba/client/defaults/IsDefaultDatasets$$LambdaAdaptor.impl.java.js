goog.module('org.pepstock.charba.client.defaults.IsDefaultDatasets.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDatasets = goog.require('org.pepstock.charba.client.defaults.IsDefaultDatasets$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let IsDefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');

/**
 * @implements {IsDefaultDatasets}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Type):IsDefaultTypedDataset */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Type):IsDefaultTypedDataset}*/
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultDatasets_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_defaults_IsDefaultDatasets_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultDatasets_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_defaults_IsDefaultDatasets_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultDatasets_$JsFunction(/** ?function(Type):IsDefaultTypedDataset */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultDatasets_$LambdaAdaptor = fn;
 }
 /** @override @return {IsDefaultTypedDataset} */
 m_get__org_pepstock_charba_client_Type(/** Type */ arg0) {
  let /** ?function(Type):IsDefaultTypedDataset */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_defaults_IsDefaultDatasets_$LambdaAdaptor, $function(arg0));
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
IsDefaultDatasets.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.defaults.IsDefaultDatasets$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultDatasets$$LambdaAdaptor.js.map
