goog.module('org.pepstock.charba.client.dom.safehtml.SafeHtmlString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtml = goog.require('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {SafeHtml}
 */
class SafeHtmlString extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_html__org_pepstock_charba_client_dom_safehtml_SafeHtmlString_;
 }
 /** @return {!SafeHtmlString} */
 static $create__java_lang_String(/** ?string */ html) {
  SafeHtmlString.$clinit();
  let $instance = new SafeHtmlString();
  $instance.$ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlString__java_lang_String(html);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlString__java_lang_String(/** ?string */ html) {
  this.$ctor__java_lang_Object__();
  this.f_html__org_pepstock_charba_client_dom_safehtml_SafeHtmlString_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(html, "HTML argument"), j_l_String));
 }
 /** @override @return {?string} */
 m_asString__() {
  return this.f_html__org_pepstock_charba_client_dom_safehtml_SafeHtmlString_;
 }
 /** @override @return {number} */
 hashCode() {
  let prime = 31;
  let result = 1;
  result = Math.imul(prime, result) + j_l_String.m_hashCode__java_lang_String(this.f_html__org_pepstock_charba_client_dom_safehtml_SafeHtmlString_) | 0;
  return result;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(this, obj)) {
   return true;
  }
  if ($Equality.$same(obj, null)) {
   return false;
  }
  if (!$Equality.$same(this.m_getClass__(), $Objects.m_getClass__java_lang_Object(obj))) {
   return false;
  }
  let other = /**@type {SafeHtmlString}*/ ($Casts.$to(obj, SafeHtmlString));
  return j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_html__org_pepstock_charba_client_dom_safehtml_SafeHtmlString_, other.f_html__org_pepstock_charba_client_dom_safehtml_SafeHtmlString_);
 }
 
 static $clinit() {
  SafeHtmlString.$clinit = () =>{};
  SafeHtmlString.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlString;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
SafeHtml.$markImplementor(SafeHtmlString);
$Util.$setClassMetadata(SafeHtmlString, "org.pepstock.charba.client.dom.safehtml.SafeHtmlString");

exports = SafeHtmlString;

//# sourceMappingURL=SafeHtmlString.js.map
