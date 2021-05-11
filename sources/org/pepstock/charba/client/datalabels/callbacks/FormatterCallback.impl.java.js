goog.module('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback.$LambdaAdaptor$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');

/**
 * @interface
 */
class FormatterCallback {
 /** @abstract @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {}
 /** @return {FormatterCallback} */
 static $adapt(/** ?function(DataLabelsContext, DataItem):?string */ fn) {
  FormatterCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  FormatterCallback.$clinit = () =>{};
  FormatterCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback.$LambdaAdaptor$impl');
 }
}
FormatterCallback.$markImplementor(/**@type {Function}*/ (FormatterCallback));
$Util.$setClassMetadataForInterface(FormatterCallback, "org.pepstock.charba.client.datalabels.callbacks.FormatterCallback");

exports = FormatterCallback;

//# sourceMappingURL=FormatterCallback.js.map
