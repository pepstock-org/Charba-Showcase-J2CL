goog.module('org.pepstock.charba.client.utils.Window.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let WindowHelper = goog.forwardDeclare('org.pepstock.charba.client.utils.WindowHelper$impl');

class $Overlay {
 
 static m_enableResizeOnBeforePrint__() {
  $Overlay.$clinit();
  WindowHelper.m_get__().m_enableResizeOnBeforePrint___$pp_org_pepstock_charba_client_utils();
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof window;
 }
 
 static $loadModules() {
  WindowHelper = goog.module.get('org.pepstock.charba.client.utils.WindowHelper$impl');
 }
}
$Util.$setClassMetadata($Overlay, "window");

exports = $Overlay;

//# sourceMappingURL=Window$$Overlay.js.map
