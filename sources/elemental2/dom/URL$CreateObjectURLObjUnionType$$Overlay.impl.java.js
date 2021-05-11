goog.module('elemental2.dom.URL.CreateObjectURLObjUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let MediaSource_$Overlay = goog.forwardDeclare('elemental2.dom.MediaSource.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Blob} */
 static m_asBlob__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Blob}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Blob_$Overlay));
 }
 /** @return {MediaSource} */
 static m_asMediaSource__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MediaSource}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MediaSource_$Overlay));
 }
 /** @return {MediaStream} */
 static m_asMediaStream__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MediaStream}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MediaStream_$Overlay));
 }
 /** @return {boolean} */
 static m_isBlob__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Blob_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isMediaSource__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MediaSource_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isMediaStream__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MediaStream_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Blob_$Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  MediaSource_$Overlay = goog.module.get('elemental2.dom.MediaSource.$Overlay$impl');
  MediaStream_$Overlay = goog.module.get('elemental2.dom.MediaStream.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=URL$CreateObjectURLObjUnionType$$Overlay.js.map
