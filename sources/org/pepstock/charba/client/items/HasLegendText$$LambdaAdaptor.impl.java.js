goog.module('org.pepstock.charba.client.items.HasLegendText.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasLegendText = goog.require('org.pepstock.charba.client.items.HasLegendText$impl');

let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let LegendTextHandler = goog.forwardDeclare('org.pepstock.charba.client.items.LegendTextHandler$impl');

/**
 * @implements {HasLegendText}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():LegendTextHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():LegendTextHandler}*/
  this.f_fn__org_pepstock_charba_client_items_HasLegendText_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_items_HasLegendText_$LambdaAdaptor__org_pepstock_charba_client_items_HasLegendText_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_items_HasLegendText_$LambdaAdaptor__org_pepstock_charba_client_items_HasLegendText_$JsFunction(/** ?function():LegendTextHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_items_HasLegendText_$LambdaAdaptor = fn;
 }
 /** @override @return {LegendTextHandler} */
 m_getLegendTextHandler__() {
  let /** ?function():LegendTextHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_items_HasLegendText_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getText__() {
  return HasLegendText.m_getText__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override @return {SafeHtml} */
 m_getTextAsHtml__() {
  return HasLegendText.m_getTextAsHtml__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isHtmlText__() {
  return HasLegendText.m_isHtmlText__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setHtmlText__boolean(/** boolean */ arg0) {
  HasLegendText.m_setHtmlText__$default__org_pepstock_charba_client_items_HasLegendText__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setText__java_lang_String(/** ?string */ arg0) {
  HasLegendText.m_setText__$default__org_pepstock_charba_client_items_HasLegendText__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml(/** SafeHtml */ arg0) {
  HasLegendText.m_setText__$default__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_dom_safehtml_SafeHtml(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasLegendText.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasLegendText.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.items.HasLegendText$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasLegendText$$LambdaAdaptor.js.map
