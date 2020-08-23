var i = 1;
try {
  i *= j;
} catch (error) {
  console.log(error.message);
} finally {
  document.write('処理を完了しました。');
}