goog.module('elemental2.dom.MediaStreamConstraints.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {MediaStreamConstraints} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {MediaStreamConstraints}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setAudio__$devirt__elemental2_dom_MediaStreamConstraints__elemental2_dom_MediaTrackConstraints(/** !MediaStreamConstraints */ $thisArg, /** MediaTrackConstraints */ audio) {
  $Overlay.$clinit();
  $thisArg.audio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(audio));
 }
 
 static m_setAudio__$devirt__elemental2_dom_MediaStreamConstraints__boolean(/** !MediaStreamConstraints */ $thisArg, /** boolean */ audio) {
  $Overlay.$clinit();
  $thisArg.audio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(audio));
 }
 
 static m_setVideo__$devirt__elemental2_dom_MediaStreamConstraints__elemental2_dom_MediaTrackConstraints(/** !MediaStreamConstraints */ $thisArg, /** MediaTrackConstraints */ video) {
  $Overlay.$clinit();
  $thisArg.video = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(video));
 }
 
 static m_setVideo__$devirt__elemental2_dom_MediaStreamConstraints__boolean(/** !MediaStreamConstraints */ $thisArg, /** boolean */ video) {
  $Overlay.$clinit();
  $thisArg.video = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(video));
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

//# sourceMappingURL=MediaStreamConstraints$$Overlay.js.map
