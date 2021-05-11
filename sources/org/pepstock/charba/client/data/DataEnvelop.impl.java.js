goog.module('org.pepstock.charba.client.data.DataEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class DataEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DataEnvelop(Object)'.
 /** @template T @return {!DataEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  DataEnvelop.$clinit();
  let $instance = new DataEnvelop();
  $instance.$ctor__org_pepstock_charba_client_data_DataEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'DataEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_data_DataEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_data_DataEnvelop__java_lang_Object__boolean(content, false);
 }
 //Factory method corresponding to constructor 'DataEnvelop(Object, boolean)'.
 /** @template T @return {!DataEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  DataEnvelop.$clinit();
  let $instance = new DataEnvelop();
  $instance.$ctor__org_pepstock_charba_client_data_DataEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'DataEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_DataEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 static $clinit() {
  DataEnvelop.$clinit = () =>{};
  DataEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DataEnvelop, "org.pepstock.charba.client.data.DataEnvelop");

exports = DataEnvelop;

//# sourceMappingURL=DataEnvelop.js.map
