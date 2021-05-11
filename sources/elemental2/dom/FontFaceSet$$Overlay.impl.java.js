goog.module('elemental2.dom.FontFaceSet.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_forEach__$devirt__elemental2_dom_FontFaceSet__elemental2_dom_FontFaceSet_ForEachCallbackFn__java_lang_Object(/** !FontFaceSet */ $thisArg, /** ?function(FontFace, number, FontFaceSet):* */ callback, /** * */ selfObj) {
  $Overlay.$clinit();
  $thisArg.forEach(callback, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(selfObj)));
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

//# sourceMappingURL=FontFaceSet$$Overlay.js.map
