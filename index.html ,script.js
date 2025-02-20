<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple QR Code Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2> QR Code Generator</h2>
        <input type="text" id="text" placeholder="Enter text or URL">
        <button onclick="generateQR()">Generate QR Code</button>
        <div id="qrcode"></div>
    </div>

    <!-- QRCode.js Library ,visit www.jsdelivr.com -->
    <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>

    <script>
        function generateQR() {
            const text = document.getElementById("text").value;
            const qrcodeContainer = document.getElementById("qrcode");
            qrcodeContainer.innerHTML = ""; 
            if (text.trim() !== "") 
            {
                new QRCode(qrcodeContainer, {
                    text: text,
                    width: 200,
                    height: 200 });
            } 
            else {
                alert("Please enter text or URL");
            }
        }
    </script>
</body>
</html>
