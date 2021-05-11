goog.module('org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharacterToEscape = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils.CharacterToEscape$impl');

class SafeHtmlUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeHtmlUtils} */
 static $create__() {
  let $instance = new SafeHtmlUtils();
  $instance.$ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 static m_htmlEscape__char(/** number */ input) {
  SafeHtmlUtils.$clinit();
  return CharacterToEscape.m_escape__char(input);
 }
 /** @return {?string} */
 static m_htmlEscape__java_lang_String(/** ?string */ input) {
  SafeHtmlUtils.$clinit();
  if (!SafeHtmlUtils.f_HTML_CHARS_RE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_.test(input)) {
   return input;
  }
  return CharacterToEscape.m_escapeAll__java_lang_String(input);
 }
 
 static $clinit() {
  SafeHtmlUtils.$clinit = () =>{};
  SafeHtmlUtils.$loadModules();
  j_l_Object.$clinit();
  SafeHtmlUtils.f_HTML_CHARS_RE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_ = new RegExp("[&<>'\"]");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlUtils;
 }
 
 static $loadModules() {
  CharacterToEscape = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils.CharacterToEscape$impl');
 }
}
/**@type {RegExp}*/
SafeHtmlUtils.f_HTML_CHARS_RE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_;
$Util.$setClassMetadata(SafeHtmlUtils, "org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils");

exports = SafeHtmlUtils;

//# sourceMappingURL=SafeHtmlUtils.js.map
