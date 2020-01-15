<?php
/** @var $hook;*/
require_once($_SERVER['DOCUMENT_ROOT'] . "/assets/components/recapcha/autoload.php");

$key = $modx->getOption('re-private-key', $scriptProperties, '');

$recaptchaForm = new \ReCaptcha\ReCaptcha($key);

$token = $hook->getValue('token');
$resp = $recaptchaForm->verify($token, $_SERVER['REMOTE_ADDR']);
$out['response'] = false;

if (!$resp->isSuccess()) {
    foreach ($resp->getErrorCodes() as $code) {
        //echo "Ошибка! Проверка не пройдена.";
        $out["error"]["captcha"][] = $code;
        $out['response'] = false;
    }
    $modx->log(xPDO::LOG_LEVEL_ERROR,'ERROR.');
    $modx->log(1, print_r($out, 1));
    return false;
} else {
    $out['response'] = true;
}
return $out['response'];