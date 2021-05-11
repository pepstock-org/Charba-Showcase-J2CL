goog.module('org.pepstock.charba.client.defaults.globals.DefaultHover$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultInteraction = goog.require('org.pepstock.charba.client.defaults.globals.DefaultInteraction$impl');

class DefaultHover extends DefaultInteraction {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultHover} */
 static $create__() {
  DefaultHover.$clinit();
  let $instance = new DefaultHover();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultHover__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultHover__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultInteraction__();
 }
 
 static $clinit() {
  DefaultHover.$clinit = () =>{};
  DefaultHover.$loadModules();
  DefaultInteraction.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultHover;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DefaultHover, "org.pepstock.charba.client.defaults.globals.DefaultHover");

exports = DefaultHover;

//# sourceMappingURL=DefaultHover.js.map
