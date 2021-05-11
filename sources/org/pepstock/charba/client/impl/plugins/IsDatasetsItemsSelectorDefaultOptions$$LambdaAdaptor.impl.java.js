goog.module('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDatasetsItemsSelectorDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsDatasetsItemsSelectorDefaultSelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');

/**
 * @implements {IsDatasetsItemsSelectorDefaultOptions}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():IsDatasetsItemsSelectorDefaultSelectionCleaner */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():IsDatasetsItemsSelectorDefaultSelectionCleaner}*/
  this.f_fn__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions_$LambdaAdaptor__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions_$LambdaAdaptor__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions_$JsFunction(/** ?function():IsDatasetsItemsSelectorDefaultSelectionCleaner */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions_$LambdaAdaptor = fn;
 }
 /** @override @return {IsDatasetsItemsSelectorDefaultSelectionCleaner} */
 m_getSelectionCleaner__() {
  let /** ?function():IsDatasetsItemsSelectorDefaultSelectionCleaner */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderDash__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderDashOffset__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderWidth__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsScaleId} */
 m_getXAxisID__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getXAxisID__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isEnabled__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_isEnabled__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
IsDatasetsItemsSelectorDefaultOptions.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDatasetsItemsSelectorDefaultOptions$$LambdaAdaptor.js.map
