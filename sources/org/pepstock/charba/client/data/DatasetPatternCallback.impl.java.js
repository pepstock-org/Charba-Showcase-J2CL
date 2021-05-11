goog.module('org.pepstock.charba.client.data.DatasetPatternCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCanvasObjectCallback = goog.require('org.pepstock.charba.client.data.AbstractCanvasObjectCallback$impl');

let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
let PatternsContainer = goog.forwardDeclare('org.pepstock.charba.client.data.PatternsContainer$impl');

/**
 * @extends {AbstractCanvasObjectCallback<Pattern>}
 */
class DatasetPatternCallback extends AbstractCanvasObjectCallback {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetPatternCallback} */
 static $create__org_pepstock_charba_client_data_PatternsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(/** PatternsContainer */ container, /** CanvasObjectKey */ property) {
  DatasetPatternCallback.$clinit();
  let $instance = new DatasetPatternCallback();
  $instance.$ctor__org_pepstock_charba_client_data_DatasetPatternCallback__org_pepstock_charba_client_data_PatternsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(container, property);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_DatasetPatternCallback__org_pepstock_charba_client_data_PatternsContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(/** PatternsContainer */ container, /** CanvasObjectKey */ property) {
  this.$ctor__org_pepstock_charba_client_data_AbstractCanvasObjectCallback__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(container, property);
 }
 
 static $clinit() {
  DatasetPatternCallback.$clinit = () =>{};
  DatasetPatternCallback.$loadModules();
  AbstractCanvasObjectCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetPatternCallback;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DatasetPatternCallback, "org.pepstock.charba.client.data.DatasetPatternCallback");

exports = DatasetPatternCallback;

//# sourceMappingURL=DatasetPatternCallback.js.map
