goog.module('elemental2.dom.PerformanceNavigation.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 /** @return {number} */
 static get f_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 /** @return {number} */
 static get f_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 /** @return {number} */
 static get f_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_BACK_FORWARD;
  $Overlay.$static_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_NAVIGATE;
  $Overlay.$static_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_RELOAD;
  $Overlay.$static_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_RESERVED;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PerformanceNavigation;
 }
 
 static $loadModules() {}
}
/**@private {number}*/
$Overlay.$static_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "PerformanceNavigation");

exports = $Overlay;

//# sourceMappingURL=PerformanceNavigation$$Overlay.js.map
