goog.module('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let HeightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.HeightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLPreElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLPreElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LogView extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_counter__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = 0;
  /**@type {number}*/
  this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = 0;
  /**@type {HTMLDivElement}*/
  this.f_log__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_;
  /**@type {HTMLPreElement}*/
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_;
 }
 //Factory method corresponding to constructor 'LogView()'.
 /** @return {!LogView} */
 static $create__() {
  LogView.$clinit();
  let $instance = new LogView();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_LogView__();
  return $instance;
 }
 //Initialization from constructor 'LogView()'.
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_commons_LogView__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_LogView__int(LogView.f_MAX__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_);
 }
 //Factory method corresponding to constructor 'LogView(int)'.
 /** @return {!LogView} */
 static $create__int(/** number */ max) {
  LogView.$clinit();
  let $instance = new LogView();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_LogView__int(max);
  return $instance;
 }
 //Initialization from constructor 'LogView(int)'.
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_commons_LogView__int(/** number */ max) {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_LogView();
  this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = Math.max(1, max);
  let title = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  title.className = "myLogTitle";
  title.textContent = "Event logs";
  title.onclick = (/** Event */ p0) =>{
   while (!$Equality.$same(this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.firstChild, null)) {
    this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.removeChild(this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.firstChild);
   }
   this.f_counter__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = 1;
   return null;
  };
  this.f_log__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.appendChild(title);
  this.f_log__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.appendChild(this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_);
  this.f_log__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("80%");
  this.f_log__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.style.height = HeightUnionType_$Overlay.m_of__java_lang_Object("100%");
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_log__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_;
 }
 
 m_addLogEvent__java_lang_String(/** ?string */ innerHtml) {
  let newDiv = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  newDiv.innerHTML = this.f_counter__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ + ". " + j_l_String.m_valueOf__java_lang_Object(innerHtml);
  newDiv.style.whiteSpace = "nowrap";
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.insertBefore(newDiv, this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.firstChild);
  if (this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.childElementCount > this.f_max__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_) {
   this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.removeChild(this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_.lastChild);
  }
  this.f_counter__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = this.f_counter__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ + 1 | 0;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_LogView() {
  this.f_counter__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = 1;
  this.f_log__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  this.f_element__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = /**@type {HTMLPreElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("pre"), HTMLPreElement_$Overlay));
 }
 
 static $clinit() {
  LogView.$clinit = () =>{};
  LogView.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LogView;
 }
 
 static $loadModules() {
  HeightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.HeightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLPreElement_$Overlay = goog.module.get('elemental2.dom.HTMLPreElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
LogView.f_MAX__org_pepstock_charba_showcase_j2cl_cases_commons_LogView_ = 8;
$Util.$setClassMetadata(LogView, "org.pepstock.charba.showcase.j2cl.cases.commons.LogView");

exports = LogView;

//# sourceMappingURL=LogView.js.map
