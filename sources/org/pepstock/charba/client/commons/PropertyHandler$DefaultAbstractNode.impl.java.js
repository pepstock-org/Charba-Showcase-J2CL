goog.module('org.pepstock.charba.client.commons.PropertyHandler.DefaultAbstractNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

class DefaultAbstractNode extends AbstractNode {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultAbstractNode} */
 static $create__() {
  DefaultAbstractNode.$clinit();
  let $instance = new DefaultAbstractNode();
  $instance.$ctor__org_pepstock_charba_client_commons_PropertyHandler_DefaultAbstractNode__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_PropertyHandler_DefaultAbstractNode__() {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(null);
 }
 
 static $clinit() {
  DefaultAbstractNode.$clinit = () =>{};
  DefaultAbstractNode.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAbstractNode;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DefaultAbstractNode, "org.pepstock.charba.client.commons.PropertyHandler$DefaultAbstractNode");

exports = DefaultAbstractNode;

//# sourceMappingURL=PropertyHandler$DefaultAbstractNode.js.map
