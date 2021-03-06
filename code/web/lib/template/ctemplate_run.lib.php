<?php

require_once("ctemplate.lib.php");

class ctemplate_run
{
    public static $tpl_file;
    public static $arr_data;

    public static function run($filename, $classname)
    {
        self::$arr_data = response::$arr_data;
        self::$tpl_file = $filename;
        if (!is_readable(self::$tpl_file))
        {
            FM_LOG_WARNING("tpl file: %s is not readable", self::$tpl_file);
            throw new Exception("");
        }
        FM_LOG_TRACE("load template: %s", self::$tpl_file);
        require_once(self::$tpl_file);
        if (!class_exists($classname))
        {
            FM_LOG_WARNING("class: %s missing", $classname);
            throw new Exception("");
        }
        $tpl = new $classname();
        if (!($tpl instanceof itemplate))
        {
            FM_LOG_WARNINIG("tpl class not implemented itemplate");
            throw new Exception("");
        }
        $tpl->display(self::$arr_data);
    }
}

?>
