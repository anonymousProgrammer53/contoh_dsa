// Fungsi untuk mendapatkan elemen dengan class 'comment-container' yang digunakan untuk menampilkan komentar
const getComponentCommentContainer = () => {
  return document.querySelector('.comment-container'); // Mengambil elemen dengan class 'comment-container'
}

// Fungsi untuk mendapatkan elemen dengan class 'select-comment' yang digunakan untuk memilih jenis komentar
const getComponentCommentSelect = () => {
  return document.querySelector('.select-comment'); // Mengambil elemen dengan class 'select-comment'
}

// Fungsi untuk membuat dan menampilkan komentar berdasarkan jenis (all, shortest, longest, etc.)
const createComponentComment = (parentComponent, value = 'all-comment') => {
  // Mengosongkan isi komentar yang sudah ada sebelum menampilkan komentar baru
  getComponentCommentContainer().innerHTML = ``;

  // Melakukan fetch untuk mengambil data komentar dari file 'dataComments.json'
  fetch('./dataComments.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Menangani error jika fetch gagal
      }
      return response.json(); // Mengonversi respons menjadi format JSON
    })
    .then(dataComments => {
      let commentsToDisplay = []; // Menyimpan komentar yang akan ditampilkan

      // Memeriksa jenis komentar yang dipilih oleh pengguna
      if (value === 'fewest-likes') {
        // Mencari komentar dengan jumlah like paling sedikit
        let minDataLike = dataComments[0];

        // Loop untuk mencari komentar dengan jumlah like paling sedikit
        for (let i = 1; i < dataComments.length; i++) {
          if (dataComments[i].comment.commentReact.like < minDataLike.comment.commentReact.like) {
            minDataLike = dataComments[i]; // Memperbarui komentar dengan jumlah like paling sedikit
          }
        }

        commentsToDisplay = [minDataLike]; // Menampilkan komentar dengan paling sedikit like
      } else if (value === 'most-likes') {
        // Mencari komentar dengan jumlah like paling banyak
        let maxDataLike = dataComments[0];

        // Loop untuk mencari komentar dengan jumlah like paling banyak
        for (let i = 1; i < dataComments.length; i++) {
          if (dataComments[i].comment.commentReact.like > maxDataLike.comment.commentReact.like) {
            maxDataLike = dataComments[i]; // Memperbarui komentar dengan jumlah like paling banyak
          }
        }

        commentsToDisplay = [maxDataLike]; // Menampilkan komentar dengan paling banyak like
      } else if (value === 'shortest-comment') {
        // Mencari komentar terpendek
        let minDataComment = dataComments[0];

        // Loop untuk mencari komentar terpendek
        for (let i = 1; i < dataComments.length; i++) {
          if (dataComments[i].comment.commentBody.commentContent.length < minDataComment.comment.commentBody.commentContent.length) {
            minDataComment = dataComments[i]; // Memperbarui komentar terpendek
          }
        }

        commentsToDisplay = [minDataComment]; // Menampilkan komentar terpendek
      } else if (value === 'longest-comment') {
        // Mencari komentar dengan panjang terpanjang
        let maxDataComment = dataComments[0];

        // Loop untuk mencari komentar dengan panjang terpanjang
        for (let i = 1; i < dataComments.length; i++) {
          if (dataComments[i].comment.commentBody.commentContent.length > maxDataComment.comment.commentBody.commentContent.length) {
            maxDataComment = dataComments[i]; // Memperbarui komentar terpanjang
          }
        }

        commentsToDisplay = [maxDataComment]; // Menampilkan komentar terpanjang
      } else {
        commentsToDisplay = dataComments; // Menampilkan semua komentar jika tidak ada filter yang diterapkan
      }

      // Menambahkan komentar ke dalam container
      commentsToDisplay.forEach(dataComment => {
        const divElement = document.createElement('div'); // Membuat elemen div untuk setiap komentar
        divElement.classList.add(Object.keys(dataComment)[0]);
        divElement.innerHTML = `
          <div class=${Object.keys(dataComment.comment)[0].replace(/([A-Z])/g, '-$1').toLowerCase()}>
            <button>
              <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277"
                  d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z">
                </path>
              </svg>
            </button>
            <hr>
            <span>${dataComment.comment.commentReact.like}</span>
          </div>
          <div class=${Object.keys(dataComment.comment)[1].replace(/([A-Z])/g, '-$1').toLowerCase()}>
            <div class=${Object.keys(dataComment.comment.commentBody)[0].replace(/([A-Z])/g, '-$1').toLowerCase()}>
              <div class=${Object.keys(dataComment.comment.commentBody.user)[0].replace(/([A-Z])/g, '-$1').toLowerCase()}>
                <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277"
                    d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z">
                  </path>
                  <path stroke-width="2" fill="#707277" stroke="#707277"
                    d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z">
                  </path>
                </svg>
              </div>
              <div class=${Object.keys(dataComment.comment.commentBody.user)[1].replace(/([A-Z])/g, '-$1').toLowerCase()}>
                <span>${dataComment.comment.commentBody.user.userInfo.userName}</span>
                <p>${dataComment.comment.commentBody.user.userInfo.time}</p>
              </div>
            </div>
            <p class=${Object.keys(dataComment.comment.commentBody)[1].replace(/([A-Z])/g, '-$1').toLowerCase()}>${dataComment.comment.commentBody.commentContent}</p>
          </div>`;

        // Menambahkan div yang telah dibuat ke dalam parentComponent
        parentComponent.appendChild(divElement);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error); // Menangani error jika terjadi masalah dengan fetch
    });
}

// Menambahkan event listener pada elemen select untuk mendeteksi perubahan pilihan dan memfilter komentar
getComponentCommentSelect().addEventListener('change', () => {
  const value = getComponentCommentSelect().value; // Mendapatkan nilai dari elemen select
  if (value === 'all-comment') {
    createComponentComment(getComponentCommentContainer(), value); // Menampilkan semua komentar
  } else if (value === 'fewest-likes') {
    createComponentComment(getComponentCommentContainer(), value); // Menampilkan komentar dengan like paling sedikit
  } else if (value === 'most-likes') {
    createComponentComment(getComponentCommentContainer(), value); // Menampilkan komentar dengan like paling banyak
  } else if (value === 'shortest-comment') {
    createComponentComment(getComponentCommentContainer(), value); // Menampilkan komentar terpendek
  } else if (value === 'longest-comment') {
    createComponentComment(getComponentCommentContainer(), value); // Menampilkan komentar terpanjang
  } else {
    createComponentComment(getComponentCommentContainer(), 'all-comment'); // Default: Menampilkan semua komentar
  }
});

// Menambahkan event listener yang akan dipanggil ketika halaman selesai dimuat
window.addEventListener('load', () => {
  createComponentComment(getComponentCommentContainer(), 'all-comment'); // Menampilkan semua komentar saat halaman pertama kali dimuat
  displayCreateComponentComment2();
});

// Fungsi untuk mendapatkan elemen dengan class 'comment-container-2' yang digunakan untuk menampilkan komentar
const getComponentCommentContainer2 = () => {
  return document.querySelector('.comment-container-2'); // Mengambil elemen dengan class 'comment-container-2'
}

// Fungsi untuk mendapatkan elemen dengan class 'select-comment-2' yang digunakan untuk memilih jenis komentar
const getComponentCommentSelect2 = () => {
  return document.querySelector('.select-comment-2'); // Mengambil elemen dengan class 'select-comment-2'
}

const createComponentComment2 = (parentComponent, userName, time, commentContent, like) => {
  const divElement = document.createElement('div');
  divElement.classList.add('comment-2');
  divElement.innerHTML = `
  <div class="comment-body-2">
    <div class="user-info-2">
      <div class="user-avatar-2">
      <svg fill="none" viewBox="0 0 24 24" height="20" width="20"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linejoin="round" fill="#707277" stroke-linecap="round"
          stroke-width="2" stroke="#707277"
          d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z">
        </path>
        <path stroke-width="2" fill="#707277" stroke="#707277"
          d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z">
        </path>
      </svg>
    </div>
    <div class="user-details-2">
      <span>${userName}</span>
      <p>${time}</p>
    </div>
  </div>
  <p class="comment-content-2">${commentContent}</p>
  </div>
  <div class="comment-react-2">
    <span>${like}</span>
    <hr>
    <button>
    <svg fill="none" viewBox="0 0 24 24" height="16" width="16"
      xmlns="http://www.w3.org/2000/svg">
    <path fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277"
      d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z">
    </path>
    </svg>
    </button>
  </div>`;
  parentComponent.appendChild(divElement);
}

const displayCreateComponentComment2 = () => {
  getComponentCommentContainer2().innerHTML = ``;
  fetch('./dataComments.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(dataComments => {
      dataComments.forEach((dataComment) => {
        createComponentComment2(getComponentCommentContainer2(), dataComment.comment.commentBody.user.userInfo.userName, dataComment.comment.commentBody.user.userInfo.time, dataComment.comment.commentBody.commentContent, dataComment.comment.commentReact.like);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

const findDisplayLastCommentComponent2 = () => {
  getComponentCommentContainer2().innerHTML = ``;
  fetch('./dataComments.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(dataComments => {
      let myArray = [];

      // Fungsi untuk mengonversi string tanggal menjadi objek Date
      function convertToDate(dateString) {
        // Hapus kata 'pukul' dan trim spasi tambahan
        let dateFormatted = dateString.replace("pukul", "").trim();

        // Hapus nama hari (seperti Kamis, Jumat, dsb) di awal
        dateFormatted = dateFormatted.replace(/^[A-Za-z,]+/, "").trim();

        // Menambahkan tahun yang default (misalnya 2025) ke dalam string tanggal
        let currentYear = new Date().getFullYear(); // Ambil tahun sekarang
        dateFormatted = `${dateFormatted} ${currentYear}`;

        // Mengonversi string menjadi objek Date
        return new Date(dateFormatted);
      }

      // Proses setiap data komentar dan ambil waktu dari setiap komentar
      dataComments.forEach((dataComment) => {
        // Ambil waktu yang ada dalam comment dan masukkan ke myArray
        myArray.push(dataComment.comment.commentBody.user.userInfo.time);
      });

      // Mengonversi setiap tanggal dalam myArray menjadi objek Date dan kemudian ke detik
      let dateInSeconds = myArray.map(dateStr => convertToDate(dateStr).getTime() / 1000);
      let minVal = dateInSeconds[0];
      let index = 0;

      for (let i = 0; i < dateInSeconds.length; i++) {
        if (dateInSeconds[i] < minVal) {
          minVal = dateInSeconds[i];
          index = i;
        }
      }

      let latestComment = dataComments[index];
      createComponentComment2(
        getComponentCommentContainer2(),
        latestComment.comment.commentBody.user.userInfo.userName,
        latestComment.comment.commentBody.user.userInfo.time,
        latestComment.comment.commentBody.commentContent,
        latestComment.comment.commentReact.like
      );
    })

    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

const findDisplayFirstCommentComponent2 = () => {
  getComponentCommentContainer2().innerHTML = ``;
  fetch('./dataComments.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(dataComments => {
      let myArray = [];

      // Fungsi untuk mengonversi string tanggal menjadi objek Date
      function convertToDate(dateString) {
        // Hapus kata 'pukul' dan trim spasi tambahan
        let dateFormatted = dateString.replace("pukul", "").trim();

        // Hapus nama hari (seperti Kamis, Jumat, dsb) di awal
        dateFormatted = dateFormatted.replace(/^[A-Za-z,]+/, "").trim();

        // Menambahkan tahun yang default (misalnya 2025) ke dalam string tanggal
        let currentYear = new Date().getFullYear(); // Ambil tahun sekarang
        dateFormatted = `${dateFormatted} ${currentYear}`;

        // Mengonversi string menjadi objek Date
        return new Date(dateFormatted);
      }

      // Proses setiap data komentar dan ambil waktu dari setiap komentar
      dataComments.forEach((dataComment) => {
        // Ambil waktu yang ada dalam comment dan masukkan ke myArray
        myArray.push(dataComment.comment.commentBody.user.userInfo.time);
      });

      // Mengonversi setiap tanggal dalam myArray menjadi objek Date dan kemudian ke detik
      let dateInSeconds = myArray.map(dateStr => convertToDate(dateStr).getTime() / 1000);
      let maxVal = dateInSeconds[0];
      let index = 0;

      for (let i = 0; i < dateInSeconds.length; i++) {
        if (dateInSeconds[i] > maxVal) {
          maxVal = dateInSeconds[i];
          index = i;
        }
      }

      let latestComment = dataComments[index];
      createComponentComment2(
        getComponentCommentContainer2(),
        latestComment.comment.commentBody.user.userInfo.userName,
        latestComment.comment.commentBody.user.userInfo.time,
        latestComment.comment.commentBody.commentContent,
        latestComment.comment.commentReact.like
      );
    })

    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

getComponentCommentSelect2().addEventListener('change', () => {
  const value = getComponentCommentSelect2().value;
  if (value === 'all-comment-2') {
    displayCreateComponentComment2();
  } else if (value === 'last-comment') {
    findDisplayLastCommentComponent2();
  } else if (value === 'first-comment') {
    findDisplayFirstCommentComponent2();
  }
  else {
    displayCreateComponentComment2();
  }
});
