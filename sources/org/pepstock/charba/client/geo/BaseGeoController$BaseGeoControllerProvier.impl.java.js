goog.module('org.pepstock.charba.client.geo.BaseGeoController.BaseGeoControllerProvier$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerProvider = goog.require('org.pepstock.charba.client.controllers.ControllerProvider$impl');

let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let Injector = goog.forwardDeclare('org.pepstock.charba.client.Injector$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseGeoController = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoController$impl');
let ColorAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxis$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let SizeAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxis$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

/**
 * @implements {ControllerProvider}
 */
class BaseGeoControllerProvier extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseGeoControllerProvier} */
 static $create__() {
  BaseGeoControllerProvier.$clinit();
  let $instance = new BaseGeoControllerProvier();
  $instance.$ctor__org_pepstock_charba_client_geo_BaseGeoController_BaseGeoControllerProvier__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BaseGeoController_BaseGeoControllerProvier__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Controller} */
 m_provide__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ controllerType) {
  AxisType.m_register__org_pepstock_charba_client_configuration_AxisType(ProjectionAxis.f_TYPE__org_pepstock_charba_client_geo_ProjectionAxis);
  AxisType.m_register__org_pepstock_charba_client_configuration_AxisType(ColorAxis.f_TYPE__org_pepstock_charba_client_geo_ColorAxis);
  AxisType.m_register__org_pepstock_charba_client_configuration_AxisType(SizeAxis.f_TYPE__org_pepstock_charba_client_geo_SizeAxis);
  ResourcesType.m_getResources__().m_inject__();
  Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(BaseGeoController.f_RESOURCE__org_pepstock_charba_client_geo_BaseGeoController_);
  return BaseGeoController.$create__org_pepstock_charba_client_controllers_ControllerType(controllerType);
 }
 
 static $clinit() {
  BaseGeoControllerProvier.$clinit = () =>{};
  BaseGeoControllerProvier.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseGeoControllerProvier;
 }
 
 static $loadModules() {
  Injector = goog.module.get('org.pepstock.charba.client.Injector$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.configuration.AxisType$impl');
  BaseGeoController = goog.module.get('org.pepstock.charba.client.geo.BaseGeoController$impl');
  ColorAxis = goog.module.get('org.pepstock.charba.client.geo.ColorAxis$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  SizeAxis = goog.module.get('org.pepstock.charba.client.geo.SizeAxis$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
ControllerProvider.$markImplementor(BaseGeoControllerProvier);
$Util.$setClassMetadata(BaseGeoControllerProvier, "org.pepstock.charba.client.geo.BaseGeoController$BaseGeoControllerProvier");

exports = BaseGeoControllerProvier;

//# sourceMappingURL=BaseGeoController$BaseGeoControllerProvier.js.map
