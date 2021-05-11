goog.module('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');

class $Overlay {
 /** @template T @return {T} */
 static m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return JsHelper.m_get__().m_cast__java_lang_Object($thisArg);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=IsCastable$$Overlay.js.map
