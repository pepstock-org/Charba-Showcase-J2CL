goog.module('elemental2.dom.RTCConfigurationRecord_.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {RTCConfigurationRecord_} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {RTCConfigurationRecord_}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setIceServers__$devirt__elemental2_dom_RTCConfigurationRecord___arrayOf_elemental2_dom_RTCConfigurationRecord__GetIceServersArrayUnionType(/** !RTCConfigurationRecord_ */ $thisArg, /** Array<?> */ iceServers) {
  $Overlay.$clinit();
  $thisArg.iceServers = /**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(iceServers));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCConfigurationRecord_$$Overlay.js.map
