goog.module('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsInternalInjectableTextResource = goog.forwardDeclare('org.pepstock.charba.client.resources.IsInternalInjectableTextResource$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 */
class AbstractInjectableResource extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_resources_AbstractInjectableResource_;
  /**@type {StringBuilder}*/
  this.f_builder__org_pepstock_charba_client_resources_AbstractInjectableResource_;
 }
 //Initialization from constructor 'AbstractInjectableResource(Key, String...)'.
 
 $ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(/** Key */ key, /** Array<?string> */ content) {
  this.$ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String__arrayOf_java_lang_String(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(key).m_value__(), content);
 }
 //Initialization from constructor 'AbstractInjectableResource(String, String...)'.
 
 $ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String__arrayOf_java_lang_String(/** ?string */ name, /** Array<?string> */ content) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_resources_AbstractInjectableResource();
  this.f_name__org_pepstock_charba_client_resources_AbstractInjectableResource_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(name, "Name"), j_l_String));
  Checker.m_checkIfNotEqualTo__int__int__java_lang_String(j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(this.f_name__org_pepstock_charba_client_resources_AbstractInjectableResource_)), 0, "Name length");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(content, "Content");
  Checker.m_checkIfNotEqualTo__int__int__java_lang_String(content.length, 0, "Content size");
  if (!IsInternalInjectableTextResource.$isInstance(this)) {
   let resourceName = /**@type {ResourceName}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(ResourceName.m_values__(), name), ResourceName));
   if (!$Equality.$same(resourceName, null) && !resourceName.m_isOverride___$pp_org_pepstock_charba_client_resources() && !j_l_String.m_equals__java_lang_String__java_lang_Object(this.m_getClass__().m_getName__(), resourceName.m_getClassName___$pp_org_pepstock_charba_client_resources())) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Unable to override '" + j_l_String.m_valueOf__java_lang_Object(resourceName.m_value__()) + "' with a custom implementation"));
   }
  }
  for (let $array = content, $index = 0; $index < $array.length; $index++) {
   let line = $array[$index];
   {
    this.f_builder__org_pepstock_charba_client_resources_AbstractInjectableResource_.m_append__java_lang_String(line);
   }
  }
 }
 /** @return {?string} */
 m_getContent__() {
  return this.f_builder__org_pepstock_charba_client_resources_AbstractInjectableResource_.toString();
 }
 /** @return {?string} */
 m_getName__() {
  return this.f_name__org_pepstock_charba_client_resources_AbstractInjectableResource_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_resources_AbstractInjectableResource() {
  this.f_builder__org_pepstock_charba_client_resources_AbstractInjectableResource_ = StringBuilder.$create__();
 }
 
 static $clinit() {
  AbstractInjectableResource.$clinit = () =>{};
  AbstractInjectableResource.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractInjectableResource;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  IsInternalInjectableTextResource = goog.module.get('org.pepstock.charba.client.resources.IsInternalInjectableTextResource$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(AbstractInjectableResource, "org.pepstock.charba.client.resources.AbstractInjectableResource");

exports = AbstractInjectableResource;

//# sourceMappingURL=AbstractInjectableResource.js.map
