goog.module('org.pepstock.charba.client.data.Dataset.DataPointFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<DataPoint>}
 */
class DataPointFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DataPointFactory} */
 static $create__() {
  DataPointFactory.$clinit();
  let $instance = new DataPointFactory();
  $instance.$ctor__org_pepstock_charba_client_data_Dataset_DataPointFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_Dataset_DataPointFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {DataPoint} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return DataPoint.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {DataPoint} */
 m_create__() {
  return /**@type {DataPoint}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), DataPoint));
 }
 
 static $clinit() {
  DataPointFactory.$clinit = () =>{};
  DataPointFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataPointFactory;
 }
 
 static $loadModules() {
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(DataPointFactory);
$Util.$setClassMetadata(DataPointFactory, "org.pepstock.charba.client.data.Dataset$DataPointFactory");

exports = DataPointFactory;

//# sourceMappingURL=Dataset$DataPointFactory.js.map
