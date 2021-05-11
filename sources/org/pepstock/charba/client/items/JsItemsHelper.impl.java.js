goog.module('org.pepstock.charba.client.items.JsItemsHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class JsItemsHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsItemsHelper} */
 static $create__() {
  let $instance = new JsItemsHelper();
  $instance.$ctor__org_pepstock_charba_client_items_JsItemsHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_JsItemsHelper__() {
  this.$ctor__java_lang_Object__();
  JsHelper.m_get__();
 }
 /** @return {JsItemsHelper} */
 static m_get__() {
  JsItemsHelper.$clinit();
  return JsItemsHelper.f_INSTANCE__org_pepstock_charba_client_items_JsItemsHelper_;
 }
 /** @return {boolean} */
 m_isCanvasPattern__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(/** ? */ object, /** Key */ key) {
  if (!$Equality.$same(object, null) && Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   return CharbaJsItemsHelper.isCanvasPattern(object, key.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 m_isCanvasGradient__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(/** ? */ object, /** Key */ key) {
  if (!$Equality.$same(object, null) && Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   return CharbaJsItemsHelper.isCanvasGradient(object, key.m_value__());
  }
  return false;
 }
 /** @return {number} */
 m_getDecimalForPixel__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale, /** number */ pixel) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getDecimalForPixel(scale.m_nativeObject___$pp_org_pepstock_charba_client_items(), pixel);
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getPixelForDecimal__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale, /** number */ decimal) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getPixelForDecimal(scale.m_nativeObject___$pp_org_pepstock_charba_client_items(), decimal);
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getPixelForTick__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale, /** number */ index) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getPixelForTick(scale.m_nativeObject___$pp_org_pepstock_charba_client_items(), index);
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?string} */
 m_getLabelForValue__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale, /** number */ value) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getLabelForValue(scale.m_nativeObject___$pp_org_pepstock_charba_client_items(), value);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {number} */
 m_getPixelForStringValue__org_pepstock_charba_client_items_ScaleItem__java_lang_String__double_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale, /** ?string */ value, /** number */ index) {
  if (!$Equality.$same(scale, null) && !$Equality.$same(value, null)) {
   return CharbaJsItemsHelper.getPixelForStringValue(scale.m_nativeObject___$pp_org_pepstock_charba_client_items(), value, index);
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getPixelForValue__org_pepstock_charba_client_items_ScaleItem__double__double_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale, /** number */ value, /** number */ index) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getPixelForValue(scale.m_nativeObject___$pp_org_pepstock_charba_client_items(), value, index);
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getValueForPixel__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale, /** number */ pixel) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getValueForPixel(scale.m_nativeObject___$pp_org_pepstock_charba_client_items(), pixel);
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getBaseValue__org_pepstock_charba_client_items_ScaleItem_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getBaseValue(scale.m_nativeObject___$pp_org_pepstock_charba_client_items());
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getBasePixel__org_pepstock_charba_client_items_ScaleItem_$pp_org_pepstock_charba_client_items(/** ScaleItem */ scale) {
  if (!$Equality.$same(scale, null)) {
   return CharbaJsItemsHelper.getBasePixel(scale.m_nativeObject___$pp_org_pepstock_charba_client_items());
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?} */
 m_getDatasetControllerStyle__org_pepstock_charba_client_commons_NativeObject__int_$pp_org_pepstock_charba_client_items(/** ? */ controller, /** number */ dataIndex) {
  if (!$Equality.$same(controller, null) && dataIndex >= 0) {
   return CharbaJsItemsHelper.getDatasetControllerStyle(controller, dataIndex);
  }
  return null;
 }
 
 static $clinit() {
  JsItemsHelper.$clinit = () =>{};
  JsItemsHelper.$loadModules();
  j_l_Object.$clinit();
  JsItemsHelper.f_INSTANCE__org_pepstock_charba_client_items_JsItemsHelper_ = JsItemsHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsItemsHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@type {JsItemsHelper}*/
JsItemsHelper.f_INSTANCE__org_pepstock_charba_client_items_JsItemsHelper_;
$Util.$setClassMetadata(JsItemsHelper, "org.pepstock.charba.client.items.JsItemsHelper");

exports = JsItemsHelper;

//# sourceMappingURL=JsItemsHelper.js.map
