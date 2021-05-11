goog.module('elemental2.dom.MediaTrackConstraints.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {MediaTrackConstraints} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {MediaTrackConstraints}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setAdvanced__$devirt__elemental2_dom_MediaTrackConstraints__arrayOf_elemental2_dom_MediaTrackConstraintSet(/** !MediaTrackConstraints */ $thisArg, /** Array<MediaTrackConstraintSet> */ advanced) {
  $Overlay.$clinit();
  $thisArg.advanced = /**@type {Array<MediaTrackConstraintSet>}*/ (Js.m_uncheckedCast__java_lang_Object(advanced));
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

//# sourceMappingURL=MediaTrackConstraints$$Overlay.js.map
