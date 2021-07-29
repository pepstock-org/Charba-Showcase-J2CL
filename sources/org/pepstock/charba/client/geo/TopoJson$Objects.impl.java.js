goog.module('org.pepstock.charba.client.geo.TopoJson.Objects$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');

class Objects extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Objects} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Objects.$clinit();
  let $instance = new Objects();
  $instance.$ctor__org_pepstock_charba_client_geo_TopoJson_Objects__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_TopoJson_Objects__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {List<Key>} */
 m_propertiesKeys___$p_org_pepstock_charba_client_geo_TopoJson_Objects() {
  return this.m_keys__();
 }
 
 static $clinit() {
  Objects.$clinit = () =>{};
  Objects.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Objects;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Objects, "org.pepstock.charba.client.geo.TopoJson$Objects");

exports = Objects;

//# sourceMappingURL=TopoJson$Objects.js.map
