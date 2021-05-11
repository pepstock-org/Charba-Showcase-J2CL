goog.module('elemental2.dom.NotificationOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {NotificationOptions} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {NotificationOptions}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setActions__$devirt__elemental2_dom_NotificationOptions__arrayOf_elemental2_dom_NotificationAction(/** !NotificationOptions */ $thisArg, /** Array<NotificationAction> */ actions) {
  $Overlay.$clinit();
  $thisArg.actions = /**@type {Array<NotificationAction>}*/ (Js.m_uncheckedCast__java_lang_Object(actions));
 }
 
 static m_setVibrate__$devirt__elemental2_dom_NotificationOptions__arrayOf_double(/** !NotificationOptions */ $thisArg, /** Array<number> */ vibrate) {
  $Overlay.$clinit();
  $thisArg.vibrate = /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object(vibrate));
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

//# sourceMappingURL=NotificationOptions$$Overlay.js.map
