goog.module('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SafeHtml {
 /** @abstract @return {?string} */
 m_asString__() {}
 /** @abstract @return {boolean} */
 equals(/** * */ object) {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @return {SafeHtml} */
 static $adapt(/** ?function():?string */ fn) {
  SafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SafeHtml.$clinit = () =>{};
  SafeHtml.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_dom_safehtml_SafeHtml = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_dom_safehtml_SafeHtml;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtml.$LambdaAdaptor$impl');
 }
}
SafeHtml.$markImplementor(/**@type {Function}*/ (SafeHtml));
$Util.$setClassMetadataForInterface(SafeHtml, "org.pepstock.charba.client.dom.safehtml.SafeHtml");

exports = SafeHtml;

//# sourceMappingURL=SafeHtml.js.map
