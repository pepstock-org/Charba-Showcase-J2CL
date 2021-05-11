goog.module('org.pepstock.charba.client.positioner.JsPositionerHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition$impl');
let Point = goog.forwardDeclare('org.pepstock.charba.client.positioner.Point$impl');
let PositionerContext = goog.forwardDeclare('org.pepstock.charba.client.positioner.PositionerContext$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class JsPositionerHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsPositionerHelper} */
 static $create__() {
  let $instance = new JsPositionerHelper();
  $instance.$ctor__org_pepstock_charba_client_positioner_JsPositionerHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_positioner_JsPositionerHelper__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
  JsHelper.m_get__();
 }
 /** @return {JsPositionerHelper} */
 static m_get__() {
  JsPositionerHelper.$clinit();
  return JsPositionerHelper.f_INSTANCE__org_pepstock_charba_client_positioner_JsPositionerHelper_;
 }
 
 m_register__org_pepstock_charba_client_enums_IsTooltipPosition__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_positioner(/** IsTooltipPosition */ position, /** ?function():void */ object) {
  CharbaJsPositionerHelper.register(position.m_value__(), object);
 }
 
 m_unregister__org_pepstock_charba_client_enums_IsTooltipPosition_$pp_org_pepstock_charba_client_positioner(/** IsTooltipPosition */ position) {
  CharbaJsPositionerHelper.unregister(position.m_value__());
 }
 /** @return {Point} */
 m_invoke__org_pepstock_charba_client_enums_IsTooltipPosition__org_pepstock_charba_client_positioner_PositionerContext__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_positioner_Point_$pp_org_pepstock_charba_client_positioner(/** IsTooltipPosition */ position, /** PositionerContext */ context, /** Array */ datasetItems, /** Point */ eventPoint) {
  let pointAsObject = CharbaJsPositionerHelper.invoke(position.m_value__(), context.m_nativeObject___$pp_org_pepstock_charba_client_positioner(), datasetItems, eventPoint.m_nativeObject___$pp_org_pepstock_charba_client_positioner());
  if (!$Equality.$same(pointAsObject, null)) {
   return Point.$create__org_pepstock_charba_client_commons_NativeObject(pointAsObject);
  }
  return null;
 }
 
 static $clinit() {
  JsPositionerHelper.$clinit = () =>{};
  JsPositionerHelper.$loadModules();
  j_l_Object.$clinit();
  JsPositionerHelper.f_INSTANCE__org_pepstock_charba_client_positioner_JsPositionerHelper_ = JsPositionerHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsPositionerHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Point = goog.module.get('org.pepstock.charba.client.positioner.Point$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@type {JsPositionerHelper}*/
JsPositionerHelper.f_INSTANCE__org_pepstock_charba_client_positioner_JsPositionerHelper_;
$Util.$setClassMetadata(JsPositionerHelper, "org.pepstock.charba.client.positioner.JsPositionerHelper");

exports = JsPositionerHelper;

//# sourceMappingURL=JsPositionerHelper.js.map
