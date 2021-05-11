goog.module('org.pepstock.charba.client.resources.ResourcesType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let AbstractResources = goog.forwardDeclare('org.pepstock.charba.client.resources.AbstractResources$impl');
let IsResourceType = goog.forwardDeclare('org.pepstock.charba.client.resources.IsResourceType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class ResourcesType extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ResourcesType} */
 static $create__() {
  let $instance = new ResourcesType();
  $instance.$ctor__org_pepstock_charba_client_resources_ResourcesType__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_resources_ResourcesType__() {
  this.$ctor__java_lang_Object__();
 }
 /** @template T */
 static m_setResources__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<T> */ envelop) {
  ResourcesType.$clinit();
  IsEnvelop.m_checkIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop);
  let resources = /**@type {AbstractResources}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(/**@type {T}*/ ($Casts.$to(envelop.m_getContent__(), AbstractResources)), "Resources type argument"), AbstractResources));
  Checker.m_assertCheck__boolean__java_lang_String(IsResourceType.$isInstance(resources), "Resources type is not correct. Must be an EmbeddedResources or DeferredResources instance");
  Checker.m_assertCheck__boolean__java_lang_String(!ResourcesType.m_isInjected__(), "Resources type is already loaded and can not be changed");
  ResourcesType.f_resources__org_pepstock_charba_client_resources_ResourcesType_ = resources;
  JsHelper.m_get__();
 }
 /** @return {AbstractResources} */
 static m_getResources__() {
  ResourcesType.$clinit();
  if ($Equality.$same(ResourcesType.f_resources__org_pepstock_charba_client_resources_ResourcesType_, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Resources type is invalid (not set). Must be set before using CHARBA by Charba.enable or DeferredCharba.enable"));
  }
  return ResourcesType.f_resources__org_pepstock_charba_client_resources_ResourcesType_;
 }
 /** @return {boolean} */
 static m_isInjected__() {
  ResourcesType.$clinit();
  return ResourcesType.f_injected__org_pepstock_charba_client_resources_ResourcesType_;
 }
 
 static m_setInjected__boolean(/** boolean */ injected) {
  ResourcesType.$clinit();
  ResourcesType.f_injected__org_pepstock_charba_client_resources_ResourcesType_ = injected;
 }
 
 static $clinit() {
  ResourcesType.$clinit = () =>{};
  ResourcesType.$loadModules();
  j_l_Object.$clinit();
  ResourcesType.f_resources__org_pepstock_charba_client_resources_ResourcesType_ = null;
  ResourcesType.f_injected__org_pepstock_charba_client_resources_ResourcesType_ = false;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResourcesType;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  AbstractResources = goog.module.get('org.pepstock.charba.client.resources.AbstractResources$impl');
  IsResourceType = goog.module.get('org.pepstock.charba.client.resources.IsResourceType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@type {AbstractResources}*/
ResourcesType.f_resources__org_pepstock_charba_client_resources_ResourcesType_;
/**@type {boolean}*/
ResourcesType.f_injected__org_pepstock_charba_client_resources_ResourcesType_ = false;
$Util.$setClassMetadata(ResourcesType, "org.pepstock.charba.client.resources.ResourcesType");

exports = ResourcesType;

//# sourceMappingURL=ResourcesType.js.map
