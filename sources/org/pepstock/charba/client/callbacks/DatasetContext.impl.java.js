goog.module('org.pepstock.charba.client.callbacks.DatasetContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDatasetContext = goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');

class DatasetContext extends AbstractDatasetContext {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetContext} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DatasetContext.$clinit();
  let $instance = new DatasetContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 static $clinit() {
  DatasetContext.$clinit = () =>{};
  DatasetContext.$loadModules();
  AbstractDatasetContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetContext;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DatasetContext, "org.pepstock.charba.client.callbacks.DatasetContext");

exports = DatasetContext;

//# sourceMappingURL=DatasetContext.js.map
