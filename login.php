<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Roku Flashback - Login</title>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/foundation.css">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>

  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
</head>
<body>
<?php include('templates/header.php'); ?>
<div class="small-12 large-9 large-push-3 large-centered columns">
        <img src="images/logo.png" id="logo" alt="Logo">
        </div>

<?php if(!empty($message)):?>
	<p><?php echo $message;?></p>
	<?php endif;?>
	<form action="admin_login.php" method="POST" id="loginSection">
		<label>Username:
			<input type="text" class="loginBox" name="username" value="">
		</label>
		<label>Password:
			<input type="password" class="loginBox" name="password">
		</label>
		<button type="submit" id="submitButton2">Login</button>
	</form>