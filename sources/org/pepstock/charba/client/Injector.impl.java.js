goog.module('org.pepstock.charba.client.Injector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let InjectorPrefixHelper = goog.forwardDeclare('org.pepstock.charba.client.InjectorPrefixHelper$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let AbstractInjectableResource = goog.forwardDeclare('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');

class Injector extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Injector} */
 static $create__() {
  let $instance = new Injector();
  $instance.$ctor__org_pepstock_charba_client_Injector__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Injector__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(/** AbstractInjectableResource */ resource) {
  Injector.$clinit();
  if (!$Equality.$same(resource, null)) {
   let scriptElement = DOMBuilder.m_get__().m_createScriptElement__();
   scriptElement.charset = Injector.f_SCRIPT_ELEMENT_CHARTSET__org_pepstock_charba_client_Injector_;
   Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_dom_BaseHtmlElement(resource, scriptElement);
  }
 }
 
 static m_ensureCssInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(/** AbstractInjectableResource */ resource) {
  Injector.$clinit();
  if (!$Equality.$same(resource, null)) {
   let styleElement = DOMBuilder.m_get__().m_createStyleElement__();
   Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_dom_BaseHtmlElement(resource, styleElement);
  }
 }
 /** @return {boolean} */
 static m_isInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(/** AbstractInjectableResource */ resource) {
  Injector.$clinit();
  if (!$Equality.$same(resource, null)) {
   let resourceKey = Injector.m_createKey__org_pepstock_charba_client_resources_AbstractInjectableResource(resource);
   return Injector.f_ELEMENTS_INJECTED__org_pepstock_charba_client_Injector_.contains(resourceKey);
  }
  return false;
 }
 
 static m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_dom_BaseHtmlElement(/** AbstractInjectableResource */ resource, /** HTMLElement */ container) {
  let resourceKey = Injector.m_createKey__org_pepstock_charba_client_resources_AbstractInjectableResource(resource);
  if (!Injector.f_ELEMENTS_INJECTED__org_pepstock_charba_client_Injector_.contains(resourceKey)) {
   container.id = j_l_String.m_valueOf__java_lang_Object(Injector.f_CHARBA_PREFIX_SCRIPT_ELEMENT_ID__org_pepstock_charba_client_Injector_) + j_l_String.m_valueOf__java_lang_Object(resourceKey);
   let node = DOMBuilder.m_get__().m_createTextNode__java_lang_String(resource.m_getContent__());
   container.appendChild(node);
   window.document.head.appendChild(container);
   Injector.f_ELEMENTS_INJECTED__org_pepstock_charba_client_Injector_.add(resourceKey);
  }
 }
 /** @return {?string} */
 static m_createKey__org_pepstock_charba_client_resources_AbstractInjectableResource(/** AbstractInjectableResource */ resource) {
  return j_l_String.m_valueOf__java_lang_Object(InjectorPrefixHelper.m_get__().m_getPrefixPackageName__org_pepstock_charba_client_resources_AbstractInjectableResource_$pp_org_pepstock_charba_client(resource)) + j_l_String.m_valueOf__java_lang_Object(resource.m_getName__());
 }
 
 static $clinit() {
  Injector.$clinit = () =>{};
  Injector.$loadModules();
  j_l_Object.$clinit();
  Injector.f_ELEMENTS_INJECTED__org_pepstock_charba_client_Injector_ = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Injector;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  InjectorPrefixHelper = goog.module.get('org.pepstock.charba.client.InjectorPrefixHelper$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
 }
}
/**@const {?string}*/
Injector.f_CHARBA_PREFIX_SCRIPT_ELEMENT_ID__org_pepstock_charba_client_Injector_ = "_charba_";
/**@const {?string}*/
Injector.f_SCRIPT_ELEMENT_CHARTSET__org_pepstock_charba_client_Injector_ = "UTF-8";
/**@type {Set<?string>}*/
Injector.f_ELEMENTS_INJECTED__org_pepstock_charba_client_Injector_;
$Util.$setClassMetadata(Injector, "org.pepstock.charba.client.Injector");

exports = Injector;

//# sourceMappingURL=Injector.js.map
