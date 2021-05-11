goog.module('org.pepstock.charba.client.data.DatasetGrandientCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCanvasObjectCallback = goog.require('org.pepstock.charba.client.data.AbstractCanvasObjectCallback$impl');

let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
let GradientsContainer = goog.forwardDeclare('org.pepstock.charba.client.data.GradientsContainer$impl');

/**
 * @extends {AbstractCanvasObjectCallback<Gradient>}
 */
class DatasetGrandientCallback extends AbstractCanvasObjectCallback {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetGrandientCallback} */
 static $create__org_pepstock_charba_client_data_GradientsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(/** GradientsContainer */ container, /** CanvasObjectKey */ property) {
  DatasetGrandientCallback.$clinit();
  let $instance = new DatasetGrandientCallback();
  $instance.$ctor__org_pepstock_charba_client_data_DatasetGrandientCallback__org_pepstock_charba_client_data_GradientsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(container, property);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_DatasetGrandientCallback__org_pepstock_charba_client_data_GradientsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(/** GradientsContainer */ container, /** CanvasObjectKey */ property) {
  this.$ctor__org_pepstock_charba_client_data_AbstractCanvasObjectCallback__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(container, property);
 }
 
 static $clinit() {
  DatasetGrandientCallback.$clinit = () =>{};
  DatasetGrandientCallback.$loadModules();
  AbstractCanvasObjectCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetGrandientCallback;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DatasetGrandientCallback, "org.pepstock.charba.client.data.DatasetGrandientCallback");

exports = DatasetGrandientCallback;

//# sourceMappingURL=DatasetGrandientCallback.js.map
