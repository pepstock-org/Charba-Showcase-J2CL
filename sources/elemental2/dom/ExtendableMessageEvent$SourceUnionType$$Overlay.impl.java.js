goog.module('elemental2.dom.ExtendableMessageEvent.SourceUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let MessagePort_$Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let ServiceWorkerClient_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorkerClient.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {MessagePort} */
 static m_asMessagePort__$devirt__elemental2_dom_ExtendableMessageEvent_SourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MessagePort}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MessagePort_$Overlay));
 }
 /** @return {ServiceWorker} */
 static m_asServiceWorker__$devirt__elemental2_dom_ExtendableMessageEvent_SourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ServiceWorker}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ServiceWorker_$Overlay));
 }
 /** @return {ServiceWorkerClient} */
 static m_asServiceWorkerClient__$devirt__elemental2_dom_ExtendableMessageEvent_SourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ServiceWorkerClient}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ServiceWorkerClient_$Overlay));
 }
 /** @return {boolean} */
 static m_isMessagePort__$devirt__elemental2_dom_ExtendableMessageEvent_SourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MessagePort_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isServiceWorker__$devirt__elemental2_dom_ExtendableMessageEvent_SourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ServiceWorker_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isServiceWorkerClient__$devirt__elemental2_dom_ExtendableMessageEvent_SourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ServiceWorkerClient_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  MessagePort_$Overlay = goog.module.get('elemental2.dom.MessagePort.$Overlay$impl');
  ServiceWorker_$Overlay = goog.module.get('elemental2.dom.ServiceWorker.$Overlay$impl');
  ServiceWorkerClient_$Overlay = goog.module.get('elemental2.dom.ServiceWorkerClient.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ExtendableMessageEvent$SourceUnionType$$Overlay.js.map
