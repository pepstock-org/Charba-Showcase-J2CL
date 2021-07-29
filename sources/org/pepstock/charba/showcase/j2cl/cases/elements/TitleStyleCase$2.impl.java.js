goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FontCallback = goog.require('org.pepstock.charba.client.callbacks.FontCallback$impl');

let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let TitleStyleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FontCallback<ChartContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TitleStyleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2;
  /**@type {FontItem}*/
  this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase(/** TitleStyleCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase(/** TitleStyleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2();
 }
 /** @override @return {FontItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ChartContext */ context) {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.options, this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2.m_setSize__int(Integer.m_parseInt__java_lang_String(selected) - 2 | 0);
  return this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2() {
  this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_2 = FontItem.$create__();
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  FontItem = goog.module.get('org.pepstock.charba.client.items.FontItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FontCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase$2");

exports = $2;

//# sourceMappingURL=TitleStyleCase$2.js.map
