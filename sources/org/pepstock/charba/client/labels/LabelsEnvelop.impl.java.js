goog.module('org.pepstock.charba.client.labels.LabelsEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class LabelsEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!LabelsEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  LabelsEnvelop.$clinit();
  let $instance = new LabelsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsEnvelop__java_lang_Object(content);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_LabelsEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object(content);
 }
 
 static $clinit() {
  LabelsEnvelop.$clinit = () =>{};
  LabelsEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(LabelsEnvelop, "org.pepstock.charba.client.labels.LabelsEnvelop");

exports = LabelsEnvelop;

//# sourceMappingURL=LabelsEnvelop.js.map
