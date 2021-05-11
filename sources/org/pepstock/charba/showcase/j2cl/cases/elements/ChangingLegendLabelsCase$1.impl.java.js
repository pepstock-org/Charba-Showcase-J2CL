goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.ChangingLegendLabelsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendLabelsCallback = goog.require('org.pepstock.charba.client.callbacks.LegendLabelsCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let ChangingLegendLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.ChangingLegendLabelsCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendLabelsCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ChangingLegendLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase(/** ChangingLegendLabelsCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase(/** ChangingLegendLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<LegendLabelItem>} */
 m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<LegendLabelItem> */ defaultLabels) {
  if (!this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase_1.f_useDefault__org_pepstock_charba_showcase_j2cl_cases_elements_ChangingLegendLabelsCase_.checked) {
   let size = GoogleChartColor.m_values__().length - 1 | 0;
   for (let $iterator = defaultLabels.m_iterator__(); $iterator.m_hasNext__(); ) {
    let item = /**@type {LegendLabelItem}*/ ($Casts.$to($iterator.m_next__(), LegendLabelItem));
    {
     let color = GoogleChartColor.m_values__()[size - item.m_getDatasetIndex__() | 0];
     item.m_setFillStyle__org_pepstock_charba_client_colors_IsColor(color);
     let text = "Changed label for " + j_l_String.m_valueOf__java_lang_Object(item.m_getText__());
     item.m_setText__java_lang_String(text);
    }
   }
  }
  return defaultLabels;
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LegendLabelsCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.ChangingLegendLabelsCase$1");

exports = $1;

//# sourceMappingURL=ChangingLegendLabelsCase$1.js.map
