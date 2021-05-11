goog.module('elemental2.core.Global.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_Infinity__elemental2_core_Global_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_Infinity__elemental2_core_Global_$Overlay);
 }
 /** @return {number} */
 static get f_NaN__elemental2_core_Global_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_NaN__elemental2_core_Global_$Overlay);
 }
 /** @return {*} */
 static get f_undefined__elemental2_core_Global_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_undefined__elemental2_core_Global_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_Infinity__elemental2_core_Global_$Overlay = goog.global.Infinity;
  $Overlay.$static_NaN__elemental2_core_Global_$Overlay = goog.global.NaN;
  $Overlay.$static_undefined__elemental2_core_Global_$Overlay = goog.global.undefined;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof goog.global;
 }
 
 static $loadModules() {}
}
/**@private {number}*/
$Overlay.$static_Infinity__elemental2_core_Global_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_NaN__elemental2_core_Global_$Overlay = 0;
/**@private {*}*/
$Overlay.$static_undefined__elemental2_core_Global_$Overlay;
$Util.$setClassMetadata($Overlay, "goog.global");

exports = $Overlay;

//# sourceMappingURL=Global$$Overlay.js.map
