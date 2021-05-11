goog.module('elemental2.dom.ReadableStream.GetReaderUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template VALUE @return {ReadableStreamBYOBReader} */
 static m_asReadableStreamBYOBReader__$devirt__elemental2_dom_ReadableStream_GetReaderUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ReadableStreamBYOBReader}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @template VALUE @return {ReadableStreamDefaultReader<VALUE>} */
 static m_asReadableStreamDefaultReader__$devirt__elemental2_dom_ReadableStream_GetReaderUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ReadableStreamDefaultReader<VALUE>}*/ (Js.m_cast__java_lang_Object($thisArg));
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

//# sourceMappingURL=ReadableStream$GetReaderUnionType$$Overlay.js.map
