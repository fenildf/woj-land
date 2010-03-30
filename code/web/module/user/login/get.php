<?php

class Main extends cframe
{
    protected $need_login = false;
    protected $need_info  = false;

    public function process()
    {
        /*
        if (session::$is_login)
        {
            response::set_redirect(land_conf::$web_root);
        }
         */

        if (isset($_SERVER['HTTP_REFERER']))
        {
            response::add_data("last_url", $_SERVER['HTTP_REFERER']);
        }
        else
        {
            response::add_data("last_url", land_conf::$web_root);
        }
        response::add_data("seed", rndstr(6));
        if (isset(request::$arr_get['need_login']))
        {
            response::add_data("need_login", true);
        }
        return true;
    }

    public function display()
    {
        $this->set_my_tpl("login.tpl.php");
    }
}

?>
