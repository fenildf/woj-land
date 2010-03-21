<?php
/*
 * 所有请求从这里开始
 */
ob_start();
session_start();

if (!defined("ROOT"))
{
    define("ROOT",          dirname(dirname(__FILE__)));
    define("CONF_ROOT",     ROOT . "/conf");
    define("MODULE_ROOT",   ROOT . "/module");
    define("LIB_ROOT",      ROOT . "/lib");
}

require_once(CONF_ROOT . "/land.cfg.php");
error_reporting(land_conf::ERROR_REPORT_LEVEL);

require_once(LIB_ROOT . "/logger.lib.php");
require_once(LIB_ROOT . "/misc.lib.php");
require_once(LIB_ROOT . "/request.lib.php");
require_once(LIB_ROOT . "/response.lib.php");
require_once(LIB_ROOT . "/frame/cframe_loader.lib.php");

try
{
    if (false === logger::log_open(land_conf::LOG_FILE))
    {
        echo 'errno: ', logger::$err_info[logger::$errno], "\n";
        die();
    }

    request::init();

    logger::log_add_info('logid:' . request::$logid);
    logger::log_add_info('ip:' . $_SERVER['REMOTE_ADDR']);
    logger::log_add_info('uri:' . request::$uri);

    $dispatch_filename = MODULE_ROOT . request::$uri .
        '/' . strtolower(request::$method) . '.php';
    FM_LOG_TRACE('after dispatch: %s', $dispatch_filename);

    if (!is_readable($dispatch_filename))
    {
        FM_LOG_WARNING("$dispatch_filename is not readable");
        throw new Exception('找不到请求的文件');
    }
    require_once($dispatch_filename);
    cframe_loader::run("Main");
}
catch (Exception $e)
{
    response::add_header("HTTP/1.1 500 Server Internal Error");
    response::send_headers();
    echo $e->getMessage(), "\n";
}

?>
