goog.module('org.pepstock.charba.client.datalabels.events.AbstractEventHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');
const EnterEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');
const LeaveEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');

/**
 * @abstract
 * @implements {EnterEventHandler}
 * @implements {LeaveEventHandler}
 * @implements {ClickEventHandler}
 */
class AbstractEventHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_datalabels_events_AbstractEventHandler__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  return true;
 }
 /** @override @return {boolean} */
 m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  return true;
 }
 /** @override @return {boolean} */
 m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  return true;
 }
 
 static $clinit() {
  AbstractEventHandler.$clinit = () =>{};
  AbstractEventHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractEventHandler;
 }
 
 static $loadModules() {}
}
EnterEventHandler.$markImplementor(AbstractEventHandler);
LeaveEventHandler.$markImplementor(AbstractEventHandler);
ClickEventHandler.$markImplementor(AbstractEventHandler);
$Util.$setClassMetadata(AbstractEventHandler, "org.pepstock.charba.client.datalabels.events.AbstractEventHandler");

exports = AbstractEventHandler;

//# sourceMappingURL=AbstractEventHandler.js.map
