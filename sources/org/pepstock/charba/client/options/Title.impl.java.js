goog.module('org.pepstock.charba.client.options.Title$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');
const AbstractTitle = goog.require('org.pepstock.charba.client.options.AbstractTitle$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');

/**
 * @extends {AbstractTitle<IsDefaultTitle>}
 * @implements {IsDefaultTitle}
 */
class Title extends AbstractTitle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Title} */
 static $create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTitle__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultTitle */ defaultValues, /** ? */ nativeObject) {
  Title.$clinit();
  let $instance = new Title();
  $instance.$ctor__org_pepstock_charba_client_options_Title__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTitle__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Title__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTitle__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultTitle */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractTitle__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 static $clinit() {
  Title.$clinit = () =>{};
  Title.$loadModules();
  AbstractTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Title;
 }
 
 static $loadModules() {}
}
IsDefaultTitle.$markImplementor(Title);
$Util.$setClassMetadata(Title, "org.pepstock.charba.client.options.Title");

exports = Title;

//# sourceMappingURL=Title.js.map
