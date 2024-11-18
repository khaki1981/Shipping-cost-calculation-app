document.getElementById("calculate").addEventListener("click", function () {
  // 入力値の取得
  const participants = parseInt(document.getElementById("participants").value) || 0;
  const weight = parseInt(document.getElementById("weight").value) || 0;
  const handle = parseInt(document.getElementById("handle").value) || 0;
  const packageCount = parseInt(document.getElementById("packageCount").value) || 0;
  const destination = document.getElementById("destination").value.trim();
  const method = document.getElementById("method").value;

  // 基本料金計算
  const experienceFee = participants * 5000;
  const firingFee = weight * 2.5 + 500;
  const handleFee = handle;
  const packagingFee = packageCount * 1000;

  // 送料計算 (例: 簡単な料金表)
  const rates = {
    EMS: { USA: 3000, Europe: 4000, Asia: 2000 },
    Air: { USA: 2500, Europe: 3500, Asia: 1500 },
  };
  const totalWeight = weight + 400; // 梱包材込み
  const shippingFee = rates[method]?.[destination] || "発送不可";

  // 合計計算
  if (shippingFee === "発送不可") {
    document.getElementById("result").innerHTML = "指定された国への発送方法が見つかりません。";
    return;
  }
  const totalFee = experienceFee + firingFee + handleFee + packagingFee + shippingFee;

  // 結果表示
  document.getElementById("result").innerHTML = `
    <p>体験代: ${experienceFee}円</p>
    <p>焼成代: ${firingFee}円</p>
    <p>取っ手代: ${handleFee}円</p>
    <p>梱包代: ${packagingFee}円</p>
    <p>送料 (${method}): ${shippingFee}円</p>
    <h3>合計金額: ${totalFee}円</h3>
  `;
});
