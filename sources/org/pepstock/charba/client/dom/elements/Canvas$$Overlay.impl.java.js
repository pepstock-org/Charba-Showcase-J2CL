goog.module('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let ImageMimeType = goog.forwardDeclare('org.pepstock.charba.client.enums.ImageMimeType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {CanvasRenderingContext2D} */
 static m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(/** !HTMLCanvasElement */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CanvasRenderingContext2D}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object($thisArg.getContext($Overlay.f_CONTEXT_2D__org_pepstock_charba_client_dom_elements_Canvas_$Overlay_)), Context2dItem_$Overlay));
 }
 /** @return {boolean} */
 static m_isSupported__$devirt__org_pepstock_charba_client_dom_elements_Canvas(/** !HTMLCanvasElement */ $thisArg) {
  $Overlay.$clinit();
  return !$Equality.$same($thisArg.getContext($Overlay.f_CONTEXT_2D__org_pepstock_charba_client_dom_elements_Canvas_$Overlay_), null);
 }
 /** @return {?string} */
 static m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas(/** !HTMLCanvasElement */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_enums_ImageMimeType($thisArg, ImageMimeType.f_PNG__org_pepstock_charba_client_enums_ImageMimeType);
 }
 /** @return {?string} */
 static m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas__double(/** !HTMLCanvasElement */ $thisArg, /** number */ encoderOptions) {
  $Overlay.$clinit();
  return $Overlay.m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_enums_ImageMimeType__double($thisArg, ImageMimeType.f_PNG__org_pepstock_charba_client_enums_ImageMimeType, encoderOptions);
 }
 /** @return {?string} */
 static m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_enums_ImageMimeType(/** !HTMLCanvasElement */ $thisArg, /** ImageMimeType */ type) {
  $Overlay.$clinit();
  return $Overlay.m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_enums_ImageMimeType__double($thisArg, type, $Overlay.f_DEFAULT_ENCODER_OPTIONS__org_pepstock_charba_client_dom_elements_Canvas_$Overlay);
 }
 /** @return {?string} */
 static m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_enums_ImageMimeType__double(/** !HTMLCanvasElement */ $thisArg, /** ImageMimeType */ type, /** number */ encoderOptions) {
  $Overlay.$clinit();
  let checkedImageMimeType = Key.m_isValid__org_pepstock_charba_client_commons_Key(type) ? type : ImageMimeType.f_PNG__org_pepstock_charba_client_enums_ImageMimeType;
  return $thisArg.toDataURL(checkedImageMimeType.m_value__(), Checker.m_betweenOrDefault__double__double__double__double(encoderOptions, 0, 1, $Overlay.f_DEFAULT_ENCODER_OPTIONS__org_pepstock_charba_client_dom_elements_Canvas_$Overlay));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLCanvasElement;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  ImageMimeType = goog.module.get('org.pepstock.charba.client.enums.ImageMimeType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Canvas_$Overlay = "canvas";
/**@const {?string}*/
$Overlay.f_CONTEXT_2D__org_pepstock_charba_client_dom_elements_Canvas_$Overlay_ = "2d";
/**@const {number}*/
$Overlay.f_DEFAULT_ENCODER_OPTIONS__org_pepstock_charba_client_dom_elements_Canvas_$Overlay = 0.92;
$Util.$setClassMetadata($Overlay, "HTMLCanvasElement");

exports = $Overlay;

//# sourceMappingURL=Canvas$$Overlay.js.map
