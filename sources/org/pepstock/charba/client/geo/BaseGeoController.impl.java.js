goog.module('org.pepstock.charba.client.geo.BaseGeoController$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractController = goog.require('org.pepstock.charba.client.controllers.AbstractController$impl');

let ControllerProvider = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerProvider$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseGeoControllerProvier = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoController.BaseGeoControllerProvier$impl');
let GeoControllerResource = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoControllerResource$impl');

class BaseGeoController extends AbstractController {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseGeoController} */
 static $create__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ type) {
  BaseGeoController.$clinit();
  let $instance = new BaseGeoController();
  $instance.$ctor__org_pepstock_charba_client_geo_BaseGeoController__org_pepstock_charba_client_controllers_ControllerType(type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BaseGeoController__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ type) {
  this.$ctor__org_pepstock_charba_client_controllers_AbstractController__org_pepstock_charba_client_controllers_ControllerType(type);
 }
 /** @override @return {boolean} */
 m_mustBeRegistered__() {
  return false;
 }
 /** @return {ControllerProvider} */
 static get f_PROVIDER__org_pepstock_charba_client_geo_BaseGeoController() {
  return (BaseGeoController.$clinit(), BaseGeoController.$static_PROVIDER__org_pepstock_charba_client_geo_BaseGeoController);
 }
 /** @return {GeoControllerResource} */
 static get f_RESOURCE__org_pepstock_charba_client_geo_BaseGeoController_() {
  return (BaseGeoController.$clinit(), BaseGeoController.$static_RESOURCE__org_pepstock_charba_client_geo_BaseGeoController_);
 }
 
 static $clinit() {
  BaseGeoController.$clinit = () =>{};
  BaseGeoController.$loadModules();
  AbstractController.$clinit();
  BaseGeoController.$static_PROVIDER__org_pepstock_charba_client_geo_BaseGeoController = BaseGeoControllerProvier.$create__();
  BaseGeoController.$static_RESOURCE__org_pepstock_charba_client_geo_BaseGeoController_ = GeoControllerResource.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseGeoController;
 }
 
 static $loadModules() {
  BaseGeoControllerProvier = goog.module.get('org.pepstock.charba.client.geo.BaseGeoController.BaseGeoControllerProvier$impl');
  GeoControllerResource = goog.module.get('org.pepstock.charba.client.geo.GeoControllerResource$impl');
 }
}
/**@private {ControllerProvider}*/
BaseGeoController.$static_PROVIDER__org_pepstock_charba_client_geo_BaseGeoController;
/**@private {GeoControllerResource}*/
BaseGeoController.$static_RESOURCE__org_pepstock_charba_client_geo_BaseGeoController_;
$Util.$setClassMetadata(BaseGeoController, "org.pepstock.charba.client.geo.BaseGeoController");

exports = BaseGeoController;

//# sourceMappingURL=BaseGeoController.js.map
