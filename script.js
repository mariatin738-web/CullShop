document.addEventListener('DOMContentLoaded', function() {
    // Data produk
    const products = [
        { diamonds: 5, price: 1500 },
        { diamonds: 12, price: 2500 },
        { diamonds: 20, price: 4000 },
        { diamonds: 50, price: 8000 },
        { diamonds: 70, price: 10000 },
        { diamonds: 100, price: 14500 },
        { diamonds: 140, price: 20000 },
        { diamonds: 210, price: 28000 },
        { diamonds: 355, price: 48000 },
        { diamonds: 500, price: 65000 },
        { diamonds: 720, price: 91000 },
        { diamonds: 1000, price: 126000 }
    ];

    // Data QRIS (URL gambar QRIS untuk setiap nominal)
    const qrisImages = {
        1500: "https://lh3.googleusercontent.com/pw/AP1GczP41Zf57N61DcGua2W68Ep5LuaYOcVKGheEX636Km9bx_hDfX0SXVo4RO8KQ5mUzFHC8KUNeP5ukyY0peeJg1iwj-FN3ZeMdrUoQGvmtCuJdNZ1iKJpiGp6vZ8gBnKjvh66RPVk0l-x7Xyr_ML0ckwb=w810-h814-s-no-gm?authuser=0",
        2500: "https://lh3.googleusercontent.com/pw/AP1GczNiI_UnfBTM7ufZEqP34CiB_Il-B7KNH2JQnFakuF3hmgxl6Re9hvIKqEt6WSJTbCTRsRBgFQ_ssU-P1qJiSaOK5cEnpTgzb_fSYpY-COSFfXl3jOfucMDRpFje-xZbdvAYVxPzWYUuhTqslSY29nSN=w824-h821-s-no-gm?authuser=0",
        4000: "https://lh3.googleusercontent.com/pw/AP1GczNM2l5Qz5FYlkVBnCmtOt9d3N8xm2ivGl-TT2SXXVqXg3GLcVyHPQux0_lgW3-zOkisF0jF0_p5SU_jhuTBWA8cG6u7wT9ZKQzktycVwYqkRaHbyKva6MQ7gsC2geSMrg1a5kN1rViLFAy2Vko-ScM5=w826-h821-s-no-gm?authuser=0",
        8000: "https://lh3.googleusercontent.com/pw/AP1GczNUwTBccXnY8RR3cDKVMW1fR_FgZzDJXxpEa9A_Dywzz365SduXkyLMM5wDsZhTaufuXwu_wdxFgqVPXqswcs_I66RRp3LLUsxai8RpbanNMZDwzzGHZTPCy4QElI4VOcHFtOgXS_qxSkSjAlTvpmr7=w823-h818-s-no-gm?authuser=0",
        10000: "https://lh3.googleusercontent.com/pw/AP1GczOeOosGqeLkqtEkISEcL3WENblX8CIS86JcFghrhX1VZm5hE3FncL_9HMT5LQ3tJ95S-JIW_hPABRd08qdUELdxzBbVquHODdD029RAxiNihjkqMYZFJG8-UvVKt96pKom4g_kDfUI0k5ytNBZmCkEw=w835-h818-s-no-gm?authuser=0",
        14500: "https://lh3.googleusercontent.com/pw/AP1GczPw5U9Y5a7R9uAVbwnc0e9xgibHBKXlEN4Svoe31Xnp6Z1GcKR0X1GpvFdQcL-z9CbrruE6h7Byo5id4Qbu2g3fUTFCj4RnUJ6VKttLCZXLYhLVScJ_2KFhNqDBHkt6sz6vxY6JJpgOnUH_eyy0tjYR=w831-h829-s-no-gm?authuser=0",
        20000: "https://lh3.googleusercontent.com/pw/AP1GczOI_HCfmG3R8ApiG-tr4dmdJwehkWCorbbHLvVw-vKia6aA5yDaJIAwOP9Glx0e80UA6kwQv7Tvn3KyuyR0kFBjMd9YYo50hWdVHUUKgx9bjn49LNraLG_WV0mbvZTm8WLvyS9zHc5EWIj8WP4CFB0r=w829-h821-s-no-gm?authuser=0",
        28000: "https://lh3.googleusercontent.com/pw/AP1GczPVEnn8X4Gb_uvWCH_aVRfB2RkOTQIzSXuYkjmpNYRVeon6qBsBbe-TF-5Q2QCaIHuDTyzQ5CoZUVxBo3_IPusSkEXxk4NQL7eLudCQYzKU6sTiqKtYiYBNyOuk8VYgyx2lQ1Sjq45HjtT9G3MoeQtr=w842-h838-s-no-gm?authuser=0",
        48000: "https://lh3.googleusercontent.com/pw/AP1GczOFipY8XM0nTU9NoiBxIcdmG-A7y3pxc985BJ3i2aMffMgXeCR0W95TN2Lv42IeIM2jcD8sCRCTqPIz5bicWl6iW1rQfU84IpHaO1Lkvo-NqYQS0uXI_hFLpERDvZ4rjEg6VCcsIfPYxCrcqaAP-lRR=w832-h829-s-no-gm?authuser=0",
        65000: "https://lh3.googleusercontent.com/pw/AP1GczNDWFdiwqqRWiM1kJSqOpkY5qgZoLxw6RYGbnfST0cefMgfu4czj0cH0Uh29lNm9lr9KdPjmHTTnpeA-zS9ZMZTWjkP24aX5jO9xXrG67QANgatmnBuZr7pyQ3fdw4PMvNrRbofbo-ea5TYdJadMZe1=w839-h833-s-no-gm?authuser=0",
        91000: "https://lh3.googleusercontent.com/pw/AP1GczNZUbDC9pN5V3WidTtvdGuzh85BXqvJ0bx_1J7ZJBfF1hCUtNe_CUic6wrF2uPdMa1Gilsfs5H-Wu1SLLHS-2M3YRNevja3u7jbL3DtqZh_00nnn1imphiUfiTCzU0E7VM3TMrH8jfkG7XEx2gixNdH=w834-h843-s-no-gm?authuser=0",
        126000: "https://lh3.googleusercontent.com/pw/AP1GczMrxnH9qtN3DfQll06hecE1ELZY6-glBWKyaK0385bUQrAEcTnxbd77EfWBi4miqZNJaHe_IqgPVbVQfEMlUT6VgMVznX8-B8_6Q1HN2PVyiuaOqFi7GTnJmHc27Bv-2ew8_QSwE3mnJnNyX8ANuRul=w367-h361-s-no-gm?authuser=0"
    };

    // State aplikasi
    let currentProduct = null;
    let currentMethod = null;

    // Navigasi
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    document.getElementById('btn-products').addEventListener('click', function() {
        showPage('products');
    });

    document.getElementById('btn-finish').addEventListener('click', function() {
        showPage('home');
    });

    // Render produk
    const productsContainer = document.getElementById('products-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.diamonds} Diamond</h3>
            <p class="price">Rp ${product.price.toLocaleString('id-ID')}</p>
            <button class="btn select-product" data-diamonds="${product.diamonds}" data-price="${product.price}">Pilih</button>
        `;
        productsContainer.appendChild(productCard);
    });

    // Pilih produk
    document.querySelectorAll('.select-product').forEach(button => {
        button.addEventListener('click', function() {
            const diamonds = this.getAttribute('data-diamonds');
            const price = parseInt(this.getAttribute('data-price'));
            
            currentProduct = { diamonds, price };
            
            document.getElementById('selected-product-name').textContent = `${diamonds} Diamond`;
            document.getElementById('selected-product-price').textContent = `Rp ${price.toLocaleString('id-ID')}`;
            
            showPage('checkout');
        });
    });

    // Form checkout
    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showPage('payment');
    });

    // Pilih metode pembayaran
    document.querySelectorAll('.method').forEach(method => {
        method.addEventListener('click', function() {
            // Hapus kelas active dari semua method
            document.querySelectorAll('.method').forEach(m => {
                m.classList.remove('active');
            });
            
            // Tambahkan kelas active ke method yang dipilih
            this.classList.add('active');
            
            currentMethod = this.getAttribute('data-method');
            
            // Sembunyikan semua detail pembayaran
            document.getElementById('dana-payment').style.display = 'none';
            document.getElementById('qris-payment').style.display = 'none';
            
            // Tampilkan detail pembayaran yang sesuai
            if (currentMethod === 'dana') {
                document.getElementById('dana-amount').textContent = `Rp ${currentProduct.price.toLocaleString('id-ID')}`;
                document.getElementById('dana-payment').style.display = 'block';
            } else if (currentMethod === 'qris') {
                document.getElementById('qris-amount').textContent = `Rp ${currentProduct.price.toLocaleString('id-ID')}`;
                document.getElementById('qris-image').src = qrisImages[currentProduct.price];
                document.getElementById('qris-payment').style.display = 'block';
            }
        });
    });

    // Konfirmasi pembayaran
    document.getElementById('btn-confirm-dana').addEventListener('click', processPayment);
    document.getElementById('btn-confirm-qris').addEventListener('click', processPayment);

    function processPayment() {
        const gameId = document.getElementById('game-id').value;
        const nickname = document.getElementById('nickname').value;
        
        // Generate order ID
        const orderId = 'ORD-' + Date.now();
        
        // Simpan data order (simulasi)
        const orderData = {
            orderId,
            product: currentProduct,
            gameId,
            nickname,
            paymentMethod: currentMethod,
            timestamp: new Date().toISOString()
        };
        
        // Simpan ke localStorage (simulasi database)
        localStorage.setItem(orderId, JSON.stringify(orderData));
        
        // Tampilkan data di halaman konfirmasi
        document.getElementById('order-id').textContent = orderId;
        document.getElementById('confirm-game-id').textContent = gameId;
        document.getElementById('confirm-nickname').textContent = nickname;
        document.getElementById('confirm-product').textContent = `${currentProduct.diamonds} Diamond`;
        document.getElementById('confirm-price').textContent = `Rp ${currentProduct.price.toLocaleString('id-ID')}`;
        document.getElementById('confirm-method').textContent = currentMethod === 'dana' ? 'DANA' : 'QRIS';
        
        // Kirim notifikasi (simulasi)
        sendNotifications(orderData);
        
        // Tampilkan halaman konfirmasi
        showPage('confirmation');
    }

    function sendNotifications(order) {
        // Simulasi mengirim email
        console.log('Mengirim email ke mariatin738@gmail.com');
        console.log('Isi email:');
        console.log(`Ada pesanan baru!
Order ID: ${order.orderId}
Produk: ${order.product.diamonds} Diamond
Harga: Rp ${order.product.price.toLocaleString('id-ID')}
ID Game: ${order.gameId}
Nickname: ${order.nickname}
Metode Pembayaran: ${order.paymentMethod === 'dana' ? 'DANA' : 'QRIS'}
Waktu: ${new Date(order.timestamp).toLocaleString()}`);
        
        // Simulasi mengirim WhatsApp
        console.log('Mengirim WhatsApp ke +6283843028605');
        console.log(`Pesanan baru: ${order.orderId} - ${order.product.diamonds} Diamond`);
    }

    function showPage(pageId) {
        // Sembunyikan semua halaman
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Tampilkan halaman yang dipilih
        document.getElementById(pageId).classList.add('active');
    }

    // Inisialisasi halaman produk
    showPage('home');
});
