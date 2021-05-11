goog.module('org.pepstock.charba.client.Chart.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');

class $Overlay {
 /** @return {?string} */
 static m_getCharbaId__$devirt__org_pepstock_charba_client_Chart(/** !Chart */ $thisArg) {
  $Overlay.$clinit();
  return Id.m_get__org_pepstock_charba_client_commons_NativeObject($thisArg.options);
 }
 /** @return {IsChart} */
 static m_getChart__$devirt__org_pepstock_charba_client_Chart(/** !Chart */ $thisArg) {
  $Overlay.$clinit();
  return Charts.m_get__java_lang_String($Overlay.m_getCharbaId__$devirt__org_pepstock_charba_client_Chart($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Chart;
 }
 
 static $loadModules() {
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Chart");

exports = $Overlay;

//# sourceMappingURL=Chart$$Overlay.js.map
