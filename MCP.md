# Model Context Protocol (MCP): Membuka Era Baru AI yang Terhubung

> Materi Sharing Session — Divisi IT

---

## Daftar Isi

1. [Apa Itu MCP?](#1-apa-itu-mcp)
2. [Mengapa MCP Penting?](#2-mengapa-mcp-penting)
3. [Manfaat MCP](#3-manfaat-mcp)
4. [MCP Berguna Per Role](#4-mcp-berguna-per-role)
5. [Contoh Use Case & Daily Workflow](#5-contoh-use-case--daily-workflow)
6. [Before & After Menggunakan MCP](#6-before--after-menggunakan-mcp)
7. [Cara Memulai](#7-cara-memulai)

---

## 1. Apa Itu MCP?

**Model Context Protocol (MCP)** adalah protokol terbuka yang dikembangkan oleh Anthropic pada akhir 2024. MCP menjadi standar universal yang memungkinkan AI (seperti Claude) untuk **terhubung langsung ke tools, data, dan layanan eksternal** — secara aman dan terstruktur.

Analogi sederhana:

> MCP itu seperti **USB-C untuk AI**. Dulu setiap perangkat punya kabel berbeda; sekarang ada satu standar yang bisa menyambungkan semua. MCP melakukan hal yang sama — satu protokol untuk menghubungkan AI ke semua sistem yang kamu pakai.

### Bagaimana MCP Bekerja?

```
┌─────────────┐        MCP Protocol        ┌──────────────────────┐
│  AI (Claude) │ ◄────────────────────────► │   MCP Server         │
│             │                             │  (Tools, Data, API)  │
└─────────────┘                             └──────────────────────┘
                                                      │
                                          ┌───────────┼───────────┐
                                          ▼           ▼           ▼
                                      Google     GitHub      Database
                                      Drive      Issues       Lokal
```

MCP terdiri dari tiga komponen utama:

- **MCP Host** — aplikasi AI yang digunakan (contoh: Claude Desktop, Claude.ai)
- **MCP Client** — bagian dalam host yang mengelola koneksi ke server
- **MCP Server** — program yang mengekspos tools/data ke AI (bisa lokal maupun remote)

---

## 2. Mengapa MCP Penting?

Sebelum MCP, AI hanya bisa membantu berdasarkan **teks yang kamu ketik**. AI tidak bisa:

- Membuka file di komputermu
- Mengecek email atau kalender
- Membaca kode di repository GitHub
- Mengupdate tiket di Jira
- Menjalankan query database

Dengan MCP, semua itu **bisa dilakukan langsung oleh AI** — tanpa kamu perlu copy-paste manual bolak-balik.

MCP mengubah AI dari sekadar **chatbot** menjadi **asisten kerja yang aktif dan terhubung**.

---

## 3. Manfaat MCP

### Efisiensi Waktu
AI bisa langsung mengambil konteks dari sistem yang relevan tanpa kamu harus menyediakan informasinya secara manual. Pekerjaan yang biasa memakan 30 menit bisa selesai dalam 5 menit.

### Akurasi yang Lebih Tinggi
Karena AI bekerja dengan data asli (bukan data yang kamu tulis ulang), risiko salah informasi atau data basi jauh berkurang.

### Otomasi Workflow Kompleks
MCP memungkinkan AI menjalankan rangkaian aksi multi-langkah — buka file → baca isi → update dokumen → kirim notifikasi — semuanya dalam satu instruksi.

### Standar Terbuka & Aman
MCP dirancang dengan keamanan sebagai prioritas. Setiap koneksi bersifat eksplisit, terkontrol, dan bisa di-audit. Tidak ada data yang dikirim tanpa izin pengguna.

### Ekosistem yang Berkembang Cepat
Ratusan MCP server sudah tersedia untuk berbagai platform populer, dan komunitas terus membangun yang baru setiap harinya.

---

## 4. MCP Berguna Per Role

> **Keterangan status:**
> - ✅ **Official** — dibangun dan dimaintain langsung oleh vendor (first-party)
> - 🔧 **Community** — open-source, dibangun komunitas, aktif dimaintain
> - ⚠️ **Catatan** — ada syarat atau keterbatasan yang perlu diperhatikan

---

### 🎨 Frontend Engineer (FE)

| MCP Server | Status | Fungsi |
|---|---|---|
| **GitHub MCP** | ✅ Official | Baca PR, review diff komponen UI, buat issues langsung dari AI |
| **Figma MCP** | ✅ Official ⚠️ | Ambil token desain, spesifikasi komponen, dan aset dari Figma — *butuh paid plan (Professional/Enterprise)* |
| **Sentry MCP** | ✅ Official | Baca error JavaScript/runtime yang dilaporkan dari browser |
| **Slack MCP** | ✅ Official | Baca feedback desain dari channel, kirim update progress |
| **Filesystem MCP** | ✅ Official (ref. Anthropic) | Baca dan tulis file lokal (komponen, stylesheet, config) |
| **Brave Search MCP** | ✅ Official | Cari solusi CSS, library, dan referensi MDN secara real-time |
| **Linear MCP** | ✅ Official | Buat dan update issues UI, kelola sprint frontend |

**Contoh perintah:**
> *"Baca komponen `Button.tsx` di repo kita, bandingkan dengan spesifikasi di Figma, dan identifikasi perbedaan yang perlu disesuaikan."*

---

### ⚙️ Backend Engineer (BE)

| MCP Server | Status | Fungsi |
|---|---|---|
| **GitHub MCP** | ✅ Official | Review PR, baca kode service lain, buat dan update issues |
| **Sentry MCP** | ✅ Official | Baca stack trace error produksi dan analisis root cause |
| **PostgreSQL MCP** | ✅ Official (ref. Anthropic) | Jalankan query, analisis schema, debug data langsung |
| **Docker MCP** | ✅ Official | Kelola container, lihat log service, jalankan exec |
| **Redis MCP** | 🔧 Community | Inspect keys, debug cache, pantau TTL |
| **Filesystem MCP** | ✅ Official (ref. Anthropic) | Baca config, environment file, dan struktur proyek |
| **Brave Search MCP** | ✅ Official | Cari dokumentasi library, RFC, dan best practice |

**Contoh perintah:**
> *"Ambil 10 error terbaru dari Sentry untuk service `order-api`, baca file handler yang relevan di GitHub, dan jelaskan root cause-nya."*

---

### 🧪 Quality Assurance (QA)

| MCP Server | Status | Fungsi |
|---|---|---|
| **GitHub MCP** | ✅ Official | Baca deskripsi PR dan commit untuk memahami scope perubahan |
| **Atlassian MCP** | ✅ Official ⚠️ | Akses Jira & Confluence — *khusus Atlassian Cloud; self-hosted pakai community `sooperset/mcp-atlassian`* |
| **Linear MCP** | ✅ Official | Update status bug, baca acceptance criteria tiket |
| **Sentry MCP** | ✅ Official | Cek apakah bug yang dilaporkan sudah tercatat sebagai error |
| **Filesystem MCP** | ✅ Official (ref. Anthropic) | Baca dan tulis file test case, test plan, dan skrip otomasi |
| **Slack MCP** | ✅ Official | Kirim laporan hasil testing ke channel terkait |
| **Brave Search MCP** | ✅ Official | Cari referensi edge case, standar pengujian, dan teknik testing |

**Contoh perintah:**
> *"Baca tiket Jira #DEV-204 beserta PR yang terkait di GitHub, lalu generate test case lengkap mencakup happy path, edge case, dan negative scenario."*

---

### 🛠️ Operations / DevOps (OPS)

| MCP Server | Status | Fungsi |
|---|---|---|
| **Docker MCP** | ✅ Official | Inspect container, lihat log, restart service, jalankan exec |
| **GitHub MCP** | ✅ Official | Baca pipeline CI/CD, cek status workflow, baca deployment config |
| **Sentry MCP** | ✅ Official | Baca error produksi, analisis spike, debug insiden |
| **Slack MCP** | ✅ Official | Kirim notifikasi insiden, update status, eskalasi alert |
| **PostgreSQL MCP** | ✅ Official (ref. Anthropic) | Jalankan query diagnostik, pantau koneksi aktif dan slow query |
| **Filesystem MCP** | ✅ Official (ref. Anthropic) | Baca config, log file lokal, dan skrip deployment |
| **Kubernetes MCP** | 🔧 Community ⚠️ | Baca status pod/deployment — *belum ada official first-party; gunakan komunitas seperti `sozercan/kubectl-ai` atau `huchunlinnk/mcp-remote-server-kubernetes`* |
| **Brave Search MCP** | ✅ Official | Cari runbook, dokumentasi platform, solusi insiden |

**Contoh perintah:**
> *"Cek semua pod yang status-nya tidak Running di namespace production, ambil log error-nya, dan draft RCA sementara untuk dikirim ke channel #ops-incident."*

---

> 💡 **Referensi MCP server terlengkap:** [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io) — official MCP Registry (live sejak September 2025).

---

## 5. Contoh Use Case & Daily Workflow

### Use Case 1: Frontend Engineer — UI Consistency Check

**Workflow harian FE:**

```
Pagi (sebelum mulai coding):
1. Buka Claude Desktop
2. "Ambil semua PR yang menyentuh folder /components di GitHub hari ini"
3. Claude membaca diff dan daftar komponen yang berubah
4. "Bandingkan komponen Button.tsx dengan spesifikasi di Figma"
5. Claude mendeteksi perbedaan warna, spacing, dan state yang belum match

Siang (setelah implementasi):
6. "Review PR #88 yang baru aku push, fokus ke aksesibilitas dan responsivitas"
7. Claude memberikan inline comment suggestions langsung
8. "Buat tiket Jira untuk perbedaan desain yang ditemukan tadi"
```

---

### Use Case 2: Backend Engineer — Debug & Root Cause Analysis

**Workflow saat ada insiden:**

```
1. "Ambil 20 error terbaru dari Sentry untuk service payment-api"
2. Claude membaca stack trace dan mengelompokkan error berdasarkan pola
3. "Buka file handler yang relevan di GitHub dan analisis kemungkinan penyebabnya"
4. Claude membaca kode dan mengidentifikasi logic yang bermasalah
5. "Jalankan query ini di database staging untuk memverifikasi hipotesis"
6. Claude mengeksekusi query dan membaca hasilnya
7. "Tulis RCA draft dan buat PR description untuk fix-nya"
```

---

### Use Case 3: QA — Test Case Generation dari Tiket

**Workflow sebelum testing:**

```
Setiap ada tiket masuk ke sprint:
1. "Baca tiket Jira #DEV-310 dan PR yang terkait di GitHub"
2. Claude membaca acceptance criteria + diff kode perubahan
3. "Generate test case lengkap: happy path, edge case, negative scenario"
4. Claude menghasilkan test case terstruktur dalam format tabel
5. "Simpan test case ini ke file TestPlan_DEV-310.md di folder /docs"
6. "Update status tiket di Jira jadi 'In Testing' dan tambahkan link test plan"
```

---

### Use Case 4: OPS — Incident Response & Monitoring

**Workflow saat alert masuk:**

```
Alert masuk di PagerDuty jam 02.00:
1. "Cek semua pod di namespace production yang statusnya tidak Running"
2. Claude menarik status dari Kubernetes dan menampilkan pod bermasalah
3. "Ambil log 50 baris terakhir dari pod order-worker yang crash"
4. Claude membaca log dan mengidentifikasi error utama
5. "Query database: cek apakah ada spike koneksi dalam 1 jam terakhir"
6. Claude menjalankan query diagnostik
7. "Draft update insiden untuk channel #ops-incident di Slack"
8. Claude menyusun timeline + status + langkah mitigasi secara otomatis
```

---

## 6. Before & After Menggunakan MCP

### Skenario A: Frontend Engineer — Review Konsistensi Komponen

**BEFORE (tanpa MCP) — ±50 menit**

```
1. Buka Figma, cari spesifikasi komponen yang relevan         [8 menit]
2. Buka GitHub, navigasi ke file komponen di repo             [5 menit]
3. Bandingkan manual antara kode dan Figma                    [15 menit]
4. Tulis catatan perbedaan di Notion/dokumen terpisah         [10 menit]
5. Buat tiket Jira untuk setiap perbedaan secara manual       [10 menit]

Total: ~48 menit — banyak tab terbuka, rentan kelupaan
```

**AFTER (dengan MCP) — ±10 menit**

```
1. "Bandingkan komponen Card.tsx di GitHub dengan Figma"      [otomatis]
2. Claude membaca kode + spec Figma sekaligus                 [otomatis]
3. Claude menampilkan diff terstruktur per properti           [2 menit review]
4. "Buat tiket Jira untuk setiap perbedaan yang ditemukan"    [otomatis]

Total: ~10 menit — satu instruksi, semua terhubung
```

**Penghematan: ~38 menit per sesi review komponen**

---

### Skenario B: Backend Engineer — Debug Error Produksi

**BEFORE (tanpa MCP) — ±45 menit**

```
1. Buka Sentry di browser, cari dan filter error terbaru      [8 menit]
2. Copy stack trace ke Claude                                  [3 menit]
3. Buka GitHub, cari file handler yang relevan                 [7 menit]
4. Copy-paste kode ke Claude untuk dianalisis                  [3 menit]
5. Diskusi dan dapat penjelasan root cause                     [10 menit]
6. Tulis RCA dan PR description manual                         [12 menit]

Total: ~43 menit — banyak copy-paste, konteks sering hilang
```

**AFTER (dengan MCP) — ±12 menit**

```
1. "Ambil 10 error terbaru Sentry service order-api"           [otomatis]
2. "Baca file handler terkait di GitHub dan analisis"          [otomatis]
3. Claude memberikan root cause analysis lengkap               [3 menit review]
4. "Tulis draft RCA dan PR description"                        [otomatis]

Total: ~12 menit — konteks lengkap, tanpa copy-paste
```

**Penghematan: ~31 menit per sesi debug**

---

### Skenario C: QA — Membuat Test Case dari Tiket

**BEFORE (tanpa MCP) — ±1 jam**

```
1. Buka Jira, baca acceptance criteria tiket                   [5 menit]
2. Buka GitHub, baca PR diff untuk memahami perubahan         [10 menit]
3. Buka Confluence, cari test plan template                    [5 menit]
4. Tulis test case manual satu per satu                        [30 menit]
5. Upload ke Confluence dan update status di Jira              [10 menit]

Total: ~60 menit per tiket — berulang dan melelahkan
```

**AFTER (dengan MCP) — ±15 menit**

```
1. "Baca tiket Jira #DEV-310 dan PR-nya di GitHub"             [otomatis]
2. "Generate test case lengkap dari acceptance criteria + diff" [otomatis]
3. Review dan revisi seperlunya                                 [8 menit]
4. "Simpan ke Confluence dan update status tiket ke In Testing" [otomatis]

Total: ~15 menit per tiket — termasuk review
```

**Penghematan: ~45 menit per tiket**

---

### Skenario D: OPS — Respons Insiden Tengah Malam

**BEFORE (tanpa MCP) — ±40 menit**

```
1. Buka terminal, kubectl get pods --all-namespaces             [5 menit]
2. Identifikasi pod bermasalah, jalankan kubectl logs manual    [10 menit]
3. Buka database client, jalankan query diagnostik             [8 menit]
4. Analisis semua data dan buat hipotesis                      [10 menit]
5. Tulis update insiden ke Slack secara manual                 [7 menit]

Total: ~40 menit — multitasking saat ngantuk, rawan salah
```

**AFTER (dengan MCP) — ±10 menit**

```
1. "Cek pod tidak sehat di namespace production"               [otomatis]
2. "Ambil log error pod yang crash + query diagnostik DB"      [otomatis]
3. Claude menganalisis dan memberikan hipotesis root cause      [2 menit review]
4. "Draft update insiden untuk #ops-incident di Slack"         [otomatis]

Total: ~10 menit — langkah terstruktur, minim human error
```

**Penghematan: ~30 menit per insiden**

---

### Ringkasan Penghematan Waktu

| Role | Task | Before | After | Hemat |
|---|---|---|---|---|
| Frontend Engineer | Review Konsistensi Komponen | 48 menit | 10 menit | **~38 menit** |
| Backend Engineer | Debug Error Produksi | 43 menit | 12 menit | **~31 menit** |
| QA | Buat Test Case dari Tiket | 60 menit | 15 menit | **~45 menit** |
| OPS | Respons Insiden | 40 menit | 10 menit | **~30 menit** |

> **Estimasi skenario sharing:** workflow berbasis MCP berpotensi menghemat waktu dari tugas repetitif dan context switching. Angka riil perlu divalidasi lewat pilot tim.

---

## 7. Cara Memulai

### Langkah 1: Install Claude Desktop
Download dari [claude.ai/download](https://claude.ai/download) dan login dengan akun Claude Pro/Teams.

### Langkah 2: Aktifkan MCP Server
Edit file konfigurasi Claude Desktop (`claude_desktop_config.json`) dan tambahkan server yang diinginkan.

Contoh untuk mengaktifkan GitHub MCP:
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "token_kamu_di_sini"
      }
    }
  }
}
```

### Langkah 3: Restart Claude Desktop
Setelah konfigurasi disimpan, restart aplikasi. MCP server yang aktif akan muncul di interface.

### Langkah 4: Mulai Gunakan
Tidak perlu sintaks khusus. Cukup instruksikan Claude seperti biasa:
> *"Lihat open issues di repo kita"* atau *"Update spreadsheet laporan dengan data hari ini"*

### Referensi & Resource

- Dokumentasi resmi MCP: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Direktori MCP servers: [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- Claude Documentation: [docs.claude.ai](https://docs.claude.ai)
- Community MCP servers: [mcp.so](https://mcp.so)

---

> *"AI terbaik bukan yang paling pintar, tapi yang paling terhubung dengan konteks kerja nyata kamu."*
>
> — Filosofi di balik MCP

---

*Dokumen ini dibuat untuk keperluan internal sharing session. Versi terakhir diperbarui: Juni 2025.*
