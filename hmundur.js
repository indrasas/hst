		var x; // deklarasi variabel x sebagai variabel global
		var buttonClicked = false; // deklarasi variabel buttonClicked sebagai variabel global dan set awal ke false
		function countdown() {
			if (!buttonClicked) { // memeriksa apakah tombol telah diklik sebelum memulai perhitungan mundur
				return;
			}
			var count = 10; // waktu mundur dimulai dari 10 detik
			var countdownElem = document.getElementById("countdown"); // mendapatkan elemen countdown

			// mengulang mundur setiap 1 detik sampai mencapai 0
			x = setInterval(function() {
				if (count > 0) { // memeriksa apakah waktu mundur telah mencapai 0 sebelum mengurangi waktu mundur
					count--; // mengurangi waktu mundur
					countdownElem.innerHTML = count.toString(); // mengupdate tampilan waktu mundur di halaman
				}

				// menghentikan perhitungan mundur ketika mencapai 0
				if (count === 0) {
					clearInterval(x);
					countdownElem.innerHTML = '<a href="#link">Click Here</a>'; // mengubah tampilan waktu mundur menjadi pesan waktu habis
					var linkElem = document.getElementById("link"); // mendapatkan elemen link
					linkElem.style.display = "block"; // menampilkan link
				}
			}, 1000); // setiap 1 detik
		}

		// menangani event visibilitychange
		document.addEventListener("visibilitychange", function() {
			if (document.visibilityState === "hidden") { // ketika halaman tidak terlihat
				clearInterval(x); // menghentikan perhitungan mundur
			} else { // ketika halaman terlihat kembali
				countdown(); // memulai kembali perhitungan mundur
			}
		});
