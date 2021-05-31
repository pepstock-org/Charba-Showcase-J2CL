goog.module('org.pepstock.charba.client.commons.NativeObjectUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let NativeObjectHashing = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectHashing$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class NativeObjectUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeObjectUtils} */
 static $create__() {
  let $instance = new NativeObjectUtils();
  $instance.$ctor__org_pepstock_charba_client_commons_NativeObjectUtils__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_NativeObjectUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?} */
 static m_create__() {
  NativeObjectUtils.$clinit();
  let nativeObject = JsHelper.m_get__().m_create___$pp_org_pepstock_charba_client_commons();
  NativeObjectHashing.m_handleHashCode__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return nativeObject;
 }
 /** @return {List<?string>} */
 static m_propertiesKeys__org_pepstock_charba_client_commons_NativeObject(/** ? */ object) {
  NativeObjectUtils.$clinit();
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(Object.keys(object));
 }
 /** @return {boolean} */
 static m_hasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ object, /** ?string */ key) {
  NativeObjectUtils.$clinit();
  return JsHelper.m_get__().m_has__java_lang_Object__java_lang_String(object, key);
 }
 
 static m_removeProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ object, /** ?string */ key) {
  NativeObjectUtils.$clinit();
  JsHelper.m_get__().m_remove__org_pepstock_charba_client_commons_NativeObject__java_lang_String_$pp_org_pepstock_charba_client_commons(object, key);
 }
 
 static m_defineBooleanProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__boolean(/** ? */ object, /** ?string */ key, /** boolean */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectBooleanHelper.set(object, key, value);
 }
 
 static m_defineIntProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__int(/** ? */ object, /** ?string */ key, /** number */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectIntegerHelper.set(object, key, value);
 }
 
 static m_defineDoubleProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__double(/** ? */ object, /** ?string */ key, /** number */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectDoubleHelper.set(object, key, value);
 }
 
 static m_defineStringProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__java_lang_String(/** ? */ object, /** ?string */ key, /** ?string */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectStringHelper.set(object, key, value);
 }
 
 static m_defineImageProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_Img(/** ? */ object, /** ?string */ key, /** HTMLImageElement */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectImageHelper.set(object, key, value);
 }
 
 static m_definePatternProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** ? */ object, /** ?string */ key, /** CanvasPattern */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectPatternHelper.set(object, key, value);
 }
 
 static m_defineGradientProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** ? */ object, /** ?string */ key, /** CanvasGradient */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectGradientHelper.set(object, key, value);
 }
 
 static m_defineCallbackProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/** ? */ object, /** ?string */ key, /** ?function():void */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectCallbackProxyHelper.set(object, key, value);
 }
 
 static m_defineCallbackProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_callbacks_NativeCallback(/** ? */ object, /** ?string */ key, /** Function */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectCallbackHelper.set(object, key, value);
 }
 
 static m_defineObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_NativeObject(/** ? */ object, /** ?string */ key, /** ? */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectNativeObjectHelper.set(object, key, value);
 }
 
 static m_defineChartProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_Chart(/** ? */ object, /** ?string */ key, /** Chart */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectChartHelper.set(object, key, value);
 }
 
 static m_defineEventProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_BaseNativeEvent(/** ? */ object, /** ?string */ key, /** Object */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectNativeEventHelper.set(object, key, value);
 }
 /** @template T */
 static m_defineArrayProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_Array(/** ? */ object, /** ?string */ key, /** T */ value) {
  NativeObjectUtils.$clinit();
  CharbaJsObjectArrayHelper.set(object, key, value);
 }
 /** @return {boolean} */
 static m_getBooleanProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__boolean(/** ? */ object, /** ?string */ key, /** boolean */ defaultValue) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectBooleanHelper.get(object, key);
  }
  return defaultValue;
 }
 /** @return {number} */
 static m_getIntProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__int(/** ? */ object, /** ?string */ key, /** number */ defaultValue) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectIntegerHelper.get(object, key);
  }
  return defaultValue;
 }
 /** @return {number} */
 static m_getDoubleProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__double(/** ? */ object, /** ?string */ key, /** number */ defaultValue) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectDoubleHelper.get(object, key);
  }
  return defaultValue;
 }
 /** @return {?string} */
 static m_getStringProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__java_lang_String(/** ? */ object, /** ?string */ key, /** ?string */ defaultValue) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectStringHelper.get(object, key);
  }
  return defaultValue;
 }
 /** @return {HTMLImageElement} */
 static m_getImageProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_Img(/** ? */ object, /** ?string */ key, /** HTMLImageElement */ defaultValue) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectImageHelper.get(object, key);
  }
  return defaultValue;
 }
 /** @return {CanvasPattern} */
 static m_getPatternProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** ? */ object, /** ?string */ key, /** CanvasPattern */ defaultValue) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectPatternHelper.get(object, key);
  }
  return defaultValue;
 }
 /** @return {CanvasGradient} */
 static m_getGradientProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** ? */ object, /** ?string */ key, /** CanvasGradient */ defaultValue) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectGradientHelper.get(object, key);
  }
  return defaultValue;
 }
 /** @return {?} */
 static m_getObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ object, /** ?string */ key) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectNativeObjectHelper.get(object, key);
  }
  return null;
 }
 /** @return {Chart} */
 static m_getChartProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ object, /** ?string */ key) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectChartHelper.get(object, key);
  }
  return null;
 }
 /** @return {Object} */
 static m_getEventProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ object, /** ?string */ key) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectNativeEventHelper.get(object, key);
  }
  return null;
 }
 /** @template T @return {T} */
 static m_getArrayProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** ? */ object, /** ?string */ key) {
  NativeObjectUtils.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, key))) {
   return CharbaJsObjectArrayHelper.get(object, key);
  }
  return null;
 }
 
 static $clinit() {
  NativeObjectUtils.$clinit = () =>{};
  NativeObjectUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeObjectUtils;
 }
 
 static $loadModules() {
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  NativeObjectHashing = goog.module.get('org.pepstock.charba.client.commons.NativeObjectHashing$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(NativeObjectUtils, "org.pepstock.charba.client.commons.NativeObjectUtils");

exports = NativeObjectUtils;

//# sourceMappingURL=NativeObjectUtils.js.map
