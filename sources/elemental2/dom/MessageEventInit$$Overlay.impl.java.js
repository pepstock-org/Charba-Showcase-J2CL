goog.module('elemental2.dom.MessageEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {MessageEventInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {MessageEventInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 /** @template T */
 static m_setPorts__$devirt__elemental2_dom_MessageEventInit__arrayOf_elemental2_dom_MessagePort(/** !MessageEventInit<T> */ $thisArg, /** Array<MessagePort> */ ports) {
  $Overlay.$clinit();
  $thisArg.ports = /**@type {Array<MessagePort>}*/ (Js.m_uncheckedCast__java_lang_Object(ports));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_MessageEventInit__elemental2_dom_MessagePort(/** !MessageEventInit<T> */ $thisArg, /** MessagePort */ source) {
  $Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_MessageEventInit__elemental2_dom_ServiceWorker(/** !MessageEventInit<T> */ $thisArg, /** ServiceWorker */ source) {
  $Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_MessageEventInit__elemental2_dom_Window(/** !MessageEventInit<T> */ $thisArg, /** Window */ source) {
  $Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
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

//# sourceMappingURL=MessageEventInit$$Overlay.js.map
