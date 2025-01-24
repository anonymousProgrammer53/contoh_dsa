// Fungsi untuk mengambil elemen <select> berdasarkan index yang diberikan
const getSortSelected = (index) => {
    return document.querySelectorAll('select')[index];
}

// Fungsi untuk membuat komponen komentar
const createComponentComment = (parentElement, { avatar, name, commentTime, body }) => {
    // Membuat elemen div untuk komentar
    const divElement = document.createElement('div');
    divElement.classList.add('comment');
    divElement.setAttribute('data-date', commentTime);  // Menetapkan tanggal dinamis
    divElement.innerHTML = `
    <div class="comment-header">
        <img class="avatar" src="${avatar}" alt="Avatar">
            <div class="user-info">
                <h4 class="username">${name}</h4>
                <p class="date">${commentTime}</p>
            </div>
    </div>
    <p class="comment-text">${body}</p>
    <div class="actions">
        <button class="reply-btn">Balas</button>
        <button class="like-btn">Suka</button>
    </div>`;
    parentElement.appendChild(divElement);  // Menambahkan komponen ke elemen induk
    return divElement;
}

// Fungsi untuk mengambil elemen dengan id 'comments-container'
const getCommentsContainer = () => {
    return document.getElementById('comments-container');
}

// Fungsi untuk menampilkan semua komentar
const displayComponentComment = () => {
    getCommentsContainer().innerHTML = '';  // Mengosongkan isi container komentar
    if (getSortSelected(0).querySelectorAll('option')[0].value === 'all_comment') {  // Memeriksa apakah pilihan adalah 'all_comment'
        // Mengambil data komentar dari file JSON
        fetch('./dataComments.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(dataComments => {
                // Membuat komponen komentar untuk setiap komentar yang diambil
                dataComments.forEach((dataComment) => {
                    createComponentComment(getCommentsContainer(), dataComment);
                });
            })
            .catch(error => {
                console.error('Error in promise chain:', error);
            });
    }
}

// Fungsi untuk menampilkan komentar dengan teks terpendek
const findAndDisplayMinComponentComment = () => {
    fetch('./dataComments.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(dataComments => {
            let dataCommentsBody = [];
            let minDataComment = dataComments[0];

            // Menyimpan semua body komentar dalam array
            dataComments.forEach((dataComment) => {
                dataCommentsBody.push(dataComment.body);
            });

            let minDataCommentBody = dataCommentsBody[0];
            // Mencari komentar dengan body terpendek
            for (let i = 1; i < dataCommentsBody.length; i++) {
                if (dataCommentsBody[i].length < minDataCommentBody.length) {
                    minDataCommentBody = dataCommentsBody[i];
                    minDataComment = dataComments[i];
                }
            }

            // Menampilkan komentar terpendek
            getCommentsContainer().innerHTML = '';
            createComponentComment(getCommentsContainer(), minDataComment);
        })
        .catch(error => {
            console.error('Error in promise chain:', error);
        });
}

// Fungsi untuk menampilkan komentar dengan teks terpanjang
const findAndDisplayMaxComponentComment = () => {
    fetch('./dataComments.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(dataComments => {
            let dataCommentsBody = [];
            let maxDataComment = dataComments[0];

            // Menyimpan semua body komentar dalam array
            dataComments.forEach((dataComment) => {
                dataCommentsBody.push(dataComment.body);
            });

            let maxDataCommentBody = dataCommentsBody[0];
            // Mencari komentar dengan body terpanjang
            for (let i = 1; i < dataCommentsBody.length; i++) {
                if (dataCommentsBody[i].length > maxDataCommentBody.length) {
                    maxDataCommentBody = dataCommentsBody[i];
                    maxDataComment = dataComments[i];
                }
            }

            // Menampilkan komentar terpanjang
            getCommentsContainer().innerHTML = '';
            createComponentComment(getCommentsContainer(), maxDataComment);
        })
        .catch(error => {
            console.error('Error in promise chain:', error);
        });
}

// Fungsi untuk menampilkan komentar terbaru
const findAndDisplayLatestComponentComment = () => {
    // Mengonversi waktu komentar ke detik
    let convertToSeconds = (timeString) => {
        let timeValue = parseInt(timeString);
        let timeUnit = timeString.match(/[a-zA-Z]+/)[0];

        if (timeUnit === 'detik') {
            return timeValue;
        } else if (timeUnit === 'menit') {
            return timeValue * 60;
        } else if (timeUnit === 'jam') {
            return timeValue * 60 * 60;
        } else if (timeUnit === 'hari') {
            return timeValue * 60 * 60 * 24;
        } else {
            return 0;  // Jika unit tidak dikenali, return 0
        }
    };

    fetch('./dataComments.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(dataComments => {
            let dataCommentsTime = [];
            let minDataCommentTime = convertToSeconds(dataComments[0].commentTime); // Inisialisasi dengan waktu pertama

            // Menyimpan waktu komentar dalam detik
            dataComments.forEach((dataComment) => {
                let commentTimeInSeconds = convertToSeconds(dataComment.commentTime);
                dataCommentsTime.push(commentTimeInSeconds);
            });

            let minDataCommentIndex = 0;
            // Mencari komentar tertua berdasarkan waktu terkecil
            for (let i = 1; i < dataCommentsTime.length; i++) {
                if (dataCommentsTime[i] < dataCommentsTime[minDataCommentIndex]) {
                    minDataCommentIndex = i;
                }
            }

            // Menampilkan komentar tertua
            getCommentsContainer().innerHTML = '';
            createComponentComment(getCommentsContainer(), dataComments[minDataCommentIndex]);  // Gunakan komentar yang sesuai
        })
        .catch(error => {
            console.error('Error in promise chain:', error);
        });
}

const findAndDisplayOldestComponentComment = () => {
    // Mengonversi waktu komentar ke detik
    let convertToSeconds = (timeString) => {
        let timeValue = parseInt(timeString);
        let timeUnit = timeString.match(/[a-zA-Z]+/)[0];

        if (timeUnit === 'detik') {
            return timeValue;
        } else if (timeUnit === 'menit') {
            return timeValue * 60;
        } else if (timeUnit === 'jam') {
            return timeValue * 60 * 60;
        } else if (timeUnit === 'hari') {
            return timeValue * 60 * 60 * 24;
        } else {
            return 0;  // Jika unit tidak dikenali, return 0
        }
    };

    fetch('./dataComments.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(dataComments => {
            let dataCommentsTime = [];
            let maxDataCommentTime = convertToSeconds(dataComments[0].commentTime); // Inisialisasi dengan waktu pertama

            // Menyimpan waktu komentar dalam detik
            dataComments.forEach((dataComment) => {
                let commentTimeInSeconds = convertToSeconds(dataComment.commentTime);
                dataCommentsTime.push(commentTimeInSeconds);
            });

            let maxDataCommentIndex = 0;
            // Mencari komentar dengan waktu tertinggi (terlama)
            for (let i = 1; i < dataCommentsTime.length; i++) {
                if (dataCommentsTime[i] > dataCommentsTime[maxDataCommentIndex]) {
                    maxDataCommentIndex = i;
                }
            }

            // Menampilkan komentar tertua (dengan waktu tertinggi)
            getCommentsContainer().innerHTML = '';
            createComponentComment(getCommentsContainer(), dataComments[maxDataCommentIndex]);  // Gunakan komentar yang sesuai
        })
        .catch(error => {
            console.error('Error in promise chain:', error);
        });
};

// Fungsi untuk membuat komponen produk
const createComponentProduct = (parentElement, { cover, name, desc, dprice, price, qty, sold }) => {
    const divElement = document.createElement('div');
    divElement.classList.add('product');

    divElement.innerHTML = `
        <div class="product-image">
            <img src="${cover}" alt="${name}">
        </div>
        <div class="product-info">
            <h1 class="product-name">${name}</h1>
            <p class="product-desc">${desc}</p>
            <div class="price-info">
                <span class="discounted-price">Rp ${dprice}</span>
                <span class="original-price">Rp ${price}</span>
            </div>
            <div class="product-stats">
                <p><strong>Stok Tersedia:</strong> ${qty}</p>
                <p><strong>Terjual:</strong> ${sold}</p>
            </div>
            <button class="buy-now-btn">Buy Now</button>
        </div>
    `;

    parentElement.appendChild(divElement);  // Menambahkan komponen produk ke elemen induk
    return divElement;
}

// Fungsi untuk mengambil elemen dengan id 'products-container'
const getProductsContainer = () => {
    return document.getElementById('products-container');
}

// Fungsi untuk menampilkan produk
const displayComponentProduct = () => {
    getProductsContainer().innerHTML = ``;  // Mengosongkan isi container produk
    if (getSortSelected(1).querySelectorAll('option')[0].value === 'all_product') {  // Memeriksa apakah pilihan adalah 'all_product'
        fetch('./dataProducts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(dataProducts => {
                // Membuat komponen produk untuk setiap produk yang diambil
                dataProducts.forEach((dataProduct) => {
                    createComponentProduct(getProductsContainer(), dataProduct);
                });
            })
            .catch(error => {
                console.error('Error in promise chain:', error);
            });
    }
}

// Fungsi untuk menyesuaikan tampilan berdasarkan nilai yang dipilih dalam dropdown
const handleSortSelectionComponent = (value) => {
    if (value === 'all_comment') {
        displayComponentComment();  // Menampilkan semua komentar
    } else if (value === 'shortest_comment') {
        findAndDisplayMinComponentComment();  // Menampilkan komentar terpendek
    } else if (value === 'longtest_comment') {
        findAndDisplayMaxComponentComment();  // Menampilkan komentar terpanjang
    } else if (value === 'latest_comment') {
        findAndDisplayLatestComponentComment();  // Menampilkan komentar terbaru
    } else if (value === 'oldest_comment') {
        findAndDisplayOldestComponentComment();  // Menampilkan komentar tertua
    } else if (value === 'all_product') {
        displayComponentProduct();  // Menampilkan semua produk
    }
}

// Event listener untuk menangani perubahan pada dropdown komentar
getSortSelected(0).addEventListener('change', () => {
    // Menyimpan nilai pilihan komentar di localStorage
    localStorage.setItem('sortValueComment', getSortSelected(0).value);
    handleSortSelectionComponent(getSortSelected(0).value);  // Menjalankan fungsi berdasarkan pilihan
});

// Event listener untuk menangani perubahan pada dropdown produk
getSortSelected(1).addEventListener('change', () => {
    // Menyimpan nilai pilihan produk di localStorage
    localStorage.setItem('sortValueProduct', getSortSelected(1).value);
    handleSortSelectionComponent(getSortSelected(1).value);  // Menjalankan fungsi berdasarkan pilihan
});

// Event listener untuk memuat halaman dan menampilkan komentar/produk berdasarkan nilai yang ada di localStorage
window.addEventListener('load', () => {
    if (localStorage.getItem('sortValueComment')) {
        getSortSelected(0).value = localStorage.getItem('sortValueComment');
        handleSortSelectionComponent(localStorage.getItem('sortValueComment'));  // Menampilkan komentar sesuai pilihan
    } else {
        displayComponentComment();  // Menampilkan semua komentar jika tidak ada pilihan di localStorage
    }

    if (localStorage.getItem('sortValueProduct')) {
        getSortSelected(1).value = localStorage.getItem('sortValueProduct');
        handleSortSelectionComponent(localStorage.getItem('sortValueProduct'));  // Menampilkan produk sesuai pilihan
    } else {
        displayComponentProduct();  // Menampilkan semua produk jika tidak ada pilihan di localStorage
    }
});
