goog.module('elemental2.core.JsNumber.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__elemental2_core_JsArray__elemental2_core_JsObject(/** !Number */ $thisArg, /** Array<?string> */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)), options);
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__elemental2_core_JsArray__java_lang_Object(/** !Number */ $thisArg, /** Array<?string> */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_JsNumber__elemental2_core_JsArray__elemental2_core_JsObject($thisArg, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__elemental2_core_JsArray(/** !Number */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__java_lang_String__elemental2_core_JsObject(/** !Number */ $thisArg, /** ?string */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)), options);
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__arrayOf_java_lang_String__elemental2_core_JsObject(/** !Number */ $thisArg, /** Array<?string> */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_JsNumber__elemental2_core_JsArray__elemental2_core_JsObject($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(locales)), options);
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__java_lang_String__java_lang_Object(/** !Number */ $thisArg, /** ?string */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_JsNumber__java_lang_String__elemental2_core_JsObject($thisArg, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__arrayOf_java_lang_String__java_lang_Object(/** !Number */ $thisArg, /** Array<?string> */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_JsNumber__arrayOf_java_lang_String__elemental2_core_JsObject($thisArg, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__java_lang_String(/** !Number */ $thisArg, /** ?string */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__arrayOf_java_lang_String(/** !Number */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_JsNumber__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_JsNumber__elemental2_core_JsNumber_ToLocaleStringLocalesUnionType__java_lang_Object(/** !Number */ $thisArg, /** ? */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {?string} */
 static m_toString__$devirt__elemental2_core_JsNumber__elemental2_core_JsNumber(/** !Number */ $thisArg, /** Number */ radix) {
  $Overlay.$clinit();
  return $thisArg.toString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(radix)));
 }
 /** @return {?string} */
 static m_toString__$devirt__elemental2_core_JsNumber__int(/** !Number */ $thisArg, /** number */ radix) {
  $Overlay.$clinit();
  return $thisArg.toString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(radix)));
 }
 /** @return {number} */
 static get f_EPSILON__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_EPSILON__elemental2_core_JsNumber_$Overlay);
 }
 /** @return {number} */
 static get f_MAX_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_MAX_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay);
 }
 /** @return {number} */
 static get f_MAX_VALUE__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_MAX_VALUE__elemental2_core_JsNumber_$Overlay);
 }
 /** @return {number} */
 static get f_MIN_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_MIN_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay);
 }
 /** @return {number} */
 static get f_MIN_VALUE__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_MIN_VALUE__elemental2_core_JsNumber_$Overlay);
 }
 /** @return {number} */
 static get f_NEGATIVE_INFINITY__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_NEGATIVE_INFINITY__elemental2_core_JsNumber_$Overlay);
 }
 /** @return {number} */
 static get f_NaN__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_NaN__elemental2_core_JsNumber_$Overlay);
 }
 /** @return {number} */
 static get f_POSITIVE_INFINITY__elemental2_core_JsNumber_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_POSITIVE_INFINITY__elemental2_core_JsNumber_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_EPSILON__elemental2_core_JsNumber_$Overlay = Number.EPSILON;
  $Overlay.$static_MAX_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay = Number.MAX_SAFE_INTEGER;
  $Overlay.$static_MAX_VALUE__elemental2_core_JsNumber_$Overlay = Number.MAX_VALUE;
  $Overlay.$static_MIN_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay = Number.MIN_SAFE_INTEGER;
  $Overlay.$static_MIN_VALUE__elemental2_core_JsNumber_$Overlay = Number.MIN_VALUE;
  $Overlay.$static_NEGATIVE_INFINITY__elemental2_core_JsNumber_$Overlay = Number.NEGATIVE_INFINITY;
  $Overlay.$static_NaN__elemental2_core_JsNumber_$Overlay = Number.NaN;
  $Overlay.$static_POSITIVE_INFINITY__elemental2_core_JsNumber_$Overlay = Number.POSITIVE_INFINITY;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Number;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number}*/
$Overlay.$static_EPSILON__elemental2_core_JsNumber_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_MAX_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_MAX_VALUE__elemental2_core_JsNumber_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_MIN_SAFE_INTEGER__elemental2_core_JsNumber_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_MIN_VALUE__elemental2_core_JsNumber_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_NEGATIVE_INFINITY__elemental2_core_JsNumber_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_NaN__elemental2_core_JsNumber_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_POSITIVE_INFINITY__elemental2_core_JsNumber_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "Number");

exports = $Overlay;

//# sourceMappingURL=JsNumber$$Overlay.js.map