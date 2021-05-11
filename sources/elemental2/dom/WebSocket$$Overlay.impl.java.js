goog.module('elemental2.dom.WebSocket.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_core_ArrayBuffer(/** !WebSocket */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_core_ArrayBufferView(/** !WebSocket */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_dom_Blob(/** !WebSocket */ $thisArg, /** Blob */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_WebSocket__java_lang_String(/** !WebSocket */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /** @return {number} */
 static get f_CLOSED__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CLOSED__elemental2_dom_WebSocket_$Overlay);
 }
 /** @return {number} */
 static get f_CLOSING__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CLOSING__elemental2_dom_WebSocket_$Overlay);
 }
 /** @return {number} */
 static get f_CONNECTING__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CONNECTING__elemental2_dom_WebSocket_$Overlay);
 }
 /** @return {number} */
 static get f_OPEN__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_OPEN__elemental2_dom_WebSocket_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_CLOSED__elemental2_dom_WebSocket_$Overlay = WebSocket.CLOSED;
  $Overlay.$static_CLOSING__elemental2_dom_WebSocket_$Overlay = WebSocket.CLOSING;
  $Overlay.$static_CONNECTING__elemental2_dom_WebSocket_$Overlay = WebSocket.CONNECTING;
  $Overlay.$static_OPEN__elemental2_dom_WebSocket_$Overlay = WebSocket.OPEN;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WebSocket;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number}*/
$Overlay.$static_CLOSED__elemental2_dom_WebSocket_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_CLOSING__elemental2_dom_WebSocket_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_CONNECTING__elemental2_dom_WebSocket_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_OPEN__elemental2_dom_WebSocket_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "WebSocket");

exports = $Overlay;

//# sourceMappingURL=WebSocket$$Overlay.js.map
