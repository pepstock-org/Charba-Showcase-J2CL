goog.module('elemental2.dom.ExtendableMessageEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {ExtendableMessageEventInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {ExtendableMessageEventInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 /** @template T */
 static m_setPorts__$devirt__elemental2_dom_ExtendableMessageEventInit__arrayOf_elemental2_dom_MessagePort(/** !ExtendableMessageEventInit<T> */ $thisArg, /** Array<MessagePort> */ ports) {
  $Overlay.$clinit();
  $thisArg.ports = /**@type {Array<MessagePort>}*/ (Js.m_uncheckedCast__java_lang_Object(ports));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_ExtendableMessageEventInit__elemental2_dom_MessagePort(/** !ExtendableMessageEventInit<T> */ $thisArg, /** MessagePort */ source) {
  $Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_ExtendableMessageEventInit__elemental2_dom_ServiceWorker(/** !ExtendableMessageEventInit<T> */ $thisArg, /** ServiceWorker */ source) {
  $Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_ExtendableMessageEventInit__elemental2_dom_ServiceWorkerClient(/** !ExtendableMessageEventInit<T> */ $thisArg, /** ServiceWorkerClient */ source) {
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

//# sourceMappingURL=ExtendableMessageEventInit$$Overlay.js.map
