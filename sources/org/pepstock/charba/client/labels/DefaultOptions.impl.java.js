goog.module('org.pepstock.charba.client.labels.DefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptions = goog.require('org.pepstock.charba.client.labels.IsDefaultOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsLabelId = goog.forwardDeclare('org.pepstock.charba.client.labels.IsLabelId$impl');
let Label = goog.forwardDeclare('org.pepstock.charba.client.labels.Label$impl');

/**
 * @implements {IsDefaultOptions}
 */
class DefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultOptions} */
 static $create__() {
  let $instance = new DefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_labels_DefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_DefaultOptions__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {Label} */
 m_getLabel__org_pepstock_charba_client_labels_IsLabelId(/** IsLabelId */ arg0) {
  return IsDefaultOptions.m_getLabel__$default__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_labels_IsLabelId(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {List<Label>} */
 m_getLabels__() {
  return IsDefaultOptions.m_getLabels__$default__org_pepstock_charba_client_labels_IsDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_hasLabel__org_pepstock_charba_client_labels_IsLabelId(/** IsLabelId */ arg0) {
  return IsDefaultOptions.m_hasLabel__$default__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_labels_IsLabelId(this, arg0);
 }
 /** @return {DefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_labels_DefaultOptions() {
  return (DefaultOptions.$clinit(), DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_labels_DefaultOptions);
 }
 
 static $clinit() {
  DefaultOptions.$clinit = () =>{};
  DefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsDefaultOptions.$clinit();
  DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_labels_DefaultOptions = DefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultOptions;
 }
 
 static $loadModules() {}
}
/**@private {DefaultOptions}*/
DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_labels_DefaultOptions;
IsDefaultOptions.$markImplementor(DefaultOptions);
$Util.$setClassMetadata(DefaultOptions, "org.pepstock.charba.client.labels.DefaultOptions");

exports = DefaultOptions;

//# sourceMappingURL=DefaultOptions.js.map
