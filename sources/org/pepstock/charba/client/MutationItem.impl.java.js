goog.module('org.pepstock.charba.client.MutationItem$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class MutationItem extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MutationItem} */
 static $create__() {
  let $instance = new MutationItem();
  $instance.$ctor__org_pepstock_charba_client_MutationItem__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_MutationItem__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {MutationItem} */
 static m_get__() {
  MutationItem.$clinit();
  return MutationItem.f_INSTANCE__org_pepstock_charba_client_MutationItem_;
 }
 
 static $clinit() {
  MutationItem.$clinit = () =>{};
  MutationItem.$loadModules();
  j_l_Object.$clinit();
  MutationItem.f_INSTANCE__org_pepstock_charba_client_MutationItem_ = MutationItem.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MutationItem;
 }
 
 static $loadModules() {}
}
/**@type {MutationItem}*/
MutationItem.f_INSTANCE__org_pepstock_charba_client_MutationItem_;
$Util.$setClassMetadata(MutationItem, "org.pepstock.charba.client.MutationItem");

exports = MutationItem;

//# sourceMappingURL=MutationItem.js.map
