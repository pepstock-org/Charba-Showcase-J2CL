goog.module('elemental2.dom.BaseRenderingContext2D.FillStyleUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CanvasGradient_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasGradient.$Overlay$impl');
let CanvasPattern_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasPattern.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {CanvasGradient} */
 static m_asCanvasGradient__$devirt__elemental2_dom_BaseRenderingContext2D_FillStyleUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CanvasGradient}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), CanvasGradient_$Overlay));
 }
 /** @return {CanvasPattern} */
 static m_asCanvasPattern__$devirt__elemental2_dom_BaseRenderingContext2D_FillStyleUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CanvasPattern}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), CanvasPattern_$Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_BaseRenderingContext2D_FillStyleUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isCanvasGradient__$devirt__elemental2_dom_BaseRenderingContext2D_FillStyleUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return CanvasGradient_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isCanvasPattern__$devirt__elemental2_dom_BaseRenderingContext2D_FillStyleUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return CanvasPattern_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_BaseRenderingContext2D_FillStyleUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  CanvasGradient_$Overlay = goog.module.get('elemental2.dom.CanvasGradient.$Overlay$impl');
  CanvasPattern_$Overlay = goog.module.get('elemental2.dom.CanvasPattern.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BaseRenderingContext2D$FillStyleUnionType$$Overlay.js.map
