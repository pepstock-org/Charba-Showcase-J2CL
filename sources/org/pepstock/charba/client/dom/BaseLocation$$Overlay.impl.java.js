goog.module('org.pepstock.charba.client.dom.BaseLocation.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let BaseLocationUtils = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseLocationUtils$impl');

class $Overlay {
 /** @return {?string} */
 static m_getParameter__$devirt__org_pepstock_charba_client_dom_BaseLocation__java_lang_String(/** !Location */ $thisArg, /** ?string */ name) {
  $Overlay.$clinit();
  return BaseLocationUtils.m_getParameter__org_pepstock_charba_client_dom_BaseLocation__java_lang_String($thisArg, name);
 }
 /** @return {Map<?string, List<?string>>} */
 static m_getParameterMap__$devirt__org_pepstock_charba_client_dom_BaseLocation(/** !Location */ $thisArg) {
  $Overlay.$clinit();
  return BaseLocationUtils.m_getParameterMap__org_pepstock_charba_client_dom_BaseLocation($thisArg);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Location;
 }
 
 static $loadModules() {
  BaseLocationUtils = goog.module.get('org.pepstock.charba.client.dom.BaseLocationUtils$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Location");

exports = $Overlay;

//# sourceMappingURL=BaseLocation$$Overlay.js.map
