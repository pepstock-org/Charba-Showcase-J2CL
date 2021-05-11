goog.module('org.pepstock.charba.client.intl.NativeDate.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_u_Date = goog.forwardDeclare('java.util.Date$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class $Overlay {
 /** @return {Date} */
 static m_create__java_util_Date(/** j_u_Date */ date) {
  $Overlay.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(date, "Date argument");
  return new Date($Primitives.$widenLongToDouble(date.m_getTime__()));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Date;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Date");

exports = $Overlay;

//# sourceMappingURL=NativeDate$$Overlay.js.map
