goog.module('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Envelop = goog.require('org.pepstock.charba.client.commons.Envelop$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 * @template T
 * @implements {Envelop}
 */
class ImmutableEnvelop extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_content__org_pepstock_charba_client_commons_ImmutableEnvelop_;
  /**@type {boolean}*/
  this.f_nullable__org_pepstock_charba_client_commons_ImmutableEnvelop_ = false;
 }
 //Initialization from constructor 'ImmutableEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, false);
 }
 //Initialization from constructor 'ImmutableEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_commons_ImmutableEnvelop();
  this.f_content__org_pepstock_charba_client_commons_ImmutableEnvelop_ = content;
  this.f_nullable__org_pepstock_charba_client_commons_ImmutableEnvelop_ = nullable;
 }
 /** @return {T} */
 m_getContent__() {
  return this.f_content__org_pepstock_charba_client_commons_ImmutableEnvelop_;
 }
 
 m_setContentInternally__java_lang_Object_$pp_org_pepstock_charba_client_commons(/** T */ content) {
  this.f_content__org_pepstock_charba_client_commons_ImmutableEnvelop_ = content;
 }
 /** @override @return {boolean} */
 m_hasContent__() {
  return !$Equality.$same(this.f_content__org_pepstock_charba_client_commons_ImmutableEnvelop_, null);
 }
 /** @override @return {boolean} */
 m_isNullable__() {
  return this.f_nullable__org_pepstock_charba_client_commons_ImmutableEnvelop_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_ImmutableEnvelop() {
  this.f_content__org_pepstock_charba_client_commons_ImmutableEnvelop_ = null;
 }
 
 static $clinit() {
  ImmutableEnvelop.$clinit = () =>{};
  ImmutableEnvelop.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImmutableEnvelop;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Envelop.$markImplementor(ImmutableEnvelop);
$Util.$setClassMetadata(ImmutableEnvelop, "org.pepstock.charba.client.commons.ImmutableEnvelop");

exports = ImmutableEnvelop;

//# sourceMappingURL=ImmutableEnvelop.js.map
