goog.module('org.pepstock.charba.client.resources.EmbeddedResources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractResources = goog.require('org.pepstock.charba.client.resources.AbstractResources$impl');
const IsResourceType = goog.require('org.pepstock.charba.client.resources.IsResourceType$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Injector = goog.forwardDeclare('org.pepstock.charba.client.Injector$impl');
let DateAdapterModule = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterModule$impl');
let AbstractInjectableResource = goog.forwardDeclare('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');
let ChartJsResource = goog.forwardDeclare('org.pepstock.charba.client.resources.ChartJsResource$impl');
let DateAdapterInjectionComplete = goog.forwardDeclare('org.pepstock.charba.client.resources.DateAdapterInjectionComplete$impl');
let EmptyResource = goog.forwardDeclare('org.pepstock.charba.client.resources.EmptyResource$impl');
let LuxonAdapterResource = goog.forwardDeclare('org.pepstock.charba.client.resources.LuxonAdapterResource$impl');
let LuxonLibraryResource = goog.forwardDeclare('org.pepstock.charba.client.resources.LuxonLibraryResource$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {IsResourceType}
 */
class EmbeddedResources extends AbstractResources {
 /** @protected */
 constructor() {
  super();
  /**@type {LuxonAdapterResource}*/
  this.f_dateAdapter__org_pepstock_charba_client_resources_EmbeddedResources_;
  /**@type {LuxonLibraryResource}*/
  this.f_dateLibrary__org_pepstock_charba_client_resources_EmbeddedResources_;
 }
 /** @return {!EmbeddedResources} */
 static $create__boolean(/** boolean */ injectDateLibrary) {
  let $instance = new EmbeddedResources();
  $instance.$ctor__org_pepstock_charba_client_resources_EmbeddedResources__boolean(injectDateLibrary);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_resources_EmbeddedResources__boolean(/** boolean */ injectDateLibrary) {
  this.$ctor__org_pepstock_charba_client_resources_AbstractResources__boolean(injectDateLibrary);
  this.$init___$p_org_pepstock_charba_client_resources_EmbeddedResources();
 }
 /** @override */
 m_inject__() {
  if (!ResourcesType.m_isInjected__() && !DateAdapterModule.m_get__().m_isInjected__()) {
   this.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource_$p_org_pepstock_charba_client_resources_EmbeddedResources(EmbeddedResources.f_CHARTJS__org_pepstock_charba_client_resources_EmbeddedResources_);
   if (this.m_mustInjectDateLibrary___$pp_org_pepstock_charba_client_resources()) {
    this.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource_$p_org_pepstock_charba_client_resources_EmbeddedResources(this.m_checkAndGetDateTimeResourceName__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_resources_ResourceName_$p_org_pepstock_charba_client_resources_EmbeddedResources(this.f_dateLibrary__org_pepstock_charba_client_resources_EmbeddedResources_, ResourceName.f_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName));
   } else {
    this.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource_$p_org_pepstock_charba_client_resources_EmbeddedResources(this.m_checkAndGetDateTimeResourceName__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_resources_ResourceName_$p_org_pepstock_charba_client_resources_EmbeddedResources(EmptyResource.$create__org_pepstock_charba_client_commons_Key(ResourceName.f_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName), ResourceName.f_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName));
   }
   this.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource_$p_org_pepstock_charba_client_resources_EmbeddedResources(this.m_checkAndGetDateTimeResourceName__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_resources_ResourceName_$p_org_pepstock_charba_client_resources_EmbeddedResources(this.f_dateAdapter__org_pepstock_charba_client_resources_EmbeddedResources_, ResourceName.f_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName));
   ResourcesType.m_setInjected__boolean(true);
   DateAdapterModule.m_get__().m_injectionComplete__org_pepstock_charba_client_resources_DateAdapterInjectionComplete(DateAdapterInjectionComplete.m_get__());
  }
 }
 
 m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource_$p_org_pepstock_charba_client_resources_EmbeddedResources(/** AbstractInjectableResource */ resource) {
  if (!Injector.m_isInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(resource)) {
   Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(resource);
  }
 }
 /** @return {AbstractInjectableResource} */
 m_checkAndGetDateTimeResourceName__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_resources_ResourceName_$p_org_pepstock_charba_client_resources_EmbeddedResources(/** AbstractInjectableResource */ resource, /** ResourceName */ resourceName) {
  if (!j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(resourceName.m_value__(), resource.m_getName__())) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Unbale to inject resource because must be '" + j_l_String.m_valueOf__java_lang_Object(resourceName.m_value__()) + "' instead of '" + j_l_String.m_valueOf__java_lang_Object(resource.m_getName__()) + "'"));
  }
  return resource;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_resources_EmbeddedResources() {
  this.f_dateAdapter__org_pepstock_charba_client_resources_EmbeddedResources_ = LuxonAdapterResource.$create__();
  this.f_dateLibrary__org_pepstock_charba_client_resources_EmbeddedResources_ = LuxonLibraryResource.$create__();
 }
 /** @return {EmbeddedResources} */
 static get f_INSTANCE__org_pepstock_charba_client_resources_EmbeddedResources() {
  return (EmbeddedResources.$clinit(), EmbeddedResources.$static_INSTANCE__org_pepstock_charba_client_resources_EmbeddedResources);
 }
 /** @return {EmbeddedResources} */
 static get f_INSTANCE_WITHOUT_DATE_LIBRARY__org_pepstock_charba_client_resources_EmbeddedResources() {
  return (EmbeddedResources.$clinit(), EmbeddedResources.$static_INSTANCE_WITHOUT_DATE_LIBRARY__org_pepstock_charba_client_resources_EmbeddedResources);
 }
 
 static $clinit() {
  EmbeddedResources.$clinit = () =>{};
  EmbeddedResources.$loadModules();
  AbstractResources.$clinit();
  EmbeddedResources.$static_INSTANCE__org_pepstock_charba_client_resources_EmbeddedResources = EmbeddedResources.$create__boolean(true);
  EmbeddedResources.$static_INSTANCE_WITHOUT_DATE_LIBRARY__org_pepstock_charba_client_resources_EmbeddedResources = EmbeddedResources.$create__boolean(false);
  EmbeddedResources.f_CHARTJS__org_pepstock_charba_client_resources_EmbeddedResources_ = ChartJsResource.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmbeddedResources;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Injector = goog.module.get('org.pepstock.charba.client.Injector$impl');
  DateAdapterModule = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterModule$impl');
  ChartJsResource = goog.module.get('org.pepstock.charba.client.resources.ChartJsResource$impl');
  DateAdapterInjectionComplete = goog.module.get('org.pepstock.charba.client.resources.DateAdapterInjectionComplete$impl');
  EmptyResource = goog.module.get('org.pepstock.charba.client.resources.EmptyResource$impl');
  LuxonAdapterResource = goog.module.get('org.pepstock.charba.client.resources.LuxonAdapterResource$impl');
  LuxonLibraryResource = goog.module.get('org.pepstock.charba.client.resources.LuxonLibraryResource$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@private {EmbeddedResources}*/
EmbeddedResources.$static_INSTANCE__org_pepstock_charba_client_resources_EmbeddedResources;
/**@private {EmbeddedResources}*/
EmbeddedResources.$static_INSTANCE_WITHOUT_DATE_LIBRARY__org_pepstock_charba_client_resources_EmbeddedResources;
/**@type {ChartJsResource}*/
EmbeddedResources.f_CHARTJS__org_pepstock_charba_client_resources_EmbeddedResources_;
IsResourceType.$markImplementor(EmbeddedResources);
$Util.$setClassMetadata(EmbeddedResources, "org.pepstock.charba.client.resources.EmbeddedResources");

exports = EmbeddedResources;

//# sourceMappingURL=EmbeddedResources.js.map
