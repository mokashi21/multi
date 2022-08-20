var arr = [2, 3, 4, 5, 6, 7 ];

// Method to calculate the
// product of the array
function multiply() {
    var pro = 1;
    for (i = 0; i < arr.length; i++)
        pro = pro * arr[i];
    return pro;
}
    console.log(multiply());
