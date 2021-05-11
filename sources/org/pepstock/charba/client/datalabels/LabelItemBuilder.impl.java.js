goog.module('org.pepstock.charba.client.datalabels.LabelItemBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractBuilder = goog.require('org.pepstock.charba.client.datalabels.AbstractBuilder$impl');

let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');

/**
 * @extends {AbstractBuilder<LabelItem>}
 */
class LabelItemBuilder extends AbstractBuilder {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LabelItemBuilder} */
 static $create__org_pepstock_charba_client_datalabels_LabelItem(/** LabelItem */ label) {
  LabelItemBuilder.$clinit();
  let $instance = new LabelItemBuilder();
  $instance.$ctor__org_pepstock_charba_client_datalabels_LabelItemBuilder__org_pepstock_charba_client_datalabels_LabelItem(label);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_LabelItemBuilder__org_pepstock_charba_client_datalabels_LabelItem(/** LabelItem */ label) {
  this.$ctor__org_pepstock_charba_client_datalabels_AbstractBuilder__org_pepstock_charba_client_datalabels_LabelItem(label);
 }
 
 static $clinit() {
  LabelItemBuilder.$clinit = () =>{};
  LabelItemBuilder.$loadModules();
  AbstractBuilder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelItemBuilder;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(LabelItemBuilder, "org.pepstock.charba.client.datalabels.LabelItemBuilder");

exports = LabelItemBuilder;

//# sourceMappingURL=LabelItemBuilder.js.map
