<?php
include_once("db.php");
$product_id=product_id;
$product_name=product_name;
$product_quantity=product_quantity;
$product_description=product_description;
$product_image=product_image;
if(isset('add_product'))
{
    $sql="INSERT INTO tbl_admin_add_products(product_id,product_name,product_quantity,product_description,product_image) VALUES ('$product_id','$product_name','$product_quantity','$product_description','$product_image')";
}
else
{
echo "error".mysqli_error($conn);
}
mysqli_close($conn);
?>