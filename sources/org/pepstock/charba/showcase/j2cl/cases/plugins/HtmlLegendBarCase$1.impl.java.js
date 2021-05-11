goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendBarCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendLabelsCallback = goog.require('org.pepstock.charba.client.callbacks.LegendLabelsCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let HtmlLegendBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendLabelsCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlLegendBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase(/** HtmlLegendBarCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase(/** HtmlLegendBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<LegendLabelItem>} */
 m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<LegendLabelItem> */ defaultLabels) {
  for (let $iterator = defaultLabels.m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {LegendLabelItem}*/ ($Casts.$to($iterator.m_next__(), LegendLabelItem));
   {
    item.m_setFontColor__org_pepstock_charba_client_colors_IsColor(item.m_getStrokeStyle__());
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
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LegendLabelsCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendBarCase$1");

exports = $1;

//# sourceMappingURL=HtmlLegendBarCase$1.js.map
