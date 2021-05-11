goog.module('org.pepstock.charba.client.items.HasLegendText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.items.HasLegendText.$LambdaAdaptor$impl');
let LegendTextHandler = goog.forwardDeclare('org.pepstock.charba.client.items.LegendTextHandler$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 */
class HasLegendText {
 /** @abstract @return {LegendTextHandler} */
 m_getLegendTextHandler__() {}
 /** @abstract @return {?string} */
 m_getText__() {}
 /** @abstract */
 m_setText__java_lang_String(/** ?string */ text) {}
 /** @abstract */
 m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml(/** SafeHtml */ text) {}
 /** @abstract @return {SafeHtml} */
 m_getTextAsHtml__() {}
 /** @abstract @return {boolean} */
 m_isHtmlText__() {}
 /** @abstract */
 m_setHtmlText__boolean(/** boolean */ htmlText) {}
 /** @return {HasLegendText} */
 static $adapt(/** ?function():LegendTextHandler */ fn) {
  HasLegendText.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {?string} */
 static m_getText__$default__org_pepstock_charba_client_items_HasLegendText(/** !HasLegendText */ $thisArg) {
  HasLegendText.$clinit();
  if (!$Equality.$same($thisArg.m_getLegendTextHandler__(), null)) {
   return $thisArg.m_getLegendTextHandler__().m_getText___$pp_org_pepstock_charba_client_items();
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 
 static m_setText__$default__org_pepstock_charba_client_items_HasLegendText__java_lang_String(/** !HasLegendText */ $thisArg, /** ?string */ text) {
  HasLegendText.$clinit();
  if (!$Equality.$same($thisArg.m_getLegendTextHandler__(), null)) {
   $thisArg.m_getLegendTextHandler__().m_setText__java_lang_String_$pp_org_pepstock_charba_client_items(text);
  }
 }
 
 static m_setText__$default__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_dom_safehtml_SafeHtml(/** !HasLegendText */ $thisArg, /** SafeHtml */ text) {
  HasLegendText.$clinit();
  if (!$Equality.$same($thisArg.m_getLegendTextHandler__(), null)) {
   $thisArg.m_getLegendTextHandler__().m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml_$pp_org_pepstock_charba_client_items(text);
  }
 }
 /** @return {SafeHtml} */
 static m_getTextAsHtml__$default__org_pepstock_charba_client_items_HasLegendText(/** !HasLegendText */ $thisArg) {
  HasLegendText.$clinit();
  if (!$Equality.$same($thisArg.m_getLegendTextHandler__(), null)) {
   return $thisArg.m_getLegendTextHandler__().m_getTextAsHtml___$pp_org_pepstock_charba_client_items();
  }
  return null;
 }
 /** @return {boolean} */
 static m_isHtmlText__$default__org_pepstock_charba_client_items_HasLegendText(/** !HasLegendText */ $thisArg) {
  HasLegendText.$clinit();
  if (!$Equality.$same($thisArg.m_getLegendTextHandler__(), null)) {
   return $thisArg.m_getLegendTextHandler__().m_isHtmlText___$pp_org_pepstock_charba_client_items();
  }
  return LegendTextHandler.f_DEFAULT_HTML_TEXT__org_pepstock_charba_client_items_LegendTextHandler;
 }
 
 static m_setHtmlText__$default__org_pepstock_charba_client_items_HasLegendText__boolean(/** !HasLegendText */ $thisArg, /** boolean */ htmlText) {
  HasLegendText.$clinit();
  if (!$Equality.$same($thisArg.m_getLegendTextHandler__(), null)) {
   $thisArg.m_getLegendTextHandler__().m_setHtmlText__boolean_$pp_org_pepstock_charba_client_items(htmlText);
  }
 }
 
 static $clinit() {
  HasLegendText.$clinit = () =>{};
  HasLegendText.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_items_HasLegendText = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_items_HasLegendText;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.items.HasLegendText.$LambdaAdaptor$impl');
  LegendTextHandler = goog.module.get('org.pepstock.charba.client.items.LegendTextHandler$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
HasLegendText.$markImplementor(/**@type {Function}*/ (HasLegendText));
$Util.$setClassMetadataForInterface(HasLegendText, "org.pepstock.charba.client.items.HasLegendText");

exports = HasLegendText;

//# sourceMappingURL=HasLegendText.js.map
