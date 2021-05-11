goog.module('elemental2.dom.RTCStatsResponse.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');

class $Overlay {
 /** @return {RTCStatsResponse} */
 static $adapt__elemental2_dom_RTCStatsResponse_$JsFunction(/** ?function():Array<RTCStatsReport> */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCStatsResponse$$Overlay.js.map
