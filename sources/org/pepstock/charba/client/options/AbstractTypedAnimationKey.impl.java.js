goog.module('org.pepstock.charba.client.options.AbstractTypedAnimationKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractStandardKey = goog.require('org.pepstock.charba.client.options.AbstractStandardKey$impl');
const IsTypedAnimationKey = goog.require('org.pepstock.charba.client.options.IsTypedAnimationKey$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @implements {IsTypedAnimationKey}
 */
class AbstractTypedAnimationKey extends AbstractStandardKey {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationType}*/
  this.f_type__org_pepstock_charba_client_options_AbstractTypedAnimationKey_;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractTypedAnimationKey__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ value, /** AnimationType */ type) {
  this.$ctor__org_pepstock_charba_client_options_AbstractStandardKey__java_lang_String(value);
  this.f_type__org_pepstock_charba_client_options_AbstractTypedAnimationKey_ = type;
 }
 /** @override @return {AnimationType} */
 m_type__() {
  return this.f_type__org_pepstock_charba_client_options_AbstractTypedAnimationKey_;
 }
 /** @override @return {number} */
 hashCode() {
  return super.hashCode() + ($Equality.$same(this.f_type__org_pepstock_charba_client_options_AbstractTypedAnimationKey_, null) ? 0 : $Objects.m_hashCode__java_lang_Object(this.f_type__org_pepstock_charba_client_options_AbstractTypedAnimationKey_)) | 0;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if (super.equals(obj)) {
   let other = /**@type {AbstractTypedAnimationKey}*/ ($Casts.$to(obj, AbstractTypedAnimationKey));
   return Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(this.f_type__org_pepstock_charba_client_options_AbstractTypedAnimationKey_, other.f_type__org_pepstock_charba_client_options_AbstractTypedAnimationKey_);
  }
  return false;
 }
 
 static $clinit() {
  AbstractTypedAnimationKey.$clinit = () =>{};
  AbstractTypedAnimationKey.$loadModules();
  AbstractStandardKey.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTypedAnimationKey;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsTypedAnimationKey.$markImplementor(AbstractTypedAnimationKey);
$Util.$setClassMetadata(AbstractTypedAnimationKey, "org.pepstock.charba.client.options.AbstractTypedAnimationKey");

exports = AbstractTypedAnimationKey;

//# sourceMappingURL=AbstractTypedAnimationKey.js.map
