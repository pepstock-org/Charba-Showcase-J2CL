goog.module('org.pepstock.charba.client.events.TitleEnterEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleEnterEventHandler = goog.require('org.pepstock.charba.client.events.TitleEnterEventHandler$impl');

let TitleEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleEnterEvent$impl');

/**
 * @implements {TitleEnterEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(TitleEnterEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(TitleEnterEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_TitleEnterEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_TitleEnterEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_TitleEnterEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_TitleEnterEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_TitleEnterEventHandler_$JsFunction(/** ?function(TitleEnterEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_TitleEnterEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onEnter__org_pepstock_charba_client_events_TitleEnterEvent(/** TitleEnterEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_TitleEnterEventHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
TitleEnterEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.TitleEnterEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TitleEnterEventHandler$$LambdaAdaptor.js.map
