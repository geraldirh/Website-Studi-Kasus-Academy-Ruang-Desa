// lib/data.js

export let announcements = [
    {
      announcement_id: 1,
      title: 'Pengumuman Penting',
      content: 'Desa kita akan mengadakan gotong royong pada hari Minggu.',
      published_by: 1, // ID dari GovernmentOfficial
      created_at: '2023-10-01',
      updated_at: '2023-10-01',
    },
    {
      announcement_id: 2,
      title: 'Pelayanan Kesehatan Gratis',
      content: 'Pelayanan kesehatan gratis di puskesmas desa setiap Sabtu.',
      published_by: 2,
      created_at: '2023-10-05',
      updated_at: '2023-10-05',
    },
  ];
  
  // Fungsi untuk menambah pengumuman
  export function addAnnouncement(announcement) {
    announcements.push(announcement);
  }
  