goog.module('org.pepstock.charba.client.dom.elements.CastHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let CanvasGradientItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
let CanvasPatternItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
let Div_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CastHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CastHelper} */
 static $create__() {
  let $instance = new CastHelper();
  $instance.$ctor__org_pepstock_charba_client_dom_elements_CastHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_elements_CastHelper__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {HTMLCanvasElement} */
 static m_toCanvas__java_lang_Object(/** * */ object) {
  CastHelper.$clinit();
  return /**@type {HTMLCanvasElement}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object(CastHelper.m_checkAndGetObject__java_lang_Object(object)), $Overlay));
 }
 /** @return {HTMLDivElement} */
 static m_toDiv__java_lang_Object(/** * */ object) {
  CastHelper.$clinit();
  return /**@type {HTMLDivElement}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object(CastHelper.m_checkAndGetObject__java_lang_Object(object)), Div_$Overlay));
 }
 /** @return {HTMLImageElement} */
 static m_toImg__java_lang_Object(/** * */ object) {
  CastHelper.$clinit();
  return /**@type {HTMLImageElement}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object(CastHelper.m_checkAndGetObject__java_lang_Object(object)), Img_$Overlay));
 }
 /** @return {CanvasPattern} */
 static m_toPattern__java_lang_Object(/** * */ object) {
  CastHelper.$clinit();
  return /**@type {CanvasPattern}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object(CastHelper.m_checkAndGetObject__java_lang_Object(object)), CanvasPatternItem_$Overlay));
 }
 /** @return {CanvasGradient} */
 static m_toGradient__java_lang_Object(/** * */ object) {
  CastHelper.$clinit();
  return /**@type {CanvasGradient}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object(CastHelper.m_checkAndGetObject__java_lang_Object(object)), CanvasGradientItem_$Overlay));
 }
 /** @return {*} */
 static m_checkAndGetObject__java_lang_Object(/** * */ object) {
  return Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(object, "Object to cast");
 }
 
 static $clinit() {
  CastHelper.$clinit = () =>{};
  CastHelper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CastHelper;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  CanvasGradientItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
  CanvasPatternItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
  Div_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CastHelper, "org.pepstock.charba.client.dom.elements.CastHelper");

exports = CastHelper;

//# sourceMappingURL=CastHelper.js.map
