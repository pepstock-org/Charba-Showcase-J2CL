goog.module('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');

/**
 * @implements {FormatterCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DataLabelsContext, DataItem):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DataLabelsContext, DataItem):?string}*/
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback_$JsFunction(/** ?function(DataLabelsContext, DataItem):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ arg0, /** DataItem */ arg1) {
  let /** ?function(DataLabelsContext, DataItem):?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback_$LambdaAdaptor, $function(arg0, arg1));
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
FormatterCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=FormatterCallback$$LambdaAdaptor.js.map
