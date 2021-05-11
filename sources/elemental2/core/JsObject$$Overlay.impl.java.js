goog.module('elemental2.core.JsObject.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {Object} */
 static m_assign__java_lang_Object__arrayOf_java_lang_Object(/** * */ target, /** Array<*> */ var_args) {
  $Overlay.$clinit();
  return Object.assign(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(target)), ...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<Object>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 /** @return {Object} */
 static m_create__java_lang_Object__jsinterop_base_JsPropertyMap(/** * */ proto, /** Object<string, ObjectPropertyDescriptor<*>> */ properties) {
  $Overlay.$clinit();
  return Object.create(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(proto)), properties);
 }
 /** @return {Object} */
 static m_create__java_lang_Object(/** * */ proto) {
  $Overlay.$clinit();
  return Object.create(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(proto)));
 }
 /** @template T @return {T} */
 static m_defineProperty__java_lang_Object__java_lang_Object__elemental2_core_ObjectPropertyDescriptor(/** T */ obj, /** * */ prop, /** ObjectPropertyDescriptor<T> */ descriptor) {
  $Overlay.$clinit();
  return Object.defineProperty(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(prop)), descriptor);
 }
 /** @template T @return {T} */
 static m_defineProperty__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor(/** T */ obj, /** ?string */ prop, /** ObjectPropertyDescriptor<T> */ descriptor) {
  $Overlay.$clinit();
  return Object.defineProperty(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(prop)), descriptor);
 }
 /** @template T @return {ObjectPropertyDescriptor<T>} */
 static m_getOwnPropertyDescriptor__java_lang_Object__java_lang_Object(/** T */ obj, /** * */ prop) {
  $Overlay.$clinit();
  return /**@type {ObjectPropertyDescriptor<T>}*/ (Object.getOwnPropertyDescriptor(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(prop))));
 }
 /** @template T @return {ObjectPropertyDescriptor<T>} */
 static m_getOwnPropertyDescriptor__java_lang_Object__java_lang_String(/** T */ obj, /** ?string */ prop) {
  $Overlay.$clinit();
  return /**@type {ObjectPropertyDescriptor<T>}*/ (Object.getOwnPropertyDescriptor(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(prop))));
 }
 /** @return {Object<string, ObjectPropertyDescriptor>} */
 static m_getOwnPropertyDescriptors__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getOwnPropertyDescriptors(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {Array<?string>} */
 static m_getOwnPropertyNames__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getOwnPropertyNames(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {Array<*>} */
 static m_getOwnPropertySymbols__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getOwnPropertySymbols(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {Object} */
 static m_getPrototypeOf__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {boolean} */
 static m_isExtensible__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.isExtensible(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {boolean} */
 static m_isFrozen__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.isFrozen(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {boolean} */
 static m_isSealed__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.isSealed(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {Array<?string>} */
 static m_keys__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return Object.keys(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {Object} */
 static m_setPrototypeOf__java_lang_Object__java_lang_Object(/** * */ obj, /** * */ proto) {
  $Overlay.$clinit();
  return Object.setPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(obj)), proto);
 }
 /** @return {boolean} */
 static m_isPrototypeOf__$devirt__elemental2_core_JsObject__java_lang_Object(/** !Object */ $thisArg, /** * */ other) {
  $Overlay.$clinit();
  return $thisArg.isPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(other)));
 }
 /** @return {boolean} */
 static m_propertyIsEnumerable__$devirt__elemental2_core_JsObject__java_lang_Object(/** !Object */ $thisArg, /** * */ propertyName) {
  $Overlay.$clinit();
  return $thisArg.propertyIsEnumerable(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(propertyName)));
 }
 /** @return {boolean} */
 static m_propertyIsEnumerable__$devirt__elemental2_core_JsObject__java_lang_String(/** !Object */ $thisArg, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return $thisArg.propertyIsEnumerable(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(propertyName)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Object");

exports = $Overlay;

//# sourceMappingURL=JsObject$$Overlay.js.map
