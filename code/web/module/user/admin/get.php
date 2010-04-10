<?php

require_once(MODULE_ROOT . '/user/user.func.php');

class Main extends acframe
{

    protected $need_session = true;
    protected $need_login   = true;

    public function process()
    {
        $conn = db_connect();
        fail_test($conn, false);

        $user = get_user_by_username($conn, request::$arr_get['username']);
        fail_test($user, false);

        $groups = db_fetch_lines($conn, 'SELECT * FROM `groups`', -1);
        fail_test($groups, false);

        db_close($conn);

        response::add_data('user', $user);
        response::add_data('groups', $groups);
        response::add_data('seed', session::gen_vcode());

        return true;
    }

    public function display()
    {
        $this->set_my_tpl('user_admin.tpl.php');
        return true;
    }
}

?>
