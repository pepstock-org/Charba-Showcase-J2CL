goog.module('org.pepstock.charba.client.options.AbstractAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsDefaultBaseAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractAnimation.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T, D
 * @implements {IsDefaultBaseAnimation}
 */
class AbstractAnimation extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {D}*/
  this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractAnimation__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** T */ childKey, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {D}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultBaseAnimation));
 }
 /** @return {D} */
 m_getDefaultValues__() {
  return this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_;
 }
 
 m_setEasing__org_pepstock_charba_client_enums_Easing(/** Easing */ easing) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_EASING__org_pepstock_charba_client_options_AbstractAnimation_Property, easing);
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return /**@type {Easing}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_EASING__org_pepstock_charba_client_options_AbstractAnimation_Property, Easing.m_values__(), /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getEasing__()), Easing));
 }
 
 m_setDuration__int(/** number */ milliseconds) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_DURATION__org_pepstock_charba_client_options_AbstractAnimation_Property, Checker.m_positiveOrZero__int(milliseconds));
 }
 /** @override @return {number} */
 m_getDuration__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DURATION__org_pepstock_charba_client_options_AbstractAnimation_Property, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDuration__());
 }
 
 m_setDelay__int(/** number */ delay) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_DELAY__org_pepstock_charba_client_options_AbstractAnimation_Property, Checker.m_positiveOrZero__int(delay));
 }
 /** @override @return {number} */
 m_getDelay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DELAY__org_pepstock_charba_client_options_AbstractAnimation_Property, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDelay__());
 }
 
 m_setLoop__boolean(/** boolean */ loop) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_LOOP__org_pepstock_charba_client_options_AbstractAnimation_Property, loop);
 }
 /** @override @return {boolean} */
 m_isLoop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_LOOP__org_pepstock_charba_client_options_AbstractAnimation_Property, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_isLoop__());
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_options() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  AbstractAnimation.$clinit = () =>{};
  AbstractAnimation.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractAnimation;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Easing = goog.module.get('org.pepstock.charba.client.enums.Easing$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractAnimation.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultBaseAnimation.$markImplementor(AbstractAnimation);
$Util.$setClassMetadata(AbstractAnimation, "org.pepstock.charba.client.options.AbstractAnimation");

exports = AbstractAnimation;

//# sourceMappingURL=AbstractAnimation.js.map
