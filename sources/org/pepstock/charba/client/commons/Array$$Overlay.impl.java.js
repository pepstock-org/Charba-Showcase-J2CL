goog.module('org.pepstock.charba.client.commons.Array.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {boolean} */
 static m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  return $thisArg.length == 0;
 }
 /** @return {?string} */
 static m_join__$devirt__org_pepstock_charba_client_commons_Array(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  return $thisArg.join(/**@type {?string}*/ ($Casts.$to(window.undefined, j_l_String)));
 }
 /** @return {?string} */
 static m_join__$devirt__org_pepstock_charba_client_commons_Array__java_lang_String(/** !Array */ $thisArg, /** ?string */ separator) {
  $Overlay.$clinit();
  if (!$Equality.$same(separator, null)) {
   return $thisArg.join(separator);
  }
  return $Overlay.m_join__$devirt__org_pepstock_charba_client_commons_Array($thisArg);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Array;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=Array$$Overlay.js.map
