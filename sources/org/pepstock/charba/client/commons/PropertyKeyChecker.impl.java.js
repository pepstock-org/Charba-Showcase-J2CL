goog.module('org.pepstock.charba.client.commons.PropertyKeyChecker$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let PropertyKey = goog.forwardDeclare('org.pepstock.charba.client.commons.PropertyKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PropertyKeyChecker extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PropertyKeyChecker} */
 static $create__() {
  let $instance = new PropertyKeyChecker();
  $instance.$ctor__org_pepstock_charba_client_commons_PropertyKeyChecker__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_PropertyKeyChecker__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static m_isValid__java_lang_String(/** ?string */ id) {
  PropertyKeyChecker.$clinit();
  return !$Equality.$same(id, null) && !$Equality.$same(PropertyKeyChecker.f_REGEXP_ID__org_pepstock_charba_client_commons_PropertyKeyChecker_.exec(id), null);
 }
 
 static m_check__java_lang_String(/** ?string */ id) {
  PropertyKeyChecker.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(id, "Property key");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(PropertyKeyChecker.f_REGEXP_ID__org_pepstock_charba_client_commons_PropertyKeyChecker_.exec(id), PropertyKeyChecker.m_buildMessage__java_lang_String__java_lang_String(id, "Property key can not contain any invalid characters"));
 }
 
 static m_check__org_pepstock_charba_client_commons_PropertyKey(/** PropertyKey */ id) {
  PropertyKeyChecker.$clinit();
  PropertyKeyChecker.m_check__java_lang_String(/**@type {PropertyKey}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(id), PropertyKey)).m_value__());
 }
 /** @return {?string} */
 static m_buildMessage__java_lang_String__java_lang_String(/** ?string */ propertyKey, /** ?string */ message) {
  let sb = StringBuilder.$create__java_lang_String(message);
  sb.m_append__java_lang_String(Constants.f_OPEN_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(propertyKey).m_append__java_lang_String(Constants.f_CLOSE_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants);
  return sb.toString();
 }
 
 static $clinit() {
  PropertyKeyChecker.$clinit = () =>{};
  PropertyKeyChecker.$loadModules();
  j_l_Object.$clinit();
  PropertyKeyChecker.f_REGEXP_ID__org_pepstock_charba_client_commons_PropertyKeyChecker_ = new RegExp(PropertyKeyChecker.f_REGEXP_ID_PATTERN__org_pepstock_charba_client_commons_PropertyKeyChecker_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PropertyKeyChecker;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  PropertyKey = goog.module.get('org.pepstock.charba.client.commons.PropertyKey$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
PropertyKeyChecker.f_REGEXP_ID_PATTERN__org_pepstock_charba_client_commons_PropertyKeyChecker_ = "^[a-zA-Z0-9_-]+$";
/**@type {RegExp}*/
PropertyKeyChecker.f_REGEXP_ID__org_pepstock_charba_client_commons_PropertyKeyChecker_;
$Util.$setClassMetadata(PropertyKeyChecker, "org.pepstock.charba.client.commons.PropertyKeyChecker");

exports = PropertyKeyChecker;

//# sourceMappingURL=PropertyKeyChecker.js.map
