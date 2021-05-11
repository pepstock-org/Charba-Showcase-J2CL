goog.module('org.pepstock.charba.client.options.HasBarDatasetOptions.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasBarDatasetOptions = goog.require('org.pepstock.charba.client.options.HasBarDatasetOptions$impl');

let BarDatasetOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');

/**
 * @implements {HasBarDatasetOptions}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():BarDatasetOptionsHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():BarDatasetOptionsHandler}*/
  this.f_fn__org_pepstock_charba_client_options_HasBarDatasetOptions_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasBarDatasetOptions_$LambdaAdaptor__org_pepstock_charba_client_options_HasBarDatasetOptions_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasBarDatasetOptions_$LambdaAdaptor__org_pepstock_charba_client_options_HasBarDatasetOptions_$JsFunction(/** ?function():BarDatasetOptionsHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasBarDatasetOptions_$LambdaAdaptor = fn;
 }
 /** @override @return {BarDatasetOptionsHandler} */
 m_getDatasetOptionsHandler__() {
  let /** ?function():BarDatasetOptionsHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasBarDatasetOptions_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBarPercentage__() {
  return HasBarDatasetOptions.m_getBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBarThickness__() {
  return HasBarDatasetOptions.m_getBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getCategoryPercentage__() {
  return HasBarDatasetOptions.m_getCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMaxBarThickness__() {
  return HasBarDatasetOptions.m_getMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMinBarLength__() {
  return HasBarDatasetOptions.m_getMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isGrouped__() {
  return HasBarDatasetOptions.m_isGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBarPercentage__double(/** number */ arg0) {
  HasBarDatasetOptions.m_setBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBarThickness__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setCategoryPercentage__double(/** number */ arg0) {
  HasBarDatasetOptions.m_setCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGrouped__boolean(/** boolean */ arg0) {
  HasBarDatasetOptions.m_setGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMaxBarThickness__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMinBarLength__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasBarDatasetOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasBarDatasetOptions.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasBarDatasetOptions$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasBarDatasetOptions$$LambdaAdaptor.js.map
