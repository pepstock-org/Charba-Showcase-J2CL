goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Percentage = goog.forwardDeclare('org.pepstock.charba.client.impl.callbacks.Percentage$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let DataLabelsDoughnutCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsDoughnutCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase(/** DataLabelsDoughnutCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase(/** DataLabelsDoughnutCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  let percentage = Percentage.m_compute__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_callbacks_AbstractDatasetContext__boolean(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_3.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_, dataItem.m_getValue__(), context, false);
  return j_l_String.m_valueOf__java_lang_Object(Utilities.m_applyPrecision__double__int(percentage * 100, 1)) + "%";
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Percentage = goog.module.get('org.pepstock.charba.client.impl.callbacks.Percentage$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
 }
}
FormatterCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase$3");

exports = $3;

//# sourceMappingURL=DataLabelsDoughnutCase$3.js.map
