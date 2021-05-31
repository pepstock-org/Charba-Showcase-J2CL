goog.module('org.pepstock.charba.client.options.StandardScaleId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractStandardKey = goog.require('org.pepstock.charba.client.options.AbstractStandardKey$impl');
const ScaleId = goog.require('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @implements {ScaleId}
 */
class StandardScaleId extends AbstractStandardKey {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!StandardScaleId} */
 static $create__java_lang_String(/** ?string */ value) {
  StandardScaleId.$clinit();
  let $instance = new StandardScaleId();
  $instance.$ctor__org_pepstock_charba_client_options_StandardScaleId__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_StandardScaleId__java_lang_String(/** ?string */ value) {
  this.$ctor__org_pepstock_charba_client_options_AbstractStandardKey__java_lang_String(value);
  ScaleId.m_checkIfValid__org_pepstock_charba_client_options_ScaleId(this);
 }
 
 static $clinit() {
  StandardScaleId.$clinit = () =>{};
  StandardScaleId.$loadModules();
  AbstractStandardKey.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardScaleId;
 }
 
 static $loadModules() {}
}
ScaleId.$markImplementor(StandardScaleId);
$Util.$setClassMetadata(StandardScaleId, "org.pepstock.charba.client.options.StandardScaleId");

exports = StandardScaleId;

//# sourceMappingURL=StandardScaleId.js.map
