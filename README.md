# CDN Support

Project ini dapat langsung dijalankan tanpa diinstall dengan package manager seperti npm, karena saya sudah menyertakan link CDN TailwindCSS. 

## Struktur folder

Untuk melihat hasil keseluruhan tampilan website yang sudah jadi, silahkan install dan jalankan project ini.

- Keseluruhan tampilan website yang sudah jadi dimuat dalam file **/src/index.html**

- Untuk melihat slicing HTML, silahkan buka folder **/slicing**, lalu buka file HTML yang diinginkan di web browser.

## Light mode vs Dark mode

Sesuai dengan design di figma, website ini dirancang lebih baik untuk tampilan browser dengan mode light (terang).

## Instalasi

1. **Clone repositori ini**

    ```bash
    git clone https://github.com/malvinval/Detikcom_FrontendDesignAssignment_MalvinValerianGultom.git

2. **Pindah ke direktori project**

    ```bash
    cd Detikcom_FrontendDesignAssignment_MalvinValerianGultom

3. **Instal dependensi**

    ```bash
    npm install

4. **Jalankan Tailwind CLI Build**

    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
