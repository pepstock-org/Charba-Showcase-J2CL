goog.module('org.pepstock.charba.client.InjectorPrefixHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AbstractInjectableResource = goog.forwardDeclare('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class InjectorPrefixHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_charbaPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_;
  /**@type {?string}*/
  this.f_customPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_;
 }
 /** @return {!InjectorPrefixHelper} */
 static $create__() {
  let $instance = new InjectorPrefixHelper();
  $instance.$ctor__org_pepstock_charba_client_InjectorPrefixHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_InjectorPrefixHelper__() {
  this.$ctor__java_lang_Object__();
  let fullClassName = this.m_getClass__().m_getName__();
  let shortClassname = this.m_getClass__().m_getSimpleName__();
  this.f_charbaPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_ = j_l_String.m_substring__java_lang_String__int__int(fullClassName, 0, j_l_String.m_indexOf__java_lang_String__java_lang_String(fullClassName, shortClassname));
  this.f_customPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_ = j_l_String.m_valueOf__java_lang_Object(this.f_charbaPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_) + j_l_String.m_valueOf__java_lang_Object(InjectorPrefixHelper.f_CUSTOM_SUFFIX__org_pepstock_charba_client_InjectorPrefixHelper_);
 }
 /** @return {InjectorPrefixHelper} */
 static m_get__() {
  InjectorPrefixHelper.$clinit();
  return InjectorPrefixHelper.f_INSTANCE__org_pepstock_charba_client_InjectorPrefixHelper_;
 }
 /** @return {?string} */
 m_getCharbaPrefixPackageName___$pp_org_pepstock_charba_client() {
  return this.f_charbaPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_;
 }
 /** @return {?string} */
 m_getPrefixPackageName__org_pepstock_charba_client_resources_AbstractInjectableResource_$pp_org_pepstock_charba_client(/** AbstractInjectableResource */ resource) {
  let checkedResource = /**@type {AbstractInjectableResource}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(resource, "Injectable resource"), AbstractInjectableResource));
  let key = /**@type {ResourceName}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(ResourceName.m_values__(), checkedResource.m_getName__()), ResourceName));
  if (!$Equality.$same(key, null)) {
   return this.f_charbaPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_;
  }
  return this.f_customPrefixPackageName__org_pepstock_charba_client_InjectorPrefixHelper_;
 }
 
 static $clinit() {
  InjectorPrefixHelper.$clinit = () =>{};
  InjectorPrefixHelper.$loadModules();
  j_l_Object.$clinit();
  InjectorPrefixHelper.f_INSTANCE__org_pepstock_charba_client_InjectorPrefixHelper_ = InjectorPrefixHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InjectorPrefixHelper;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  AbstractInjectableResource = goog.module.get('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
InjectorPrefixHelper.f_CUSTOM_SUFFIX__org_pepstock_charba_client_InjectorPrefixHelper_ = "_custom";
/**@type {InjectorPrefixHelper}*/
InjectorPrefixHelper.f_INSTANCE__org_pepstock_charba_client_InjectorPrefixHelper_;
$Util.$setClassMetadata(InjectorPrefixHelper, "org.pepstock.charba.client.InjectorPrefixHelper");

exports = InjectorPrefixHelper;

//# sourceMappingURL=InjectorPrefixHelper.js.map
