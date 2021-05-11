goog.module('org.pepstock.charba.client.commons.PropertyKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.commons.PropertyKey.$LambdaAdaptor$impl');
let PropertyKeyChecker = goog.forwardDeclare('org.pepstock.charba.client.commons.PropertyKeyChecker$impl');

/**
 * @interface
 * @extends {Key}
 */
class PropertyKey {
 /** @return {boolean} */
 static m_isValid__java_lang_String(/** ?string */ id) {
  PropertyKey.$clinit();
  return PropertyKeyChecker.m_isValid__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_commons_PropertyKey(/** PropertyKey */ id) {
  PropertyKey.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(id) && PropertyKey.m_isValid__java_lang_String(id.m_value__());
 }
 
 static m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(/** PropertyKey */ id) {
  PropertyKey.$clinit();
  PropertyKeyChecker.m_check__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__java_lang_String(/** ?string */ id) {
  PropertyKey.$clinit();
  PropertyKeyChecker.m_check__java_lang_String(id);
 }
 /** @return {PropertyKey} */
 static $adapt(/** ?function():?string */ fn) {
  PropertyKey.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PropertyKey.$clinit = () =>{};
  PropertyKey.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_commons_PropertyKey = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_PropertyKey;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.commons.PropertyKey.$LambdaAdaptor$impl');
  PropertyKeyChecker = goog.module.get('org.pepstock.charba.client.commons.PropertyKeyChecker$impl');
 }
}
PropertyKey.$markImplementor(/**@type {Function}*/ (PropertyKey));
$Util.$setClassMetadataForInterface(PropertyKey, "org.pepstock.charba.client.commons.PropertyKey");

exports = PropertyKey;

//# sourceMappingURL=PropertyKey.js.map
