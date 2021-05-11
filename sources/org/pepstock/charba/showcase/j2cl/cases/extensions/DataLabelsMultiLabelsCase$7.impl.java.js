goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$7$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsMultiLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $7 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsMultiLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_7;
 }
 /** @return {!$7} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(/** DataLabelsMultiLabelsCase */ $outer_this) {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_7__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_7__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(/** DataLabelsMultiLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_7 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  return context.m_isActive__() ? "value" : j_l_String.m_valueOf__double(dataItem.m_getValue__());
 }
 
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
FormatterCallback.$markImplementor($7);
$Util.$setClassMetadata($7, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$7");

exports = $7;

//# sourceMappingURL=DataLabelsMultiLabelsCase$7.js.map
