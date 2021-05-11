goog.module('org.pepstock.charba.client.options.AbstractStandardKey$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @implements {Key}
 */
class AbstractStandardKey extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_options_AbstractStandardKey_;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractStandardKey__java_lang_String(/** ?string */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_options_AbstractStandardKey_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_AbstractStandardKey_;
 }
 /** @override @return {number} */
 hashCode() {
  let prime = 31;
  let result = 1;
  result = Math.imul(prime, result) + ($Equality.$same(this.f_value__org_pepstock_charba_client_options_AbstractStandardKey_, null) ? 0 : j_l_String.m_hashCode__java_lang_String(this.f_value__org_pepstock_charba_client_options_AbstractStandardKey_)) | 0;
  return result;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(this, obj)) {
   return true;
  }
  if ($Equality.$same(obj, null)) {
   return false;
  }
  if (!$Equality.$same(this.m_getClass__(), $Objects.m_getClass__java_lang_Object(obj))) {
   return false;
  }
  let other = /**@type {AbstractStandardKey}*/ ($Casts.$to(obj, AbstractStandardKey));
  return Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(this, other);
 }
 
 static $clinit() {
  AbstractStandardKey.$clinit = () =>{};
  AbstractStandardKey.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractStandardKey;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Key.$markImplementor(AbstractStandardKey);
$Util.$setClassMetadata(AbstractStandardKey, "org.pepstock.charba.client.options.AbstractStandardKey");

exports = AbstractStandardKey;

//# sourceMappingURL=AbstractStandardKey.js.map
