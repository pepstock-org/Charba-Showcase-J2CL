goog.module('elemental2.dom.XMLHttpRequest.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_core_ArrayBuffer(/** !XMLHttpRequest */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_core_ArrayBufferView(/** !XMLHttpRequest */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_Blob(/** !XMLHttpRequest */ $thisArg, /** Blob */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_Document(/** !XMLHttpRequest */ $thisArg, /** Document */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_FormData(/** !XMLHttpRequest */ $thisArg, /** FormData */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String(/** !XMLHttpRequest */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /** @return {number} */
 static get f_DONE__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_DONE__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @return {number} */
 static get f_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @return {number} */
 static get f_LOADING__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_LOADING__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @return {number} */
 static get f_OPENED__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_OPENED__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @return {number} */
 static get f_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_DONE__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.DONE;
  $Overlay.$static_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.HEADERS_RECEIVED;
  $Overlay.$static_LOADING__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.LOADING;
  $Overlay.$static_OPENED__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.OPENED;
  $Overlay.$static_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.UNSENT;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof XMLHttpRequest;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number}*/
$Overlay.$static_DONE__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_LOADING__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_OPENED__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "XMLHttpRequest");

exports = $Overlay;

//# sourceMappingURL=XMLHttpRequest$$Overlay.js.map
