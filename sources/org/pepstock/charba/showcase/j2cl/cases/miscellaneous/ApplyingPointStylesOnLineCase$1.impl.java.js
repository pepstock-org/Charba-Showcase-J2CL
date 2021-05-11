goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendLabelsCallback = goog.require('org.pepstock.charba.client.callbacks.LegendLabelsCallback$impl');

let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let ApplyingPointStylesOnLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendLabelsCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ApplyingPointStylesOnLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase(/** ApplyingPointStylesOnLineCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase(/** ApplyingPointStylesOnLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<LegendLabelItem>} */
 m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<LegendLabelItem> */ defaultLabels) {
  let selectedPointStyle = /**@type {HTMLOptionElement}*/ ($Casts.$to($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.options, this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  for (let $iterator = defaultLabels.m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {LegendLabelItem}*/ ($Casts.$to($iterator.m_next__(), LegendLabelItem));
   {
    item.m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(PointStyle.m_valueOf__java_lang_String(selectedPointStyle));
    item.m_setStrokeStyle__org_pepstock_charba_client_colors_IsColor(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_);
    item.m_setFillStyle__org_pepstock_charba_client_colors_IsColor(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_1.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_);
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
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LegendLabelsCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase$1");

exports = $1;

//# sourceMappingURL=ApplyingPointStylesOnLineCase$1.js.map
