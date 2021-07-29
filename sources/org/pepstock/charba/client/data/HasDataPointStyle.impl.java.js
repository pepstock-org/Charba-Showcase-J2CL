goog.module('org.pepstock.charba.client.data.HasDataPointStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let DataPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.data.DataPointStyleHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasDataPointStyle.$LambdaAdaptor$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @interface
 */
class HasDataPointStyle {
 /** @abstract @return {DataPointStyleHandler} */
 m_getPointStyleHandler__() {}
 /** @abstract */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(/** Array<PointStyle> */ pointStyle) {}
 /** @abstract @return {List<PointStyle>} */
 m_getPointStyle__() {}
 /** @abstract */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ pointStyle) {}
 /** @abstract @return {PointStyleType} */
 m_getPointStyleType__() {}
 /** @abstract @return {List<HTMLImageElement>} */
 m_getPointStyleAsImages__() {}
 /** @abstract */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** Array<HTMLCanvasElement> */ pointStyle) {}
 /** @abstract @return {List<HTMLCanvasElement>} */
 m_getPointStyleAsCanvas__() {}
 /** @abstract @return {PointStyleCallback} */
 m_getPointStyleCallback__() {}
 /** @abstract */
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** PointStyleCallback */ pointStyleCallback) {}
 /** @return {HasDataPointStyle} */
 static $adapt(/** ?function():DataPointStyleHandler */ fn) {
  HasDataPointStyle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(/** !HasDataPointStyle */ $thisArg, /** Array<PointStyle> */ pointStyle) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   $thisArg.m_getPointStyleHandler__().m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle_$pp_org_pepstock_charba_client_data(pointStyle);
  }
 }
 /** @return {List<PointStyle>} */
 static m_getPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle(/** !HasDataPointStyle */ $thisArg) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyle___$pp_org_pepstock_charba_client_data();
  }
  return /**@type {ArrayEnumList<PointStyle>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(PointStyle.m_values__(), /**@type {!Array<PointStyle>}*/ ($Arrays.$create([0], PointStyle))));
 }
 
 static m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** !HasDataPointStyle */ $thisArg, /** Array<HTMLImageElement> */ pointStyle) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   $thisArg.m_getPointStyleHandler__().m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img_$pp_org_pepstock_charba_client_data(pointStyle);
  }
 }
 /** @return {PointStyleType} */
 static m_getPointStyleType__$default__org_pepstock_charba_client_data_HasDataPointStyle(/** !HasDataPointStyle */ $thisArg) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyleType___$pp_org_pepstock_charba_client_data();
  }
  return PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType;
 }
 /** @return {List<HTMLImageElement>} */
 static m_getPointStyleAsImages__$default__org_pepstock_charba_client_data_HasDataPointStyle(/** !HasDataPointStyle */ $thisArg) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyleAsImages___$pp_org_pepstock_charba_client_data();
  }
  return /**@type {List<HTMLImageElement>}*/ (Collections.m_emptyList__());
 }
 
 static m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** !HasDataPointStyle */ $thisArg, /** Array<HTMLCanvasElement> */ pointStyle) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   $thisArg.m_getPointStyleHandler__().m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas_$pp_org_pepstock_charba_client_data(pointStyle);
  }
 }
 /** @return {List<HTMLCanvasElement>} */
 static m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_data_HasDataPointStyle(/** !HasDataPointStyle */ $thisArg) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyleAsCanvas___$pp_org_pepstock_charba_client_data();
  }
  return /**@type {List<HTMLCanvasElement>}*/ (Collections.m_emptyList__());
 }
 /** @return {PointStyleCallback} */
 static m_getPointStyleCallback__$default__org_pepstock_charba_client_data_HasDataPointStyle(/** !HasDataPointStyle */ $thisArg) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   return $thisArg.m_getPointStyleHandler__().m_getPointStyleCallback___$pp_org_pepstock_charba_client_data();
  }
  return null;
 }
 
 static m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** !HasDataPointStyle */ $thisArg, /** PointStyleCallback */ pointStyleCallback) {
  HasDataPointStyle.$clinit();
  if (!$Equality.$same($thisArg.m_getPointStyleHandler__(), null)) {
   $thisArg.m_getPointStyleHandler__().m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback_$pp_org_pepstock_charba_client_data(pointStyleCallback);
  }
 }
 
 static $clinit() {
  HasDataPointStyle.$clinit = () =>{};
  HasDataPointStyle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasDataPointStyle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasDataPointStyle;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasDataPointStyle.$LambdaAdaptor$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
HasDataPointStyle.$markImplementor(/**@type {Function}*/ (HasDataPointStyle));
$Util.$setClassMetadataForInterface(HasDataPointStyle, "org.pepstock.charba.client.data.HasDataPointStyle");

exports = HasDataPointStyle;

//# sourceMappingURL=HasDataPointStyle.js.map
