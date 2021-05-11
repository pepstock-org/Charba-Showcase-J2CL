goog.module('elemental2.dom.EventSource.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_CLOSED__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CLOSED__elemental2_dom_EventSource_$Overlay);
 }
 /** @return {number} */
 static get f_CONNECTING__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CONNECTING__elemental2_dom_EventSource_$Overlay);
 }
 /** @return {number} */
 static get f_OPEN__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_OPEN__elemental2_dom_EventSource_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_CLOSED__elemental2_dom_EventSource_$Overlay = EventSource.CLOSED;
  $Overlay.$static_CONNECTING__elemental2_dom_EventSource_$Overlay = EventSource.CONNECTING;
  $Overlay.$static_OPEN__elemental2_dom_EventSource_$Overlay = EventSource.OPEN;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventSource;
 }
 
 static $loadModules() {}
}
/**@private {number}*/
$Overlay.$static_CLOSED__elemental2_dom_EventSource_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_CONNECTING__elemental2_dom_EventSource_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_OPEN__elemental2_dom_EventSource_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "EventSource");

exports = $Overlay;

//# sourceMappingURL=EventSource$$Overlay.js.map
