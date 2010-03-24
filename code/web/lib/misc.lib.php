<?php

//针对多维数组
function apply_func_recursive($user_func, &$data){
    if (is_array($data))
    {
        foreach ($data as $key => &$value)
        {
            apply_func_recursive($user_func, $value);
        }
    }
    else
    {
        $data = call_user_func($user_func, $data);
    }
}

function rndstr($len = 4)
{
    $char_tbl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $str = "";
    for ($i = 0; $i < $len; $i++)
    {
        $str .= $char_tbl{mt_rand(0, 25)};
    }
    return $str;
}

function fail_test($variable, $cond = false)
{
    if ($cond === $variable)
    {
        throw new Exception("");
    }
}

function force_read($arr, $key)
{
    if (isset($arr[$key]))
    {
        return $arr[$key];
    }
    return null;
}

function dump_var($var)
{
    ob_start();
    var_dump($var);
    $d = ob_get_contents();
    ob_clean();
    return $d;
}

?>
