goog.module('org.pepstock.charba.client.items.ScalesNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ScalesNode extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScalesNode} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  ScalesNode.$clinit();
  let $instance = new ScalesNode();
  $instance.$ctor__org_pepstock_charba_client_items_ScalesNode__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_ScalesNode__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 /** @return {Map<?string, ScaleItem>} */
 m_getItems__() {
  let result = /**@type {!HashMap<?string, ScaleItem>}*/ (HashMap.$create__());
  let keys = this.m_keys__();
  if (!keys.isEmpty()) {
   for (let $iterator = keys.m_iterator__(); $iterator.m_hasNext__(); ) {
    let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
    {
     result.put(key.m_value__(), ScaleItem.$create__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_commons_NativeObject(IsScaleId.m_create__java_lang_String(key.m_value__()), this.m_getValue__org_pepstock_charba_client_commons_Key(key)));
    }
   }
  }
  return /**@type {Map<?string, ScaleItem>}*/ (Collections.m_unmodifiableMap__java_util_Map(result));
 }
 /** @return {ScaleItem} */
 m_getScaleIsInside__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  let keys = this.m_keys__();
  if (!keys.isEmpty()) {
   for (let $iterator = keys.m_iterator__(); $iterator.m_hasNext__(); ) {
    let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
    {
     let scaleItem = ScaleItem.$create__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_commons_NativeObject(IsScaleId.m_create__java_lang_String(key.m_value__()), this.m_getValue__org_pepstock_charba_client_commons_Key(key));
     if (scaleItem.m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event)) {
      return scaleItem;
     }
    }
   }
  }
  return null;
 }
 /** @return {boolean} */
 m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  return !$Equality.$same(this.m_getScaleIsInside__org_pepstock_charba_client_dom_BaseNativeEvent(event), null);
 }
 
 static $clinit() {
  ScalesNode.$clinit = () =>{};
  ScalesNode.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScalesNode;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ScalesNode, "org.pepstock.charba.client.items.ScalesNode");

exports = ScalesNode;

//# sourceMappingURL=ScalesNode.js.map
