goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksPolarAreaCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let Shape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Shape$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let CallbacksPolarAreaCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksPolarAreaCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DatasetContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksPolarAreaCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1;
  /**@type {List<Pattern>}*/
  this.f_patterns__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1_;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase(/** CallbacksPolarAreaCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase(/** CallbacksPolarAreaCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  if (this.f_patterns__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1_.isEmpty()) {
   for (let i = 0; i < this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite; i = i + 1 | 0) {
    let shape = Shape.m_values__()[i];
    let pattern = TilesFactory.m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(shape, GoogleChartColor.m_values__()[i]);
    this.f_patterns__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1_.add(pattern);
   }
  }
  return /**@type {Pattern}*/ ($Casts.$to(this.f_patterns__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1_.getAtIndex(context.m_getDataIndex__()), Pattern));
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1() {
  this.f_patterns__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksPolarAreaCase_1_ = /**@type {!LinkedList<Pattern>}*/ (LinkedList.$create__());
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
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  Shape = goog.module.get('org.pepstock.charba.client.colors.tiles.Shape$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksPolarAreaCase$1");

exports = $1;

//# sourceMappingURL=CallbacksPolarAreaCase$1.js.map
