goog.module('org.pepstock.charba.client.defaults.globals.DefaultInteraction$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultInteraction = goog.require('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');

/**
 * @implements {IsDefaultInteraction}
 */
class DefaultInteraction extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultInteraction} */
 static $create__() {
  DefaultInteraction.$clinit();
  let $instance = new DefaultInteraction();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultInteraction__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultInteraction__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {InteractionMode} */
 m_getMode__() {
  return InteractionMode.f_NEAREST__org_pepstock_charba_client_enums_InteractionMode;
 }
 /** @override @return {boolean} */
 m_isIntersect__() {
  return DefaultInteraction.f_DEFAULT_INTERSECT__org_pepstock_charba_client_defaults_globals_DefaultInteraction_;
 }
 /** @override @return {InteractionAxis} */
 m_getAxis__() {
  return InteractionAxis.f_X__org_pepstock_charba_client_enums_InteractionAxis;
 }
 
 static $clinit() {
  DefaultInteraction.$clinit = () =>{};
  DefaultInteraction.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultInteraction;
 }
 
 static $loadModules() {
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
 }
}
/**@const {boolean}*/
DefaultInteraction.f_DEFAULT_INTERSECT__org_pepstock_charba_client_defaults_globals_DefaultInteraction_ = true;
IsDefaultInteraction.$markImplementor(DefaultInteraction);
$Util.$setClassMetadata(DefaultInteraction, "org.pepstock.charba.client.defaults.globals.DefaultInteraction");

exports = DefaultInteraction;

//# sourceMappingURL=DefaultInteraction.js.map
