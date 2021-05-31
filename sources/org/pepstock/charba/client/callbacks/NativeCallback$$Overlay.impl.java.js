goog.module('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');

class $Overlay {
 /** @return {Function} */
 static m_create__java_lang_String(/** ?string */ code) {
  $Overlay.$clinit();
  return $Overlay.m_create__java_lang_String__java_lang_String($Overlay.f_DEFAULT_CONTEXT_ARGUMENT__org_pepstock_charba_client_callbacks_NativeCallback_$Overlay_, code);
 }
 /** @return {Function} */
 static m_create__java_lang_String__java_lang_String(/** ?string */ argument, /** ?string */ code) {
  $Overlay.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(code, "Code argument");
  Checker.m_checkAndGetIfGreaterThan__int__int__java_lang_String(j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(code)), 0, "Code argument length ");
  let argumentVariable = !$Equality.$same(argument, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(argument)) > 0 ? argument : $Overlay.f_DEFAULT_CONTEXT_ARGUMENT__org_pepstock_charba_client_callbacks_NativeCallback_$Overlay_;
  return new Function(argumentVariable, code);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Function;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
 }
}
/**@const {?string}*/
$Overlay.f_DEFAULT_CONTEXT_ARGUMENT__org_pepstock_charba_client_callbacks_NativeCallback_$Overlay_ = "context";
$Util.$setClassMetadata($Overlay, "Function");

exports = $Overlay;

//# sourceMappingURL=NativeCallback$$Overlay.js.map
