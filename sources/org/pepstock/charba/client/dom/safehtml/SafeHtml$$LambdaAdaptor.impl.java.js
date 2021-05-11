goog.module('org.pepstock.charba.client.dom.safehtml.SafeHtml.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtml = goog.require('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');

/**
 * @implements {SafeHtml}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_fn__org_pepstock_charba_client_dom_safehtml_SafeHtml_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_dom_safehtml_SafeHtml_$LambdaAdaptor__org_pepstock_charba_client_dom_safehtml_SafeHtml_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_dom_safehtml_SafeHtml_$LambdaAdaptor__org_pepstock_charba_client_dom_safehtml_SafeHtml_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_dom_safehtml_SafeHtml_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_asString__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_dom_safehtml_SafeHtml_$LambdaAdaptor, $function());
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
SafeHtml.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.dom.safehtml.SafeHtml$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=SafeHtml$$LambdaAdaptor.js.map
