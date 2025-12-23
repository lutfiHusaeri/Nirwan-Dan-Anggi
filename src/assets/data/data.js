export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Nirwan Kusaeri',
            child: 'Putra ke 1',
            father: 'Bunyamin',
            mother: 'Aisyah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Anggi',
            child: 'Putri ke 5',
            father: 'Wawan',
            mother: 'Sadiah',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Januari',
            date: '07',
            day: 'Rabu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Januari',
            date: '07',
            day: 'Rabu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Pasir Cikur, RT 04/ RW 03, Desa. Sirnagalih, Kec.Cipongkor, Kab.Bandung Barat'
    },

    link: {
        calendar: 'https://calendar.app.google/nhAK1WNnZQeccio3A',
        map: 'https://maps.app.goo.gl/bwaK6SceEYNC5HFa9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Belum Tersedia',
            icon: './src/assets/images/bca.png',
            rekening: '07-01-2026'
        },
        {
            id: 2,
            name: 'Belum Tersedia',
            icon: './src/assets/images/bri.png',
            rekening: '07-01-2026'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbw_qhXCKL3MsjUp2RF7N3diiFaj5GXI2AVCehkAM69bPNcLEbYjvXFnNUB9ET80_NBW/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
