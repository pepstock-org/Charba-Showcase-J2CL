goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EnterEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsHighlightCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$impl');
let Hovered = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {EnterEventHandler}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsHighlightCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase(/** DataLabelsHighlightCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase(/** DataLabelsHighlightCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let hovered = /**@type {Hovered}*/ ($Casts.$to(context.m_getAttributes__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_4.f_factory__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_), Hovered));
  hovered.m_setHovered__boolean(true);
  context.m_setAttributes__org_pepstock_charba_client_commons_NativeObjectContainer(hovered);
  return true;
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  Hovered = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
EnterEventHandler.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$4");

exports = $4;

//# sourceMappingURL=DataLabelsHighlightCase$4.js.map
