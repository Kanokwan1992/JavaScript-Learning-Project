function deleteData() {
  let result = confirm('ต้องการลบข้อมูลทั้งหมด');
  //   console.log(result);
  if (result) {
    console.log('ลบข้อมูลเรียบร้อย');
  } else {
    console.log('ยกเลิกการลบข้อมูล');
  }
}
