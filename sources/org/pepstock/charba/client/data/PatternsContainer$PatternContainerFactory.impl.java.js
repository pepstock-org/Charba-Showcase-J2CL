goog.module('org.pepstock.charba.client.data.PatternsContainer.PatternContainerFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<Pattern>}
 */
class PatternContainerFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PatternContainerFactory} */
 static $create__() {
  PatternContainerFactory.$clinit();
  let $instance = new PatternContainerFactory();
  $instance.$ctor__org_pepstock_charba_client_data_PatternsContainer_PatternContainerFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_PatternsContainer_PatternContainerFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Pattern} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return PatternBuilder.m_build__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {Pattern} */
 m_create__() {
  return /**@type {Pattern}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), Pattern));
 }
 
 static $clinit() {
  PatternContainerFactory.$clinit = () =>{};
  PatternContainerFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PatternContainerFactory;
 }
 
 static $loadModules() {
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(PatternContainerFactory);
$Util.$setClassMetadata(PatternContainerFactory, "org.pepstock.charba.client.data.PatternsContainer$PatternContainerFactory");

exports = PatternContainerFactory;

//# sourceMappingURL=PatternsContainer$PatternContainerFactory.js.map
