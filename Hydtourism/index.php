<?php
    // $arrivalDate = $_POST['arrivalDate'];
    // $duration = $_POST['duration'];
    // $adults = $_POST['adults'];
    // $children = $_POST['children'];
    // $name = $_POST['name'];
    // $phone = $_POST['phone'];
    // $email = $_POST['email'];
// Check if form is submitted
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "mydatabase"; 
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $arrivalDate = $_POST['ArrivalDate'];
    $duration = $_POST['Duration'];
    $adults = $_POST['Adults'];
    $children = $_POST['Children'];
    $name = $_POST['Name'];
    $phone = $_POST['Phone'];
    $email = $_POST['Email'];
    $sql = INSERT INTO `table`( `ArrivalDate`, `Duration`, `Adults`, `Children`, `Name`, `Phone`, `Email`) VALUES ('$arrivalDate','$duration',' $adults','$children','$name','$phone','$email');

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
} else {
    header("Location: index.html");
    exit;
}
?>
