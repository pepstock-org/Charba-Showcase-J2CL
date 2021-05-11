goog.module('elemental2.dom.Window.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request__elemental2_dom_RequestInit(/** !Window */ $thisArg, /** Request */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request(/** !Window */ $thisArg, /** Request */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String__elemental2_dom_RequestInit(/** !Window */ $thisArg, /** ?string */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String(/** !Window */ $thisArg, /** ?string */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_java_lang_String(/** !Window */ $thisArg, /** Array<?string> */ var_args) {
  $Overlay.$clinit();
  $thisArg.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_elemental2_dom_TrustedScriptURL(/** !Window */ $thisArg, /** Array<TrustedScriptURL> */ var_args) {
  $Overlay.$clinit();
  $thisArg.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 /** @return {Database} */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback(/** !Window */ $thisArg, /** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** DatabaseCallback */ callback) {
  $Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {Database} */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_Window_OpenDatabaseCallbackFn(/** !Window */ $thisArg, /** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** ?function(Database):* */ callback) {
  $Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__java_lang_String__arrayOf_elemental2_core_Transferable(/** !Window */ $thisArg, /** * */ message, /** ?string */ targetOrigin, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, targetOrigin, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__double__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__double__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__double__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Window;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Window");

exports = $Overlay;

//# sourceMappingURL=Window$$Overlay.js.map
