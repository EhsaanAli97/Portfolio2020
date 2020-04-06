<?php
	// if(isset($_POST['submit'])){
	// 	$name=$_POST['name'];
	// 	$email=$_POST['email'];
	// 	$message=$_POST['message'];

	// 	$to='ehsaanali123@gmail.com'; // Receiver Email ID, Replace with your email ID
	// 	$subject='Form Submission';
	// 	$message="Name :".$name."\n"."Wrote the following :"."\n\n".$message;
	// 	$headers="From: ".$email;

	// 	if(mail($to, $subject, $message, $headers)){
	// 		echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
	// 	}
	// 	else{
	// 		echo "Something went wrong!";
	// 	}
	// }

	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];


	$email_subject = "New Form Submission";

	$email_body = "User Name: $name.\n".
					"User Email: $email.\n".
						"User Message: $message.\n";

	$to = "ehsaanali123@gmail.com";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: index.html");

?>