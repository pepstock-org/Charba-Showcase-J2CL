goog.module('org.pepstock.charba.client.options.HasPointStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPointStyleHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasPointStyle.$LambdaAdaptor$impl');
let PointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.options.PointStyleHandler$impl');

/**
 * @interface
 * @extends {IsDefaultPointStyleHandler}
 */
class HasPointStyle {
 /** @abstract @return {PointStyleHandler} */
 m_getPointStyleHandler__() {}
 /** @abstract */
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {}
 /** @abstract @override @return {PointStyle} */
 m_getPointStyle__() {}
 /** @abstract */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {}
 /** @abstract @override @return {PointStyleType} */
 m_getPointStyleType__() {}
 /** @abstract @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {}
 /** @abstract */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ pointStyle) {}
 /** @abstract @override @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {}
 /** @return {HasPointStyle} */
 static $adapt(/** ?function():PointStyleHandler */ fn) {
  HasPointStyle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_enums_PointStyle(/** !HasPointStyle */ $thisArg, /** PointStyle */ pointStyle) {
  HasPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   $thisArg.m_getPointStyleHandler__().m_setPointStyle__org_pepstock_charba_client_enums_PointStyle_$pp_org_pepstock_charba_client_options(pointStyle);
  }
 }
 /** @return {PointStyle} */
 static m_getPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle(/** !HasPointStyle */ $thisArg) {
  HasPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyle___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getPointStyle__();
 }
 
 static m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Img(/** !HasPointStyle */ $thisArg, /** HTMLImageElement */ pointStyle) {
  HasPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   $thisArg.m_getPointStyleHandler__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Img_$pp_org_pepstock_charba_client_options(pointStyle);
  }
 }
 /** @return {PointStyleType} */
 static m_getPointStyleType__$default__org_pepstock_charba_client_options_HasPointStyle(/** !HasPointStyle */ $thisArg) {
  HasPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyleType___$pp_org_pepstock_charba_client_options();
  }
  return IsDefaultPointStyleHandler.m_getPointStyleType__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler($thisArg);
 }
 /** @return {HTMLImageElement} */
 static m_getPointStyleAsImage__$default__org_pepstock_charba_client_options_HasPointStyle(/** !HasPointStyle */ $thisArg) {
  HasPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyleAsImage___$pp_org_pepstock_charba_client_options();
  }
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 
 static m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** !HasPointStyle */ $thisArg, /** HTMLCanvasElement */ pointStyle) {
  HasPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   $thisArg.m_getPointStyleHandler__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas_$pp_org_pepstock_charba_client_options(pointStyle);
  }
 }
 /** @return {HTMLCanvasElement} */
 static m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_options_HasPointStyle(/** !HasPointStyle */ $thisArg) {
  HasPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyleAsCanvas___$pp_org_pepstock_charba_client_options();
  }
  return Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 
 static $clinit() {
  HasPointStyle.$clinit = () =>{};
  HasPointStyle.$loadModules();
  IsDefaultPointStyleHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultPointStyleHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasPointStyle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasPointStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasPointStyle.$LambdaAdaptor$impl');
 }
}
HasPointStyle.$markImplementor(/**@type {Function}*/ (HasPointStyle));
$Util.$setClassMetadataForInterface(HasPointStyle, "org.pepstock.charba.client.options.HasPointStyle");

exports = HasPointStyle;

//# sourceMappingURL=HasPointStyle.js.map
