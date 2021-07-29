goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase.$1$impl');

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
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TitleStyleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1;
  /**@type {FontItem}*/
  this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase(/** TitleStyleCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase(/** TitleStyleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1();
 }
 /** @override @return {FontItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ChartContext */ context) {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.options, this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1.m_setSize__int(Integer.m_parseInt__java_lang_String(selected));
  return this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1() {
  this.f_f__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_1 = FontItem.$create__();
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
  Integer = goog.module.get('java.lang.Integer$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  FontItem = goog.module.get('org.pepstock.charba.client.items.FontItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FontCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase$1");

exports = $1;

//# sourceMappingURL=TitleStyleCase$1.js.map
