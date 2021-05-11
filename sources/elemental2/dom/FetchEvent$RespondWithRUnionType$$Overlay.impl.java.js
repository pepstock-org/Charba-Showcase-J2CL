goog.module('elemental2.dom.FetchEvent.RespondWithRUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {IThenable<Response>} */
 static m_asIThenable__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IThenable<Response>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {Response} */
 static m_asResponse__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Response}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Response_$Overlay));
 }
 /** @return {boolean} */
 static m_isResponse__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Response_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Response_$Overlay = goog.module.get('elemental2.dom.Response.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=FetchEvent$RespondWithRUnionType$$Overlay.js.map
