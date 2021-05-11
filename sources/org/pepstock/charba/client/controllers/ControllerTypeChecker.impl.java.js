goog.module('org.pepstock.charba.client.controllers.ControllerTypeChecker$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');

class ControllerTypeChecker extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ControllerTypeChecker} */
 static $create__() {
  let $instance = new ControllerTypeChecker();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllerTypeChecker__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_controllers_ControllerTypeChecker__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_check__org_pepstock_charba_client_Type(/** Type */ type) {
  ControllerTypeChecker.$clinit();
  Type.m_checkIfValid__org_pepstock_charba_client_Type(type);
  Checker.m_assertCheck__boolean__java_lang_String(!j_l_String.m_startsWith__java_lang_String__java_lang_String(type.m_value__(), Constants.f_DOT__org_pepstock_charba_client_commons_Constants) && !j_l_String.m_startsWith__java_lang_String__java_lang_String(type.m_value__(), Constants.f_UNDERSCORE__org_pepstock_charba_client_commons_Constants), ControllerTypeChecker.m_buildMessage__java_lang_String__java_lang_String(type.m_value__(), "Controller type can not start with a dot or an underscore "));
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(Constants.f_REGEXP_ID__org_pepstock_charba_client_commons_Constants.exec(type.m_value__()), ControllerTypeChecker.m_buildMessage__java_lang_String__java_lang_String(type.m_value__(), "Controller type can not contain any invalid characters "));
 }
 /** @return {?string} */
 static m_buildMessage__java_lang_String__java_lang_String(/** ?string */ type, /** ?string */ message) {
  let sb = StringBuilder.$create__java_lang_String(message);
  sb.m_append__java_lang_String(Constants.f_OPEN_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(type).m_append__java_lang_String(Constants.f_CLOSE_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants);
  return sb.toString();
 }
 
 static $clinit() {
  ControllerTypeChecker.$clinit = () =>{};
  ControllerTypeChecker.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ControllerTypeChecker;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
 }
}
$Util.$setClassMetadata(ControllerTypeChecker, "org.pepstock.charba.client.controllers.ControllerTypeChecker");

exports = ControllerTypeChecker;

//# sourceMappingURL=ControllerTypeChecker.js.map
