goog.module('org.pepstock.charba.client.datalabels.DefaultLabels$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLabels = goog.require('org.pepstock.charba.client.datalabels.IsDefaultLabels$impl');

let DataLabelId = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelId$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');

/**
 * @implements {IsDefaultLabels}
 */
class DefaultLabels extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultLabels} */
 static $create__() {
  DefaultLabels.$clinit();
  let $instance = new DefaultLabels();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DefaultLabels__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DefaultLabels__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {LabelItem} */
 m_getLabel__org_pepstock_charba_client_datalabels_DataLabelId(/** DataLabelId */ arg0) {
  return IsDefaultLabels.m_getLabel__$default__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_datalabels_DataLabelId(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_hasLabel__org_pepstock_charba_client_datalabels_DataLabelId(/** DataLabelId */ arg0) {
  return IsDefaultLabels.m_hasLabel__$default__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_datalabels_DataLabelId(this, arg0);
 }
 
 static $clinit() {
  DefaultLabels.$clinit = () =>{};
  DefaultLabels.$loadModules();
  j_l_Object.$clinit();
  IsDefaultLabels.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLabels;
 }
 
 static $loadModules() {}
}
IsDefaultLabels.$markImplementor(DefaultLabels);
$Util.$setClassMetadata(DefaultLabels, "org.pepstock.charba.client.datalabels.DefaultLabels");

exports = DefaultLabels;

//# sourceMappingURL=DefaultLabels.js.map
