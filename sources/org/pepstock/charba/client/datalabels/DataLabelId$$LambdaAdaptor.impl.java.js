goog.module('org.pepstock.charba.client.datalabels.DataLabelId.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DataLabelId = goog.require('org.pepstock.charba.client.datalabels.DataLabelId$impl');

/**
 * @implements {DataLabelId}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_fn__org_pepstock_charba_client_datalabels_DataLabelId_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_DataLabelId_$LambdaAdaptor__org_pepstock_charba_client_datalabels_DataLabelId_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelId_$LambdaAdaptor__org_pepstock_charba_client_datalabels_DataLabelId_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_DataLabelId_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_value__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_DataLabelId_$LambdaAdaptor, $function());
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
DataLabelId.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.DataLabelId$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=DataLabelId$$LambdaAdaptor.js.map
