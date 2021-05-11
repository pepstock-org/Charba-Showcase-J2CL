goog.module('org.pepstock.charba.client.zoom.JsZoomHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let Amount = goog.forwardDeclare('org.pepstock.charba.client.zoom.Amount$impl');
let ScaleRange = goog.forwardDeclare('org.pepstock.charba.client.zoom.ScaleRange$impl');

class JsZoomHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsZoomHelper} */
 static $create__() {
  let $instance = new JsZoomHelper();
  $instance.$ctor__org_pepstock_charba_client_zoom_JsZoomHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_JsZoomHelper__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
  JsHelper.m_get__();
 }
 /** @return {JsZoomHelper} */
 static m_get__() {
  JsZoomHelper.$clinit();
  return JsZoomHelper.f_INSTANCE__org_pepstock_charba_client_zoom_JsZoomHelper_;
 }
 
 m_resetZoom__org_pepstock_charba_client_Chart__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(/** Chart */ chart, /** IsTransitionKey */ transition) {
  if (!$Equality.$same(chart, null)) {
   if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
    CharbaJsZoomHelper.resetZoom(chart, transition.m_value__());
   } else {
    CharbaJsZoomHelper.resetZoom(chart);
   }
  }
 }
 
 m_pan__org_pepstock_charba_client_Chart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(/** Chart */ chart, /** Amount */ amount, /** IsTransitionKey */ transition) {
  if (!$Equality.$same(chart, null) && !$Equality.$same(amount, null)) {
   if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
    CharbaJsZoomHelper.pan(chart, amount.m_nativeObject___$pp_org_pepstock_charba_client_zoom(), transition.m_value__());
   } else {
    CharbaJsZoomHelper.pan(chart, amount.m_nativeObject___$pp_org_pepstock_charba_client_zoom());
   }
  }
 }
 
 m_pan__org_pepstock_charba_client_Chart__double__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(/** Chart */ chart, /** number */ amount, /** IsTransitionKey */ transition) {
  if (!$Equality.$same(chart, null) && Undefined.m_isNot__double(amount)) {
   if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
    CharbaJsZoomHelper.pan(chart, amount, transition.m_value__());
   } else {
    CharbaJsZoomHelper.pan(chart, amount);
   }
  }
 }
 
 m_zoom__org_pepstock_charba_client_Chart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(/** Chart */ chart, /** Amount */ amount, /** IsTransitionKey */ transition) {
  if (!$Equality.$same(chart, null) && !$Equality.$same(amount, null)) {
   if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
    CharbaJsZoomHelper.zoom(chart, amount.m_nativeObject___$pp_org_pepstock_charba_client_zoom(), transition.m_value__());
   } else {
    CharbaJsZoomHelper.zoom(chart, amount.m_nativeObject___$pp_org_pepstock_charba_client_zoom());
   }
  }
 }
 
 m_zoom__org_pepstock_charba_client_Chart__double__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(/** Chart */ chart, /** number */ amount, /** IsTransitionKey */ transition) {
  if (!$Equality.$same(chart, null) && Undefined.m_isNot__double(amount)) {
   if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
    CharbaJsZoomHelper.zoom(chart, amount, transition.m_value__());
   } else {
    CharbaJsZoomHelper.zoom(chart, amount);
   }
  }
 }
 
 m_zoomScale__org_pepstock_charba_client_Chart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(/** Chart */ chart, /** IsScaleId */ scaleId, /** ScaleRange */ range, /** IsTransitionKey */ transition) {
  if (!$Equality.$same(chart, null) && IsScaleId.m_isValid__org_pepstock_charba_client_options_IsScaleId(scaleId) && !$Equality.$same(range, null)) {
   if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
    CharbaJsZoomHelper.zoomScale(chart, scaleId.m_value__(), range.m_nativeObject___$pp_org_pepstock_charba_client_zoom(), transition.m_value__());
   } else {
    CharbaJsZoomHelper.zoomScale(chart, scaleId.m_value__(), range.m_nativeObject___$pp_org_pepstock_charba_client_zoom());
   }
  }
 }
 
 static $clinit() {
  JsZoomHelper.$clinit = () =>{};
  JsZoomHelper.$loadModules();
  j_l_Object.$clinit();
  JsZoomHelper.f_INSTANCE__org_pepstock_charba_client_zoom_JsZoomHelper_ = JsZoomHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsZoomHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  IsTransitionKey = goog.module.get('org.pepstock.charba.client.options.IsTransitionKey$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@type {JsZoomHelper}*/
JsZoomHelper.f_INSTANCE__org_pepstock_charba_client_zoom_JsZoomHelper_;
$Util.$setClassMetadata(JsZoomHelper, "org.pepstock.charba.client.zoom.JsZoomHelper");

exports = JsZoomHelper;

//# sourceMappingURL=JsZoomHelper.js.map
