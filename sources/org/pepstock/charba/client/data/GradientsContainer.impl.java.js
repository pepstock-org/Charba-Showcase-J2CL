goog.module('org.pepstock.charba.client.data.GradientsContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractContainer = goog.require('org.pepstock.charba.client.data.AbstractContainer$impl');

let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let AbstractCanvasObjectCallback = goog.forwardDeclare('org.pepstock.charba.client.data.AbstractCanvasObjectCallback$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
let DatasetGrandientCallback = goog.forwardDeclare('org.pepstock.charba.client.data.DatasetGrandientCallback$impl');
let GradientContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.data.GradientsContainer.GradientContainerFactory$impl');

/**
 * @extends {AbstractContainer<Gradient>}
 */
class GradientsContainer extends AbstractContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GradientsContainer} */
 static $create__org_pepstock_charba_client_data_Dataset(/** Dataset */ dataset) {
  GradientsContainer.$clinit();
  let $instance = new GradientsContainer();
  $instance.$ctor__org_pepstock_charba_client_data_GradientsContainer__org_pepstock_charba_client_data_Dataset(dataset);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_GradientsContainer__org_pepstock_charba_client_data_Dataset(/** Dataset */ dataset) {
  this.$ctor__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_data_Dataset(dataset);
 }
 /** @override @return {NativeObjectContainerFactory<Gradient>} */
 m_getFactory___$pp_org_pepstock_charba_client_data() {
  return GradientsContainer.f_FACTORY__org_pepstock_charba_client_data_GradientsContainer_;
 }
 /** @override @return {AbstractCanvasObjectCallback<Gradient>} */
 m_createCallback__org_pepstock_charba_client_data_Dataset_CanvasObjectKey_$pp_org_pepstock_charba_client_data(/** CanvasObjectKey */ key) {
  return DatasetGrandientCallback.$create__org_pepstock_charba_client_data_GradientsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(this, key);
 }
 
 static $clinit() {
  GradientsContainer.$clinit = () =>{};
  GradientsContainer.$loadModules();
  AbstractContainer.$clinit();
  GradientsContainer.f_FACTORY__org_pepstock_charba_client_data_GradientsContainer_ = GradientContainerFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientsContainer;
 }
 
 static $loadModules() {
  DatasetGrandientCallback = goog.module.get('org.pepstock.charba.client.data.DatasetGrandientCallback$impl');
  GradientContainerFactory = goog.module.get('org.pepstock.charba.client.data.GradientsContainer.GradientContainerFactory$impl');
 }
}
/**@type {GradientContainerFactory}*/
GradientsContainer.f_FACTORY__org_pepstock_charba_client_data_GradientsContainer_;
$Util.$setClassMetadata(GradientsContainer, "org.pepstock.charba.client.data.GradientsContainer");

exports = GradientsContainer;

//# sourceMappingURL=GradientsContainer.js.map
