import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Main Program
        System.out.println("Program Kasir");

        // Variabel dan Tipe Data
        double totalBelanja = 0;
        String item;
        double harga;
        int jumlah;

        // Header
        System.out.println("==============");

        // Input item dan harga
        Scanner input = new Scanner(System.in);
        while (true) {
            System.out.print("Masukkan nama item (selesai untuk mengakhiri): ");
            item = input.nextLine();

            if (item.equalsIgnoreCase("selesai")) {
                break; // Keluar dari loop jika pengguna memasukkan "selesai"
            }

            System.out.print("Masukkan harga item: ");
            harga = input.nextDouble();

            System.out.print("Masukkan jumlah item yang dibeli: ");
            jumlah = input.nextInt();
            input.nextLine(); // Membuang karakter newline

            // Hitung subtotal untuk item ini
            double subtotal = harga * jumlah;

            // Output
            System.out.println("Item: " + item);
            System.out.println("Harga per item: " + harga);
            System.out.println("Jumlah item: " + jumlah);
            System.out.println("Subtotal: " + subtotal);

            // Tambahkan subtotal ke total belanja
            totalBelanja += subtotal;
        }

        // Tampilkan total belanja
        System.out.println("\nTotal Belanja: " + totalBelanja);

        // Input
        double pembayaran;
        System.out.print("Masukkan jumlah uang yang dibayarkan: ");
        pembayaran = input.nextDouble();

        // Hitung kembalian
        double kembalian = pembayaran - totalBelanja;

        // Output
        System.out.println("Kembalian: " + kembalian);

        // Pesan terima kasih
        System.out.println("\nTerima kasih atas pembelian Anda!");
    }
}
