goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.$5$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeaveEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsHighlightCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$impl');
let Hovered = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LeaveEventHandler}
 */
class $5 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsHighlightCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_5;
 }
 /** @return {!$5} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase(/** DataLabelsHighlightCase */ $outer_this) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_5__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_5__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase(/** DataLabelsHighlightCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_5 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let hovered = /**@type {Hovered}*/ ($Casts.$to(context.m_getAttributes__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_5.f_factory__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_), Hovered));
  hovered.m_setHovered__boolean(false);
  context.m_setAttributes__org_pepstock_charba_client_commons_NativeObjectContainer(hovered);
  return true;
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  Hovered = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LeaveEventHandler.$markImplementor($5);
$Util.$setClassMetadata($5, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$5");

exports = $5;

//# sourceMappingURL=DataLabelsHighlightCase$5.js.map
