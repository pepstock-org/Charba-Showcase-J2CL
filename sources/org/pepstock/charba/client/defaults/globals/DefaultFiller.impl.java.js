goog.module('org.pepstock.charba.client.defaults.globals.DefaultFiller$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFiller = goog.require('org.pepstock.charba.client.defaults.IsDefaultFiller$impl');

let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.enums.DrawTime$impl');

/**
 * @implements {IsDefaultFiller}
 */
class DefaultFiller extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultFiller} */
 static $create__() {
  DefaultFiller.$clinit();
  let $instance = new DefaultFiller();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultFiller__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultFiller__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_isPropagate__() {
  return DefaultFiller.f_DEFAULT_PROPAGATE__org_pepstock_charba_client_defaults_globals_DefaultFiller_;
 }
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return DrawTime.f_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime;
 }
 
 static $clinit() {
  DefaultFiller.$clinit = () =>{};
  DefaultFiller.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultFiller;
 }
 
 static $loadModules() {
  DrawTime = goog.module.get('org.pepstock.charba.client.enums.DrawTime$impl');
 }
}
/**@const {boolean}*/
DefaultFiller.f_DEFAULT_PROPAGATE__org_pepstock_charba_client_defaults_globals_DefaultFiller_ = true;
IsDefaultFiller.$markImplementor(DefaultFiller);
$Util.$setClassMetadata(DefaultFiller, "org.pepstock.charba.client.defaults.globals.DefaultFiller");

exports = DefaultFiller;

//# sourceMappingURL=DefaultFiller.js.map
