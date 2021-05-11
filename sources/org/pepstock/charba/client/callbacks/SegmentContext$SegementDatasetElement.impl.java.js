goog.module('org.pepstock.charba.client.callbacks.SegmentContext.SegementDatasetElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetElement = goog.require('org.pepstock.charba.client.items.DatasetElement$impl');

let CallbacksEnvelop = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');

class SegementDatasetElement extends DatasetElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SegementDatasetElement} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  SegementDatasetElement.$clinit();
  let $instance = new SegementDatasetElement();
  $instance.$ctor__org_pepstock_charba_client_callbacks_SegmentContext_SegementDatasetElement__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_SegmentContext_SegementDatasetElement__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_DatasetElement__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/**@type {!CallbacksEnvelop<?>}*/ (CallbacksEnvelop.$create__java_lang_Object(nativeObject)));
 }
 
 static $clinit() {
  SegementDatasetElement.$clinit = () =>{};
  SegementDatasetElement.$loadModules();
  DatasetElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SegementDatasetElement;
 }
 
 static $loadModules() {
  CallbacksEnvelop = goog.module.get('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
 }
}
$Util.$setClassMetadata(SegementDatasetElement, "org.pepstock.charba.client.callbacks.SegmentContext$SegementDatasetElement");

exports = SegementDatasetElement;

//# sourceMappingURL=SegmentContext$SegementDatasetElement.js.map
