goog.module('elemental2.core.JsString.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsArray__elemental2_core_JsObject(/** !String */ $thisArg, /** ?string */ compareString, /** Array<?string> */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.localeCompare(compareString, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)), options);
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsArray__java_lang_Object(/** !String */ $thisArg, /** ?string */ compareString, /** Array<?string> */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsArray__elemental2_core_JsObject($thisArg, compareString, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsArray(/** !String */ $thisArg, /** ?string */ compareString, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $thisArg.localeCompare(compareString, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsString_LocaleCompareLocalesUnionType__java_lang_Object(/** !String */ $thisArg, /** ?string */ compareString, /** ? */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $thisArg.localeCompare(compareString, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__java_lang_String__elemental2_core_JsObject(/** !String */ $thisArg, /** ?string */ compareString, /** ?string */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.localeCompare(compareString, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)), options);
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__arrayOf_java_lang_String__elemental2_core_JsObject(/** !String */ $thisArg, /** ?string */ compareString, /** Array<?string> */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $Overlay.m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsArray__elemental2_core_JsObject($thisArg, compareString, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(locales)), options);
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__java_lang_String__java_lang_Object(/** !String */ $thisArg, /** ?string */ compareString, /** ?string */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__java_lang_String__elemental2_core_JsObject($thisArg, compareString, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__arrayOf_java_lang_String__java_lang_Object(/** !String */ $thisArg, /** ?string */ compareString, /** Array<?string> */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__arrayOf_java_lang_String__elemental2_core_JsObject($thisArg, compareString, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__java_lang_String(/** !String */ $thisArg, /** ?string */ compareString, /** ?string */ locales) {
  $Overlay.$clinit();
  return $thisArg.localeCompare(compareString, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {number} */
 static m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__arrayOf_java_lang_String(/** !String */ $thisArg, /** ?string */ compareString, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $Overlay.m_localeCompare__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsArray($thisArg, compareString, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {IteratorIterable<RegExpResult>} */
 static m_matchAll__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp(/** !String */ $thisArg, /** RegExp */ regexp) {
  $Overlay.$clinit();
  return $thisArg.matchAll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(regexp)));
 }
 /** @return {IteratorIterable<RegExpResult>} */
 static m_matchAll__$devirt__elemental2_core_JsString__java_lang_String(/** !String */ $thisArg, /** ?string */ regexp) {
  $Overlay.$clinit();
  return $thisArg.matchAll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(regexp)));
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__elemental2_core_JsString_ReplaceReplacementFn(/** !String */ $thisArg, /** RegExp */ pattern, /** ?function(?string, ...*):* */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(replacement)));
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__elemental2_core_JsString_ReplaceReplacementUnionType(/** !String */ $thisArg, /** RegExp */ pattern, /** ? */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)), replacement);
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(/** !String */ $thisArg, /** RegExp */ pattern, /** ?string */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(replacement)));
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsString_ReplacePatternUnionType__elemental2_core_JsString_ReplaceReplacementFn(/** !String */ $thisArg, /** ? */ pattern, /** ?function(?string, ...*):* */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(pattern, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(replacement)));
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsString_ReplacePatternUnionType__java_lang_String(/** !String */ $thisArg, /** ? */ pattern, /** ?string */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(pattern, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(replacement)));
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsString_ReplaceReplacementFn(/** !String */ $thisArg, /** ?string */ pattern, /** ?function(?string, ...*):* */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(replacement)));
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__java_lang_String__elemental2_core_JsString_ReplaceReplacementUnionType(/** !String */ $thisArg, /** ?string */ pattern, /** ? */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)), replacement);
 }
 /** @return {?string} */
 static m_replace__$devirt__elemental2_core_JsString__java_lang_String__java_lang_String(/** !String */ $thisArg, /** ?string */ pattern, /** ?string */ replacement) {
  $Overlay.$clinit();
  return $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(replacement)));
 }
 /** @return {number} */
 static m_search__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp(/** !String */ $thisArg, /** RegExp */ pattern) {
  $Overlay.$clinit();
  return $thisArg.search(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)));
 }
 /** @return {number} */
 static m_search__$devirt__elemental2_core_JsString__java_lang_String(/** !String */ $thisArg, /** ?string */ pattern) {
  $Overlay.$clinit();
  return $thisArg.search(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(pattern)));
 }
 /** @return {?string} */
 static m_toLocaleLowerCase__$devirt__elemental2_core_JsString__elemental2_core_JsArray(/** !String */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleLowerCase(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleLowerCase__$devirt__elemental2_core_JsString__java_lang_String(/** !String */ $thisArg, /** ?string */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleLowerCase(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleLowerCase__$devirt__elemental2_core_JsString__arrayOf_java_lang_String(/** !String */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleLowerCase__$devirt__elemental2_core_JsString__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleUpperCase__$devirt__elemental2_core_JsString__elemental2_core_JsArray(/** !String */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleUpperCase(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleUpperCase__$devirt__elemental2_core_JsString__java_lang_String(/** !String */ $thisArg, /** ?string */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleUpperCase(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 /** @return {?string} */
 static m_toLocaleUpperCase__$devirt__elemental2_core_JsString__arrayOf_java_lang_String(/** !String */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleUpperCase__$devirt__elemental2_core_JsString__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(locales)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof String;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "String");

exports = $Overlay;

//# sourceMappingURL=JsString$$Overlay.js.map
