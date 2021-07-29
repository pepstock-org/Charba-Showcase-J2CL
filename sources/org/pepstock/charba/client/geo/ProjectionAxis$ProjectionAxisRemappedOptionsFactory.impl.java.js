goog.module('org.pepstock.charba.client.geo.ProjectionAxis.ProjectionAxisRemappedOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerMapperFactory = goog.require('org.pepstock.charba.client.controllers.ControllerMapperFactory$impl');

let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let ProjectionAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxisMapper$impl');

/**
 * @extends {ControllerMapperFactory<ProjectionAxisMapper>}
 */
class ProjectionAxisRemappedOptionsFactory extends ControllerMapperFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ProjectionAxisRemappedOptionsFactory} */
 static $create__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ chartType) {
  ProjectionAxisRemappedOptionsFactory.$clinit();
  let $instance = new ProjectionAxisRemappedOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_ProjectionAxis_ProjectionAxisRemappedOptionsFactory__org_pepstock_charba_client_controllers_ControllerType(chartType);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ProjectionAxis_ProjectionAxisRemappedOptionsFactory__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ chartType) {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerMapperFactory__org_pepstock_charba_client_controllers_ControllerType(chartType);
 }
 /** @override @return {ProjectionAxisMapper} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return ProjectionAxisMapper.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 static $clinit() {
  ProjectionAxisRemappedOptionsFactory.$clinit = () =>{};
  ProjectionAxisRemappedOptionsFactory.$loadModules();
  ControllerMapperFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProjectionAxisRemappedOptionsFactory;
 }
 
 static $loadModules() {
  ProjectionAxisMapper = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxisMapper$impl');
 }
}
$Util.$setClassMetadata(ProjectionAxisRemappedOptionsFactory, "org.pepstock.charba.client.geo.ProjectionAxis$ProjectionAxisRemappedOptionsFactory");

exports = ProjectionAxisRemappedOptionsFactory;

//# sourceMappingURL=ProjectionAxis$ProjectionAxisRemappedOptionsFactory.js.map
