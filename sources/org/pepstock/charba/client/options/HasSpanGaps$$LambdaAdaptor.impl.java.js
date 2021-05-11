goog.module('org.pepstock.charba.client.options.HasSpanGaps.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasSpanGaps = goog.require('org.pepstock.charba.client.options.HasSpanGaps$impl');

let SpanGapHandler = goog.forwardDeclare('org.pepstock.charba.client.options.SpanGapHandler$impl');

/**
 * @implements {HasSpanGaps}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():SpanGapHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():SpanGapHandler}*/
  this.f_fn__org_pepstock_charba_client_options_HasSpanGaps_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasSpanGaps_$LambdaAdaptor__org_pepstock_charba_client_options_HasSpanGaps_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasSpanGaps_$LambdaAdaptor__org_pepstock_charba_client_options_HasSpanGaps_$JsFunction(/** ?function():SpanGapHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasSpanGaps_$LambdaAdaptor = fn;
 }
 /** @override @return {SpanGapHandler} */
 m_getSpanGapHandler__() {
  let /** ?function():SpanGapHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasSpanGaps_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSpanGaps__() {
  return HasSpanGaps.m_getSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return HasSpanGaps.m_isSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__boolean(/** boolean */ arg0) {
  HasSpanGaps.m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__double(/** number */ arg0) {
  HasSpanGaps.m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__double(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasSpanGaps.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasSpanGaps.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasSpanGaps$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasSpanGaps$$LambdaAdaptor.js.map
