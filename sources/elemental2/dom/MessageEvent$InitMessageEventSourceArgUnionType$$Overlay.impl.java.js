goog.module('elemental2.dom.MessageEvent.InitMessageEventSourceArgUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let MessagePort_$Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {MessagePort} */
 static m_asMessagePort__$devirt__elemental2_dom_MessageEvent_InitMessageEventSourceArgUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MessagePort}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MessagePort_$Overlay));
 }
 /** @return {ServiceWorker} */
 static m_asServiceWorker__$devirt__elemental2_dom_MessageEvent_InitMessageEventSourceArgUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ServiceWorker}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ServiceWorker_$Overlay));
 }
 /** @return {Window} */
 static m_asWindow__$devirt__elemental2_dom_MessageEvent_InitMessageEventSourceArgUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Window}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Window_$Overlay));
 }
 /** @return {boolean} */
 static m_isMessagePort__$devirt__elemental2_dom_MessageEvent_InitMessageEventSourceArgUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MessagePort_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isServiceWorker__$devirt__elemental2_dom_MessageEvent_InitMessageEventSourceArgUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ServiceWorker_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isWindow__$devirt__elemental2_dom_MessageEvent_InitMessageEventSourceArgUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Window_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  MessagePort_$Overlay = goog.module.get('elemental2.dom.MessagePort.$Overlay$impl');
  ServiceWorker_$Overlay = goog.module.get('elemental2.dom.ServiceWorker.$Overlay$impl');
  Window_$Overlay = goog.module.get('elemental2.dom.Window.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=MessageEvent$InitMessageEventSourceArgUnionType$$Overlay.js.map
