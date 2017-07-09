<?php
/**
 * Created by PhpStorm.
 * User: Antonia Dimitrova
 * Date: 9.7.2017 г.
 * Time: 19:46
 */
interface Database{
    function ExecuteQuery();
    function FetchRow();

    function Error();
    function ErrorNo();


}