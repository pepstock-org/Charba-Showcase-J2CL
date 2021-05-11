goog.module('elemental2.dom.WheelEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay);
 }
 /** @return {number} */
 static get f_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay);
 }
 /** @return {number} */
 static get f_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay = WheelEvent.DOM_DELTA_LINE;
  $Overlay.$static_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay = WheelEvent.DOM_DELTA_PAGE;
  $Overlay.$static_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay = WheelEvent.DOM_DELTA_PIXEL;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WheelEvent;
 }
 
 static $loadModules() {}
}
/**@private {number}*/
$Overlay.$static_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "WheelEvent");

exports = $Overlay;

//# sourceMappingURL=WheelEvent$$Overlay.js.map
