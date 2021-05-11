goog.module('elemental2.dom.RTCConfigurationInterface_.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_setIceServers__$devirt__elemental2_dom_RTCConfigurationInterface___arrayOf_elemental2_dom_RTCConfigurationInterface__GetIceServersArrayUnionType(/** !RTCConfigurationInterface_ */ $thisArg, /** Array<?> */ iceServers) {
  $Overlay.$clinit();
  $thisArg.iceServers = /**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(iceServers));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCConfigurationInterface_$$Overlay.js.map
