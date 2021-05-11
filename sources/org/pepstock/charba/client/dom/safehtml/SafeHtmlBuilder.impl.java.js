goog.module('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.LineBreak.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let SafeHtmlString = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtmlString$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils$impl');

class SafeHtmlBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {StringBuilder}*/
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_;
 }
 /** @return {!SafeHtmlBuilder} */
 static $create__() {
  let $instance = new SafeHtmlBuilder();
  $instance.$ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder();
 }
 /** @return {SafeHtmlBuilder} */
 static m_create__() {
  SafeHtmlBuilder.$clinit();
  return SafeHtmlBuilder.$create__();
 }
 /** @return {SafeHtmlBuilder} */
 m_append__boolean(/** boolean */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__boolean(value);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__byte(/** number */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__int(value);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__char(/** number */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__char(value));
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__double(/** number */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__double(value);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__int(/** number */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__int(value);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__org_pepstock_charba_client_dom_safehtml_SafeHtml(/** SafeHtml */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__java_lang_String(value.m_asString__());
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_appendEscaped__java_lang_String(/** ?string */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(value));
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_appendEscapedLines__java_lang_String(/** ?string */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__java_lang_String(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(SafeHtmlUtils.m_htmlEscape__java_lang_String(value), Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants, j_l_String.m_valueOf__java_lang_Object(Constants.f_LT__org_pepstock_charba_client_commons_Constants) + j_l_String.m_valueOf__java_lang_Object($Overlay.f_TAG__org_pepstock_charba_client_dom_elements_LineBreak_$Overlay) + j_l_String.m_valueOf__java_lang_Object(Constants.f_GT__org_pepstock_charba_client_commons_Constants)));
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_appendHtmlConstant__java_lang_String(/** ?string */ value) {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.m_append__java_lang_String(value);
  return this;
 }
 /** @return {SafeHtml} */
 m_toSafeHtml__() {
  return SafeHtmlString.$create__java_lang_String(this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_.toString());
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder() {
  this.f_builder__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder_ = StringBuilder.$create__();
 }
 /** @return {SafeHtml} */
 static get f_EMPTY_SAFE_HTML__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder() {
  return (SafeHtmlBuilder.$clinit(), SafeHtmlBuilder.$static_EMPTY_SAFE_HTML__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder);
 }
 
 static $clinit() {
  SafeHtmlBuilder.$clinit = () =>{};
  SafeHtmlBuilder.$loadModules();
  j_l_Object.$clinit();
  SafeHtmlBuilder.$static_EMPTY_SAFE_HTML__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder = SafeHtmlString.$create__java_lang_String(Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlBuilder;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.LineBreak.$Overlay$impl');
  SafeHtmlString = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtmlString$impl');
  SafeHtmlUtils = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils$impl');
 }
}
/**@private {SafeHtml}*/
SafeHtmlBuilder.$static_EMPTY_SAFE_HTML__org_pepstock_charba_client_dom_safehtml_SafeHtmlBuilder;
$Util.$setClassMetadata(SafeHtmlBuilder, "org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder");

exports = SafeHtmlBuilder;

//# sourceMappingURL=SafeHtmlBuilder.js.map
