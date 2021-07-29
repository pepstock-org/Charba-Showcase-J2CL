goog.module('org.pepstock.charba.client.geo.HasCommonOptionsElement.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCommonOptionsElement = goog.require('org.pepstock.charba.client.geo.HasCommonOptionsElement$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CommonOptionsElementHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsElementHandler$impl');

/**
 * @implements {HasCommonOptionsElement}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():CommonOptionsElementHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():CommonOptionsElementHandler}*/
  this.f_fn__org_pepstock_charba_client_geo_HasCommonOptionsElement_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_HasCommonOptionsElement_$LambdaAdaptor__org_pepstock_charba_client_geo_HasCommonOptionsElement_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_HasCommonOptionsElement_$LambdaAdaptor__org_pepstock_charba_client_geo_HasCommonOptionsElement_$JsFunction(/** ?function():CommonOptionsElementHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_HasCommonOptionsElement_$LambdaAdaptor = fn;
 }
 /** @override @return {CommonOptionsElementHandler} */
 m_getCommonElementHandler__() {
  let /** ?function():CommonOptionsElementHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_HasCommonOptionsElement_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getGraticuleBorderColor__() {
  return HasCommonOptionsElement.m_getGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getGraticuleBorderColorAsString__() {
  return HasCommonOptionsElement.m_getGraticuleBorderColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getGraticuleBorderWidth__() {
  return HasCommonOptionsElement.m_getGraticuleBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getOutlineBackgroundColor__() {
  return HasCommonOptionsElement.m_getOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getOutlineBackgroundColorAsString__() {
  return HasCommonOptionsElement.m_getOutlineBackgroundColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getOutlineBorderColor__() {
  return HasCommonOptionsElement.m_getOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getOutlineBorderColorAsString__() {
  return HasCommonOptionsElement.m_getOutlineBorderColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getOutlineBorderWidth__() {
  return HasCommonOptionsElement.m_getOutlineBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGraticuleBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasCommonOptionsElement.m_setGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGraticuleBorderColor__java_lang_String(/** ?string */ arg0) {
  HasCommonOptionsElement.m_setGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGraticuleBorderWidth__int(/** number */ arg0) {
  HasCommonOptionsElement.m_setGraticuleBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasCommonOptionsElement.m_setOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBackgroundColor__java_lang_String(/** ?string */ arg0) {
  HasCommonOptionsElement.m_setOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasCommonOptionsElement.m_setOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBorderColor__java_lang_String(/** ?string */ arg0) {
  HasCommonOptionsElement.m_setOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutlineBorderWidth__int(/** number */ arg0) {
  HasCommonOptionsElement.m_setOutlineBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__int(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasCommonOptionsElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasCommonOptionsElement.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.HasCommonOptionsElement$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasCommonOptionsElement$$LambdaAdaptor.js.map
