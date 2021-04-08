<?php 

foreach($value as $v)
{
    if($sport == 'mma')
    {
        // Attempt insert query execution
        $sql = "INSERT INTO events_mma (name, link) VALUES ({$v['name']}, {$v['link']})";
        if(mysqli_query($link, $sql)){
            echo "Records inserted successfully.";
        } else{
            echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
        }

        // Close connection
        mysqli_close($link);
    } 
    elseif($sport == 'basketball')
    {
        // Attempt insert query execution
        $sql = "INSERT INTO events_basketball (name, link) VALUES ({$v['name']}, {$v['link']})";
        if(mysqli_query($link, $sql)){
            echo "Records inserted successfully.";
        } else{
            echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
        }

        // Close connection
        mysqli_close($link);
    }
}