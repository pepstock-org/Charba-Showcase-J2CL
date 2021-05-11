goog.module('elemental2.core.Reflect.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template THIS, RESULT @return {RESULT} */
 static m_apply__elemental2_core_Reflect_ApplyTargetFn__java_lang_Object__arrayOf_java_lang_Object(/** ?function(...*):? */ targetFn, /** THIS */ thisArg, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return Reflect.apply(targetFn, thisArg, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(argList)));
 }
 /** @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__elemental2_core_JsArray__java_lang_Class(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList, /** Class<?> */ newTargetConstructorFn) {
  $Overlay.$clinit();
  return Reflect.construct(/**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class(targetConstructorFn)), argList, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class(newTargetConstructorFn)));
 }
 /** @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__elemental2_core_JsArray(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return Reflect.construct(/**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class(targetConstructorFn)), argList);
 }
 /** @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__arrayOf_java_lang_Object__java_lang_Class(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList, /** Class<?> */ newTargetConstructorFn) {
  $Overlay.$clinit();
  return $Overlay.m_construct__java_lang_Class__elemental2_core_JsArray__java_lang_Class(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(argList)), newTargetConstructorFn);
 }
 /** @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__arrayOf_java_lang_Object(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return $Overlay.m_construct__java_lang_Class__elemental2_core_JsArray(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(argList)));
 }
 /** @template TARGET @return {TARGET} */
 static m_construct__jsinterop_base_JsConstructorFn__arrayOf_java_lang_Object__jsinterop_base_JsConstructorFn(/** ?function(...*):void */ targetConstructorFn, /** Array<*> */ argList, /** ?function(...*):void */ newTargetConstructorFn) {
  $Overlay.$clinit();
  return Reflect.construct(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(argList)), newTargetConstructorFn);
 }
 /** @template TARGET @return {TARGET} */
 static m_construct__jsinterop_base_JsConstructorFn__arrayOf_java_lang_Object(/** ?function(...*):void */ targetConstructorFn, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return Reflect.construct(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(argList)));
 }
 /** @return {boolean} */
 static m_defineProperty__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor(/** * */ target, /** ?string */ propertyKey, /** ObjectPropertyDescriptor */ attributes) {
  $Overlay.$clinit();
  return Reflect.defineProperty(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey, attributes);
 }
 /** @return {boolean} */
 static m_deleteProperty__java_lang_Object__java_lang_String(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.deleteProperty(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey);
 }
 /** @return {*} */
 static m_get__java_lang_Object__java_lang_String__java_lang_Object(/** * */ target, /** ?string */ propertyKey, /** * */ receiver) {
  $Overlay.$clinit();
  return Reflect.get(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(receiver)));
 }
 /** @return {*} */
 static m_get__java_lang_Object__java_lang_String(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.get(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey);
 }
 /** @return {ObjectPropertyDescriptor} */
 static m_getOwnPropertyDescriptor__java_lang_Object__java_lang_String(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.getOwnPropertyDescriptor(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey);
 }
 /** @return {Object} */
 static m_getPrototypeOf__java_lang_Object(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.getPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)));
 }
 /** @return {boolean} */
 static m_has__java_lang_Object__java_lang_String(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.has(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey);
 }
 /** @return {boolean} */
 static m_isExtensible__java_lang_Object(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.isExtensible(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)));
 }
 /** @return {Array<?>} */
 static m_ownKeys__java_lang_Object(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.ownKeys(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)));
 }
 /** @return {boolean} */
 static m_preventExtensions__java_lang_Object(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.preventExtensions(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)));
 }
 /** @return {boolean} */
 static m_set__java_lang_Object__java_lang_String__java_lang_Object__java_lang_Object(/** * */ target, /** ?string */ propertyKey, /** * */ value, /** * */ receiver) {
  $Overlay.$clinit();
  return Reflect.set(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey, value, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(receiver)));
 }
 /** @return {boolean} */
 static m_set__java_lang_Object__java_lang_String__java_lang_Object(/** * */ target, /** ?string */ propertyKey, /** * */ value) {
  $Overlay.$clinit();
  return Reflect.set(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), propertyKey, value);
 }
 /** @return {boolean} */
 static m_setPrototypeOf__java_lang_Object__java_lang_Object(/** * */ target, /** * */ proto) {
  $Overlay.$clinit();
  return Reflect.setPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(proto)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Reflect;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Reflect");

exports = $Overlay;

//# sourceMappingURL=Reflect$$Overlay.js.map
