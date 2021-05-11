goog.module('elemental2.dom.RTCPeerConnection.GetStatsUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Promise<RTCStatsReport>} */
 static m_asPromise__$devirt__elemental2_dom_RTCPeerConnection_GetStatsUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Promise<RTCStatsReport>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Promise_$Overlay));
 }
 /** @return {RTCStatsReport} */
 static m_asRTCStatsReport__$devirt__elemental2_dom_RTCPeerConnection_GetStatsUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {RTCStatsReport}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {boolean} */
 static m_isPromise__$devirt__elemental2_dom_RTCPeerConnection_GetStatsUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Promise_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCPeerConnection$GetStatsUnionType$$Overlay.js.map
