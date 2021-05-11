goog.module('org.pepstock.charba.client.data.PatternsContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractContainer = goog.require('org.pepstock.charba.client.data.AbstractContainer$impl');

let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let AbstractCanvasObjectCallback = goog.forwardDeclare('org.pepstock.charba.client.data.AbstractCanvasObjectCallback$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
let DatasetPatternCallback = goog.forwardDeclare('org.pepstock.charba.client.data.DatasetPatternCallback$impl');
let PatternContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.data.PatternsContainer.PatternContainerFactory$impl');

/**
 * @extends {AbstractContainer<Pattern>}
 */
class PatternsContainer extends AbstractContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PatternsContainer} */
 static $create__org_pepstock_charba_client_data_Dataset(/** Dataset */ dataset) {
  PatternsContainer.$clinit();
  let $instance = new PatternsContainer();
  $instance.$ctor__org_pepstock_charba_client_data_PatternsContainer__org_pepstock_charba_client_data_Dataset(dataset);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_PatternsContainer__org_pepstock_charba_client_data_Dataset(/** Dataset */ dataset) {
  this.$ctor__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_data_Dataset(dataset);
 }
 /** @override @return {NativeObjectContainerFactory<Pattern>} */
 m_getFactory___$pp_org_pepstock_charba_client_data() {
  return PatternsContainer.f_FACTORY__org_pepstock_charba_client_data_PatternsContainer_;
 }
 /** @override @return {AbstractCanvasObjectCallback<Pattern>} */
 m_createCallback__org_pepstock_charba_client_data_Dataset_CanvasObjectKey_$pp_org_pepstock_charba_client_data(/** CanvasObjectKey */ key) {
  return DatasetPatternCallback.$create__org_pepstock_charba_client_data_PatternsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(this, key);
 }
 
 static $clinit() {
  PatternsContainer.$clinit = () =>{};
  PatternsContainer.$loadModules();
  AbstractContainer.$clinit();
  PatternsContainer.f_FACTORY__org_pepstock_charba_client_data_PatternsContainer_ = PatternContainerFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PatternsContainer;
 }
 
 static $loadModules() {
  DatasetPatternCallback = goog.module.get('org.pepstock.charba.client.data.DatasetPatternCallback$impl');
  PatternContainerFactory = goog.module.get('org.pepstock.charba.client.data.PatternsContainer.PatternContainerFactory$impl');
 }
}
/**@type {PatternContainerFactory}*/
PatternsContainer.f_FACTORY__org_pepstock_charba_client_data_PatternsContainer_;
$Util.$setClassMetadata(PatternsContainer, "org.pepstock.charba.client.data.PatternsContainer");

exports = PatternsContainer;

//# sourceMappingURL=PatternsContainer.js.map
