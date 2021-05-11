goog.module('org.pepstock.charba.client.commons.JsHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Injector = goog.forwardDeclare('org.pepstock.charba.client.Injector$impl');
let JsHelperResource = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelperResource$impl');
let NativeObjectUtils = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class JsHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {JsHelperResource}*/
  this.f_resource__org_pepstock_charba_client_commons_JsHelper_;
 }
 /** @return {!JsHelper} */
 static $create__() {
  let $instance = new JsHelper();
  $instance.$ctor__org_pepstock_charba_client_commons_JsHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_JsHelper__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_commons_JsHelper();
  Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(this.f_resource__org_pepstock_charba_client_commons_JsHelper_);
 }
 /** @return {JsHelper} */
 static m_get__() {
  JsHelper.$clinit();
  return JsHelper.f_INSTANCE__org_pepstock_charba_client_commons_JsHelper_;
 }
 /** @return {?} */
 m_create___$pp_org_pepstock_charba_client_commons() {
  return CharbaJsHelper.create();
 }
 /** @template T @return {T} */
 m_cast__java_lang_Object(/** * */ object) {
  return CharbaJsHelper.cast(object);
 }
 /** @return {MutationObserverInit} */
 m_createMutationObserverInit__() {
  return /**@type {MutationObserverInit}*/ (this.m_cast__java_lang_Object(NativeObjectUtils.m_create__()));
 }
 /** @return {boolean} */
 m_has__java_lang_Object__java_lang_String(/** * */ object, /** ?string */ key) {
  if (!$Equality.$same(object, null) && !$Equality.$same(key, null)) {
   return CharbaJsHelper.has(object, key);
  }
  return false;
 }
 /** @return {ObjectType} */
 m_typeOf__java_lang_Object(/** * */ object) {
  if (!$Equality.$same(object, null)) {
   return ObjectType.m_getType__java_lang_String__boolean(CharbaJsHelper.typeOf(object), Array.isArray(object));
  }
  return ObjectType.f_UNDEFINED__org_pepstock_charba_client_commons_ObjectType;
 }
 /** @return {ObjectType} */
 m_typeOf__java_lang_Object__java_lang_String(/** * */ object, /** ?string */ key) {
  if (!$Equality.$same(object, null) && !$Equality.$same(key, null)) {
   return ObjectType.m_getType__java_lang_String__boolean(CharbaJsHelper.type(object, key), CharbaJsHelper.isArray(object, key));
  }
  return ObjectType.f_UNDEFINED__org_pepstock_charba_client_commons_ObjectType;
 }
 /** @template T @return {CharbaCallbackProxy<T>} */
 m_newCallbackProxy__() {
  return /**@type {CharbaCallbackProxy<T>}*/ (CharbaJsHelper.newCallbackProxy());
 }
 
 m_remove__org_pepstock_charba_client_commons_NativeObject__java_lang_String_$pp_org_pepstock_charba_client_commons(/** ? */ object, /** ?string */ key) {
  if (!$Equality.$same(object, null) && !$Equality.$same(key, null)) {
   CharbaJsHelper.remove(object, key);
  }
 }
 /** @return {boolean} */
 m_isCanvasPattern__java_lang_Object(/** * */ object) {
  if (!$Equality.$same(object, null)) {
   return CharbaJsHelper.isCanvasPattern(object);
  }
  return false;
 }
 /** @return {boolean} */
 m_isCanvasGradient__java_lang_Object(/** * */ object) {
  if (!$Equality.$same(object, null)) {
   return CharbaJsHelper.isCanvasGradient(object);
  }
  return false;
 }
 /** @return {number} */
 m_propertyAsInt__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ object, /** ?string */ key) {
  if (!$Equality.$same(object, null) && !$Equality.$same(key, null)) {
   return NativeObjectUtils.m_getIntProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__int(object, key, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_JsHelper() {
  this.f_resource__org_pepstock_charba_client_commons_JsHelper_ = JsHelperResource.$create__();
 }
 
 static $clinit() {
  JsHelper.$clinit = () =>{};
  JsHelper.$loadModules();
  j_l_Object.$clinit();
  JsHelper.f_INSTANCE__org_pepstock_charba_client_commons_JsHelper_ = JsHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Injector = goog.module.get('org.pepstock.charba.client.Injector$impl');
  JsHelperResource = goog.module.get('org.pepstock.charba.client.commons.JsHelperResource$impl');
  NativeObjectUtils = goog.module.get('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@type {JsHelper}*/
JsHelper.f_INSTANCE__org_pepstock_charba_client_commons_JsHelper_;
$Util.$setClassMetadata(JsHelper, "org.pepstock.charba.client.commons.JsHelper");

exports = JsHelper;

//# sourceMappingURL=JsHelper.js.map
