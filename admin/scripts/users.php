<?php

if (isset($_GET['allusers'])) {
	include 'connect.php';

	$query = 'SELECT * FROM tbl_user';

	$getAllUsers = $pdo->prepare($query);
	$getAllUsers->execute();

	$users = array();

	while ($user = $getAllUsers->fetch(PDO::FETCH_ASSOC)) {
		$currentuser = array();
		$currentuser['id'] = $user['user_id'];
		$currentuser['username'] = $user['user_name'];
		$currentuser['admin'] = $user['user_admin'];
		$currentuser['access'] = $user['user_access'];
		// $currentuser['avatar'] = $user['user_avatar'];

		$users[] = $currentuser;
	}
	//print_r($users);
	echo json_encode($users);
}
?>