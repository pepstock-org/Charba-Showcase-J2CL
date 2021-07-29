goog.module('org.pepstock.charba.client.options.Subtitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultSubtitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultSubtitle$impl');
const AbstractTitle = goog.require('org.pepstock.charba.client.options.AbstractTitle$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');

/**
 * @extends {AbstractTitle<IsDefaultSubtitle>}
 * @implements {IsDefaultSubtitle}
 */
class Subtitle extends AbstractTitle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Subtitle} */
 static $create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultSubtitle__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultSubtitle */ defaultValues, /** ? */ nativeObject) {
  Subtitle.$clinit();
  let $instance = new Subtitle();
  $instance.$ctor__org_pepstock_charba_client_options_Subtitle__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultSubtitle__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Subtitle__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultSubtitle__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultSubtitle */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractTitle__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 static $clinit() {
  Subtitle.$clinit = () =>{};
  Subtitle.$loadModules();
  AbstractTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Subtitle;
 }
 
 static $loadModules() {}
}
IsDefaultSubtitle.$markImplementor(Subtitle);
$Util.$setClassMetadata(Subtitle, "org.pepstock.charba.client.options.Subtitle");

exports = Subtitle;

//# sourceMappingURL=Subtitle.js.map
