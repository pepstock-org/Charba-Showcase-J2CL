goog.module('org.pepstock.charba.showcase.j2cl.cases.commons.ProgressBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.AbstractComposite$impl');

let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ProgressBar extends AbstractComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLElement}*/
  this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_;
  /**@type {HTMLElement}*/
  this.f_percentageLabel__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_;
  /**@type {number}*/
  this.f_percentage__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = 0;
  /**@type {number}*/
  this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = 0;
  /**@type {number}*/
  this.f_value__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = 0;
 }
 /** @return {!ProgressBar} */
 static $create__() {
  ProgressBar.$clinit();
  let $instance = new ProgressBar();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar();
  this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement(ProgressBar.f_PROGRESS_TAG__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_), $Overlay));
  this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("90%");
  this.f_percentageLabel__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("span"), $Overlay));
  this.f_percentage__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = this.f_value__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ / this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_;
  this.f_percentageLabel__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_.innerHTML = Utilities.m_applyPrecision__double__int(this.f_percentage__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_, 3);
  this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_.appendChild(this.f_percentageLabel__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_);
  this.m_setValue__double(0);
  this.m_setMax__double(ProgressBar.f_DEFAULT_MAX__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_);
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_;
 }
 
 m_setWidth__java_lang_String(/** ?string */ width) {
  this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object(width);
 }
 /** @return {number} */
 m_getMax__() {
  return this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_;
 }
 
 m_setMax__double(/** number */ max) {
  this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = max;
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_, ProgressBar.f_PROGRESS_MAX_ATTRIBUTE__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_, Double.m_toString__double(max));
 }
 /** @return {number} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_;
 }
 
 m_setValue__double(/** number */ value) {
  this.f_value__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = value;
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(this.f_progress__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_, ProgressBar.f_PROGRESS_VALUE_ATTRIBUTE__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_, Double.m_toString__double(value));
 }
 
 m_setProgress__double(/** number */ value) {
  this.m_setValue__double(value);
  this.f_percentage__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = value / this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_;
  this.f_percentageLabel__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_.innerHTML = Utilities.m_applyPrecision__double__int(this.f_percentage__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_, 3);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar() {
  this.f_percentage__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = 0;
 }
 
 static $clinit() {
  ProgressBar.$clinit = () =>{};
  ProgressBar.$loadModules();
  AbstractComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProgressBar;
 }
 
 static $loadModules() {
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
ProgressBar.f_PROGRESS_TAG__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = "progress";
/**@const {?string}*/
ProgressBar.f_PROGRESS_MAX_ATTRIBUTE__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = "max";
/**@const {?string}*/
ProgressBar.f_PROGRESS_VALUE_ATTRIBUTE__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = "value";
/**@const {number}*/
ProgressBar.f_DEFAULT_MAX__org_pepstock_charba_showcase_j2cl_cases_commons_ProgressBar_ = 100;
$Util.$setClassMetadata(ProgressBar, "org.pepstock.charba.showcase.j2cl.cases.commons.ProgressBar");

exports = ProgressBar;

//# sourceMappingURL=ProgressBar.js.map
