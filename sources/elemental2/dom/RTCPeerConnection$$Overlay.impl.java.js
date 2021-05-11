goog.module('elemental2.dom.RTCPeerConnection.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {Promise<RTCCertificate>} */
 static m_generateCertificate__java_lang_Object(/** * */ keygenAlgorithm) {
  $Overlay.$clinit();
  return RTCPeerConnection.generateCertificate(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(keygenAlgorithm)));
 }
 
 static m_addStream__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStream__java_lang_Object(/** !RTCPeerConnection */ $thisArg, /** MediaStream */ stream, /** * */ constraints) {
  $Overlay.$clinit();
  $thisArg.addStream(stream, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 /** @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStreamTrack__elemental2_dom_RTCRtpTransceiverInit(/** !RTCPeerConnection */ $thisArg, /** MediaStreamTrack */ trackOrKind, /** RTCRtpTransceiverInit */ init) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)), init);
 }
 /** @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStreamTrack(/** !RTCPeerConnection */ $thisArg, /** MediaStreamTrack */ trackOrKind) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)));
 }
 /** @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCRtpTransceiverInit(/** !RTCPeerConnection */ $thisArg, /** ?string */ trackOrKind, /** RTCRtpTransceiverInit */ init) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)), init);
 }
 /** @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String(/** !RTCPeerConnection */ $thisArg, /** ?string */ trackOrKind) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)));
 }
 /** @return {Promise<RTCSessionDescription>} */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__java_lang_Object(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints, /** ?function(?string):* */ errorCallback, /** * */ constraints) {
  $Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 /** @return {Promise<RTCSessionDescription>} */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints, /** ?function(?string):* */ errorCallback) {
  $Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback);
 }
 /** @return {Promise<RTCSessionDescription>} */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints) {
  $Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)));
 }
 /** @return {RTCDataChannel} */
 static m_createDataChannel__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCDataChannelInitDictionary_(/** !RTCPeerConnection */ $thisArg, /** ?string */ label, /** RTCDataChannelInitDictionary_ */ dataChannelDict) {
  $Overlay.$clinit();
  return $thisArg.createDataChannel(label, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(dataChannelDict)));
 }
 /** @return {RTCDataChannel} */
 static m_createDataChannel__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCDataChannelInitRecord_(/** !RTCPeerConnection */ $thisArg, /** ?string */ label, /** RTCDataChannelInitRecord_ */ dataChannelDict) {
  $Overlay.$clinit();
  return $thisArg.createDataChannel(label, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(dataChannelDict)));
 }
 /** @return {Promise<RTCSessionDescription>} */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__java_lang_Object(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints, /** ?function(?string):* */ errorCallback, /** * */ constraints) {
  $Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 /** @return {Promise<RTCSessionDescription>} */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints, /** ?function(?string):* */ errorCallback) {
  $Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback);
 }
 /** @return {Promise<RTCSessionDescription>} */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints) {
  $Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)));
 }
 
 static m_updateIce__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_RTCConfigurationRecord___java_lang_Object(/** !RTCPeerConnection */ $thisArg, /** RTCConfigurationRecord_ */ configuration, /** * */ constraints) {
  $Overlay.$clinit();
  $thisArg.updateIce(configuration, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RTCPeerConnection;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "RTCPeerConnection");

exports = $Overlay;

//# sourceMappingURL=RTCPeerConnection$$Overlay.js.map
