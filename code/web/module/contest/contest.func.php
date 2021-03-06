<?php

function get_contest_by_id($contest_id)
{
    $conn = db_connect();
    fail_test($conn, false);
    $sql = "SELECT * FROM `contests` WHERE `contest_id`=$contest_id";
    $contest    = db_fetch_line($conn, $sql);
    db_close($conn);
    if ($contest == false)
    {
        FM_LOG_WARNING("request a not-exist contest");
        throw new Exception("This contest does not exist in Land. Maybe it's still on noah's ark?");
    }
    return $contest;
}

function load_all_contests()
{
    $now = date("Y-m-d H:i:s");
    $sql = <<<eot
SELECT `contest_id`, `title` FROM `contests`
    ORDER BY `start_time` DESC, `contest_id` DESC
eot;
    $conn = db_connect();
    fail_test($conn, false);

    $contests = db_fetch_lines($conn, $sql, -1);
    fail_test($conn, false);

    db_close($conn);
    return $contests;
}

function load_unfinished_contests()
{
    $now = date("Y-m-d H:i:s");
    $sql = <<<eot
SELECT `contest_id`, `title` FROM `contests`
    WHERE `end_time`>'$now'
    ORDER BY `start_time` DESC, `contest_id` DESC
eot;
    $conn = db_connect();
    fail_test($conn, false);

    $contests = db_fetch_lines($conn, $sql, -1);
    fail_test($conn, false);

    db_close($conn);
    return $contests;
}

function seq_to_char($seq)
{
    return chr(ord('A') + $seq - 1);
}

function char_to_seq($char)
{
    $c = strtoupper($char{0});
    return (ord($c) - ord('A') + 1);
}

function contest_status($start_time, $end_time)
{
    $start  = time_check($start_time);
    $end    = time_check($end_time);

    if (false == $start || false == $end)
        return land_conf::CONTEST_UNKNOWN;

    $now    = time();
    if ($now < $start)
        return land_conf::CONTEST_PENDING;
    else if ($now > $end)
        return land_conf::CONTEST_FINISHED;
    else 
        return land_conf::CONTEST_RUNNING;
}

//没结束的private比赛，只有 “管理员” 和 “有private权限的” 才能访问
function check_private($contest)
{
    $status  = contest_status($contest['start_time'], $contest['end_time']);
    if ($contest['private'] && $status != land_conf::CONTEST_FINISHED
        && !is_admin() && !has_private_privilege())
    {
        return false;
    }
    else
        return true;
}

function check_pending($contest)
{
    $status = contest_status($contest['start_time'], $contest['end_time']);
    if (!is_admin() && $status == land_conf::CONTEST_PENDING)
    {
        throw new Exception("This contest is pending. Please try again later.");
    }

}

//echo seq_to_char(3), char_to_seq('B');
?>
