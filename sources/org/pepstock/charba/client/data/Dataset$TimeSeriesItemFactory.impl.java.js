goog.module('org.pepstock.charba.client.data.Dataset.TimeSeriesItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<TimeSeriesItem>}
 */
class TimeSeriesItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TimeSeriesItemFactory} */
 static $create__() {
  TimeSeriesItemFactory.$clinit();
  let $instance = new TimeSeriesItemFactory();
  $instance.$ctor__org_pepstock_charba_client_data_Dataset_TimeSeriesItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_Dataset_TimeSeriesItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {TimeSeriesItem} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return TimeSeriesItem.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {TimeSeriesItem} */
 m_create__() {
  return /**@type {TimeSeriesItem}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), TimeSeriesItem));
 }
 
 static $clinit() {
  TimeSeriesItemFactory.$clinit = () =>{};
  TimeSeriesItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesItemFactory;
 }
 
 static $loadModules() {
  TimeSeriesItem = goog.module.get('org.pepstock.charba.client.data.TimeSeriesItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(TimeSeriesItemFactory);
$Util.$setClassMetadata(TimeSeriesItemFactory, "org.pepstock.charba.client.data.Dataset$TimeSeriesItemFactory");

exports = TimeSeriesItemFactory;

//# sourceMappingURL=Dataset$TimeSeriesItemFactory.js.map
