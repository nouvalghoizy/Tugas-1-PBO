#include <iostream>
using namespace std;

int main() {
    // Inisialisasi variabel
    double totalBelanja = 0;
    string item;
    double harga;
    int jumlah;

    // Header
    cout << "Program Kasir" << endl;
    cout << "==============" << endl;

    // Input item dan harga
    while (true) {
        cout << "Masukkan nama item (selesai untuk mengakhiri): ";
        cin >> item;

        if (item == "selesai") {
            break; // Keluar dari loop jika pengguna memasukkan "selesai"
        }

        cout << "Masukkan harga item: ";
        cin >> harga;

        cout << "Masukkan jumlah item yang dibeli: ";
        cin >> jumlah;

        // Hitung subtotal untuk item ini
        double subtotal = harga * jumlah;

        // Tampilkan detail item dan subtotal
        cout << "Item: " << item << endl;
        cout << "Harga per item: " << harga << endl;
        cout << "Jumlah item: " << jumlah << endl;
        cout << "Subtotal: " << subtotal << endl;

        // Tambahkan subtotal ke total belanja
        totalBelanja += subtotal;
    }

    // Tampilkan total belanja
    cout << "\nTotal Belanja: " << totalBelanja << endl;

    // Input pembayaran
    double pembayaran;
    cout << "Masukkan jumlah uang yang dibayarkan: ";
    cin >> pembayaran;

    // Hitung kembalian
    double kembalian = pembayaran - totalBelanja;

    // Tampilkan kembalian
    cout << "Kembalian: " << kembalian << endl;

    // Pesan terima kasih
    cout << "\nTerima kasih atas pembelian Anda!" << endl;

    return 0;
}

