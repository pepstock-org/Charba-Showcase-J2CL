goog.module('org.pepstock.charba.client.datalabels.DataLabelsEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class DataLabelsEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!DataLabelsEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  DataLabelsEnvelop.$clinit();
  let $instance = new DataLabelsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsEnvelop__java_lang_Object(content);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object(content);
 }
 
 static $clinit() {
  DataLabelsEnvelop.$clinit = () =>{};
  DataLabelsEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DataLabelsEnvelop, "org.pepstock.charba.client.datalabels.DataLabelsEnvelop");

exports = DataLabelsEnvelop;

//# sourceMappingURL=DataLabelsEnvelop.js.map
